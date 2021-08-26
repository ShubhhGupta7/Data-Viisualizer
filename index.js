let isSizeInitialized = false;

let numRows;
let numCols;

let Data;

$('#get-graph-button').click(function(event) {
    event.preventDefault();
    
    let option = $('.input-container select').val();
    
    console.log(option);
    console.log(Data);

    swal("Success!", "Visualization created, Please scroll down!", "success")
    .then(() => {
        candelStickChart();
});
    
    
});


$('#row-size').click(function(event) {
    event.preventDefault();

    if(isSizeInitialized) {
        swal("Error!", "Dimentions are already Initialized!", "error");
        return;
    }

    numRows = $('#row-data').val();
    numCols = $('#column-data').val();

    if(numRows <= 0 || numCols <= 0) {
        swal("Error!", "Please enter valid rows and columns", "error");
        return;
    }

    if(numCols > 10) {
        swal("Warning!", "Please enter Column size less than 10", "warning");
        return;
    }

    isSizeInitialized = true;

    Data = new Array(numRows);
    for(let i = 0; i < numRows; i++) {
        Data[i] = new Array();
    }

    for(let i = 0; i < numRows; i++) {
        let tabelRow = $(`<tr id="row-no-${i}"> </tr>`);

        $('#table-container table').append(tabelRow);
    }

    for(let i = 1; i <= numRows; i++) {
        let inputContainer = $(`
            <div class="input-container">
                <label>Input Property ${i}:</label>
                <input id="input-col-${i}" type="text" placeholder="Enter property">
            </div>`
        );
        $('#data-input-form').append(inputContainer);
    }
});


let j = 0;
$('#next-column').click(function() {
    if(j > 4) {
        swal("Warning!", "You can only enter data four times!", "warning");
        return;
    }

    for(let i = 1; i <= numRows; i++) {
        let data = $(`#input-col-${i}`).val();

        let tableData = $(`<td> ${data}</td>`);
        $(`#row-no-${i - 1}`).append(tableData);

        if(j != 0) {
            Data[i - 1][j] = parseInt(data);
        } else {
            Data[i - 1][j] = data;
        }
    }

    $('#data-input-form').html('');

    for(let i = 1; i <= numRows; i++) {
        let inputContainer = $(`
            <div class="input-container">
                <label>Row ${j} -  Column ${i}:</label>
                <input id="input-col-${i}" type="number" placeholder="Data">
            </div>`
        );
        $('#data-input-form').append(inputContainer);
    }

    j++;
});


let candelStickChart = function() {
    let w = 250 * numRows;
    $('#chart-div').width(w);

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = google.visualization.arrayToDataTable(Data, true);

    var options = {
      legend:'none'
    };

    var chart = new google.visualization.CandlestickChart(document.getElementById('chart_div'));

    chart.draw(data, options);
  }
}