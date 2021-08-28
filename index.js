let isSizeInitialized = false;

let numRows;
let Data;
let numIterations = -1;


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

$('#get-graph-button').click(function(event) {
    event.preventDefault();
    
    if(!numRows && !Data) {
        swal("Error!", "Please input data!", "error");
        return;
    }

    let option = $('.input-container select').val();
    
    console.log(option);
    console.log(Data);

    switch(option) {
        case 'Candelstick Chart':
            candelStickChart(Data);
            $('#download').removeClass('display-none');
            break;

        case 'Bar Graph':
            barGraph(Data);
            $('#download').removeClass('display-none');
            break;

        case 'Pie Chart': 
            pieChart(Data);
            $('#download').removeClass('display-none');
            break;

        case 'Donut Chart':
            donutChart(Data);
            $('#download').removeClass('display-none');
            break;

        case 'Line Chart':
            lineChart(Data);
            $('#download').removeClass('display-none');
            break;

        case 'Geo Chart':
            geoChart(Data);
            $('#download').removeClass('display-none');
            break;

        case 'Word Trees':
            wordTrees(Data);
            break;

        default: break;
    }
    swal("Created!", "Please scroll down!", "success");
});

$('#choose').click(function() {
    option = $('.input-container select').val();

    switch (option) {
        case 'Candelstick Chart':
            numIterations = 4;
            break;
        case "Bar Graph":
            numIterations = 1;
            break;
        case "Pie Chart":
            numIterations = 1;
            break;
        case "Donut Chart":
            numIterations = 1;
            break;
        case "Line Chart":
            numIterations = 2;
            break;
        case "Geo Chart":
            numIterations = 1;
            break;
        case "Word Trees":
            numIterations = 0;
            break;
        default:
            break;
    }
});


$('#row-size').click(function(event) {
    event.preventDefault();

    if(isSizeInitialized) {
        swal("Error!", "Dimentions are already Initialized!", "error");
        return;
    }

    numRows = $('#row-data').val();

    if(numRows <= 0) {
        swal("Error!", "Please enter valid rows", "error");
        return;
    }

    if(numRows > 20) {
        swal("Error!", "You can input only upto 20 rows", "error");
        return;
    }   

    let propertyHeading;
    let dataHeading;
    let dataHeadingOne;
    let dataHeadingTwo;
    let tableHeader;
    option = $('.input-container select').val();
    switch (option) {
        case "Bar Graph":
            propertyHeading = $('#property-heading').val();
            dataHeading = $('#data-heading').val();

            tableHeader = $(`
                <tr> 
                    <td> ${propertyHeading} </td>
                    <td> ${dataHeading} </td>
                </tr>
            `);    
            $('table').prepend(tableHeader); 
            break;

        case "Pie Chart":
            propertyHeading = $('#property-heading').val();
            dataHeading = $('#data-heading').val();

            tableHeader = $(`
                <tr> 
                    <td> ${propertyHeading} </td>
                    <td> ${dataHeading} </td>
                </tr>
            `);    
            $('table').prepend(tableHeader);
            break;

        case "Donut Chart":
            propertyHeading = $('#property-heading').val();
            dataHeading = $('#data-heading').val();

             tableHeader = $(`
                <tr> 
                    <td> ${propertyHeading} </td>
                    <td> ${dataHeading} </td>
                </tr>
            `);    
            $('table').prepend(tableHeader); 
            break;

        case "Line Chart":
             propertyHeading = $('#property-heading').val();
             dataHeadingOne = $('#data-heading-one').val();
             dataHeadingTwo = $('#data-heading-two').val();

             tableHeader = $(`
                <tr> 
                    <td> ${propertyHeading} </td>
                    <td> ${dataHeadingOne} </td>
                    <td> ${dataHeadingTwo} </td>
                </tr>
            `);   
            $('table').prepend(tableHeader); 
            break;

        case "Geo Chart":
             dataHeadingOne = $('#data-heading').val();
            tableHeader = $(`
            <tr> 
                    <td> Country </td>
                    <td> ${dataHeadingOne} </td>
                </tr>
            `);
            $('table').prepend(tableHeader);
            
            break;

        case "Word Trees":
             tableHeader = $(`
                <tr> 
                    <td> Phrases </td>
                </tr>
            `);  

            $('table').prepend(tableHeader);
            break;

        default:
            break;
    }
 
    isSizeInitialized = true;

    $('#data-input-container').addClass("display-table-form");
    $('#data-table').addClass("display-table-form");

    $('#data-input-container').removeClass('display-none');
    $('#data-table').removeClass('display-none');

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
    if (j > numIterations) {
        swal("Error!", `No further column can be filled!`, "error");
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

    if(j < numIterations) {
        for(let i = 1; i <= numRows; i++) {
            let inputContainer = $(`
                <div class="input-container">
                    <label>Row ${j} -  Column ${i}:</label>
                    <input id="input-col-${i}" type="number" placeholder="Data">
                </div>`
            );
            $('#data-input-form').append(inputContainer);
        }
    } else {
       $('#data-input-container').addClass('display-none')
        $('#data-input-container').removeClass('display-table-form');


    }

    j++;
});


let candelStickChart = function(localData) {
    let w = 250 * numRows;
    $('#chart-div').width(w + 'px');

    $('#chart-div').height(500 + 'px');

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable(localData, true);

        var options = {
        legend:'none'
        };

        var chart_div = document.getElementById('chart_div');
        var chart = new google.visualization.CandlestickChart(chart_div);

        google.visualization.events.addListener(chart, 'ready', function() {
            $('#chartPng').attr('href', chart.getImageURI());
            $('#chartPng').attr('download', 'candle'); 
        });

        chart.draw(data, options);
    }
} 

let barGraph = function(localData) {
    let propertyHeading = $('#property-heading').val();
    let dataHeading = $('#data-heading').val();
    let _title = $('#title').val();
    
    let w = 250 * numRows;
    $('#barchart_values').width(w + 'px');

    $('#barchart_values').height(500 + 'px');

    for (let i = numRows - 1; i >= 0; i--) {
        localData[i][2] = getRandomColor();
        localData[i + 1] = localData[i];
    }

    localData[0] = [propertyHeading, dataHeading, { role: 'style' }];
    console.log(localData);

    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        var data = google.visualization.arrayToDataTable(localData);

        var view = new google.visualization.DataView(data);
        view.setColumns([0, 1,
                        { calc: "stringify",
                            sourceColumn: 1,
                            type: "string",
                            role: "annotation" },
                        2]);

        var options = {
            title: _title,
            width: 600,
            height: 400,
            bar: {groupWidth: "95%"},
            legend: { position: "none" },
        };

        var barchart_values = document.getElementById("barchart_values");
        var chart = new google.visualization.BarChart(barchart_values);

        google.visualization.events.addListener(chart, 'ready', function() {
            $('#chartPng').attr('href', chart.getImageURI());
            $('#chartPng').attr('download', 'bar'); 
        });

        chart.draw(data, options);
    }
}

let pieChart = function(localData) {

    let propertyHeading = $('#property-heading').val();
    let dataHeading = $('#data-heading').val();
    let _title = $('#title').val();

    console.log(propertyHeading);
    console.log(dataHeading);


    let w = 900;
    $('#piechart').width(w + 'px');

    $('#piechart').height(500 + 'px');


    for (let i = numRows - 1; i >= 0; i--) {
        localData[i + 1] = localData[i];
    }

    localData[0] = [propertyHeading, dataHeading];

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var data = google.visualization.arrayToDataTable(localData);

      var options = {
        title: _title,
      };

      var _piechart = document.getElementById('piechart');
        var chart = new google.visualization.PieChart(_piechart);

        google.visualization.events.addListener(chart, 'ready', function() {
            $('#chartPng').attr('href', chart.getImageURI());
            $('#chartPng').attr('download', 'pie'); 
        });

        chart.draw(data, options);
    }
}

let donutChart = function(local_data) {
    let propertyHeading = $('#property-heading').val();
    let dataHeading = $('#data-heading').val();
    let _title = $('#title').val();

    let w = 900;
    $('#donutchart').width(w + 'px');

    $('#donutchart').height(500 + 'px');


    for (let i = numRows - 1; i >= 0; i--) {
        local_data[i + 1] = local_data[i];
    }
    local_data[0] = [propertyHeading, dataHeading];
    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable(local_data);

        var options = {
            title: _title,
            pieHole: 0.4,
        };

        var _donutchart = document.getElementById('donutchart');
        var chart = new google.visualization.PieChart(_donutchart);

        google.visualization.events.addListener(chart, 'ready', function() {
            $('#chartPng').attr('href', chart.getImageURI());
            $('#chartPng').attr('download', 'donut'); 
        });

        chart.draw(data, options);
    }
}

let lineChart = function(localData) {
    let propertyHeading = $('#property-heading').val();
    let dataHeadingOne = $('#data-heading-one').val();
    let dataHeadingTwo = $('#data-heading-two').val();
    let _title = $('#title').val();

    let w = 900;
    $('#curve_chart').width(w + 'px');

    $('#curve_chart').height(500 + 'px');

    for (let i = numRows - 1; i >= 0; i--) {
        localData[i + 1] = localData[i];
    }

    localData[0] = [propertyHeading, dataHeadingOne, dataHeadingTwo],
    console.log(localData);

    google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable(localData);

        var options = {
          title: _title,
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var curve_chart = document.getElementById('curve_chart');
        var chart = new google.visualization.LineChart(curve_chart);
        google.visualization.events.addListener(chart, 'ready', function() {
            $('#chartPng').attr('href', chart.getImageURI());
            $('#chartPng').attr('download', 'line'); 
        });

        chart.draw(data, options);
    }
}

let geoChart = function(localData) {
    let dataHeadingOne = $('#data-heading').val();
    
    let w = 900;
    $('#regions_div').width(w + 'px');

    $('#regions_div').height(500 + 'px');

    for (let i = numRows - 1; i >= 0; i--) {
        localData[i + 1] = localData[i];
    }
    localData[0] = ["Country", dataHeadingOne];

    google.charts.load('current', {
        'packages': ['geochart'],
    });
    google.charts.setOnLoadCallback(drawRegionsMap);

    function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable(localData);

        var options = {};

        var regions_div = document.getElementById('regions_div');
        var chart = new google.visualization.GeoChart(regions_div);

        google.visualization.events.addListener(chart, 'ready', function() {
            $('#chartPng').attr('href', chart.getImageURI());
            $('#chartPng').attr('download', 'geo'); 
        });

        chart.draw(data, options);
    }
} 

let wordTrees = function(localData) {
    let rootWord = $('#root-word').val();

    let w = 900;
    $('#wordtree_basic').width(w + 'px');

    $('#wordtree_basic').height(500 + 'px');

    for (let i = numRows - 1; i >= 0; i--) {
        localData[i + 1] = localData[i];
    }
    localData[0] = ['Phrases'];

    google.charts.load('current', {packages:['wordtree']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable(localData);

        var options = {
            wordtree: {
            format: 'implicit',
            word: rootWord
            }
        };

        var wordtree_basic = document.getElementById('wordtree_basic');
        var chart = new google.visualization.WordTree(wordtree_basic);

        chart.draw(data, options);
    }
}