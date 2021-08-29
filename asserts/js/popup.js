let option;

let candelStickHeading = 'CandelStick Chart';
let candelStickDescription = 'You have to fill 5 columns where as first column contains the property and following contains the data.';

let barGraphHeading = 'Bar Graph';
let barGraphDescription = 'You have to fill 3 columns where first column contains the property and following column will contain data.';

let pieChartHeading = 'Pie Chart';
let pieChartDescription = 'You have to fill 2 columns where first column contains the property and following column will contain data.';

let donutChartHeading = 'Donut Chart';
let donutChartDescription = 'You have to fill 2 columns where first column contains the property and following column will contain data.';

let lineChartHeading = 'Line Chart';
let lineChartDesciption ='You have to fill columns where as first column contains the property and following contains the data.';

let geoChartHeading = "Geo Chart";
let geoChartDescription = "You have to fill 2 columns where first column contains the country name and following column will contain data.";

let wordTreeHeading = 'Word Trees';
let wordTreeDescription = 'For each row you have to fill only one column which contains a phrase.';

$('#cancel').click(function() {
    $('#floating-about').removeClass("animate__fadeInUp");
    $('#floating-about').addClass("animate__backOutDown");
    window.setTimeout(() => {
        $('#floating-about').removeClass("display");
        $('#floating-about').addClass("display-none");
    }, 1000);
});

$('#choose').click(function(event) {
    event.preventDefault();
    
    option = $('.input-container select').val();
    if(option == 'None') {
        return;
    }

    $('#row-size').addClass('display-table-form');
    $('#dimension-container').addClass('dimension-container');
    $('#dimension-container').addClass('display-table-form');

    let heading;
    let description;

    switch(option) {
        case 'Candelstick Chart':
            heading = candelStickHeading;
            description = candelStickDescription;
            getCandelStick();
            break;

        case 'Bar Graph':
            heading = barGraphHeading;
            description = barGraphDescription;
            getBarGraph();
            break;

        case 'Pie Chart': 
            heading = pieChartHeading;
            description = pieChartDescription;
            getPieChart();
            break;

        case 'Donut Chart':
            heading = donutChartHeading;
            description = donutChartDescription;
            getDonutChart();
            break;

        case 'Line Chart':
            heading = lineChartHeading;
            description = lineChartDesciption;
            getLineChart();
            break;
        
        case 'Geo Chart':
            heading = geoChartHeading;
            description = geoChartDescription;
            getGeoChart();
            break;

        case 'Word Trees':
            heading = wordTreeHeading;
            description = wordTreeDescription;
            getWordTree();
            break;

        default: break;
    }

    if(heading && description) {
        $('#about span').html(heading);
        $('#about p').html(description);

        let popup = $('#floating-about');
        popup.removeClass('display-none');
        popup.addClass('animate__fadeInUp');
        popup.addClass('display');
        
    }
});

let getPieChart = function() {
    $('#input-form-container').html(
        $(`
            <div id="form-header">Input Dimensions</div>

            <div id="input-container">
                <form action="">

                    <div class="input-container">
                        <label>Title:</label>
                        <input type="text" id="title"
                        placeholder="eg:My Daily Activities">
                    </div>

                    <div class="input-container">
                        <label>Input Property Heading:</label>
                        <input type="text" id="property-heading"
                        placeholder="eg:Task">
                    </div>

                    <div class="input-container">
                        <label>Input Data Heading:</label>
                        <input type="text" id="data-heading"
                        placeholder="eg:Hours per Day">
                    </div>

                    <div class="input-container">
                        <label>Input Rows:</label>
                        <input type="number" id="row-data"
                        placeholder="eg:3">
                    </div>
                </form>
            </div>
        `)
    );
}

let getDonutChart = function() {
    $('#input-form-container').html(
        $(`
            <div id="form-header">Input Dimensions</div>

            <div id="input-container">
                <form action="">

                    <div class="input-container">
                        <label>Title:</label>
                        <input type="text" id="title"
                        placeholder="eg:My Daily Activities">
                    </div>

                    <div class="input-container">
                        <label>Input Property Heading:</label>
                        <input type="text" id="property-heading"
                        placeholder="eg:Task">
                    </div>

                    <div class="input-container">
                        <label>Input Data Heading:</label>
                        <input type="text" id="data-heading"
                        placeholder="eg:Hours per Day">
                    </div>

                    <div class="input-container">
                        <label>Input Rows:</label>
                        <input type="number" id="row-data"
                        placeholder="eg:3">
                    </div>

                </form>
            </div>
        `)
    );
}

let getBarGraph = function() {
    $('#input-form-container').html(
        $(`
            <div id="form-header">Input Dimensions</div>

            <div id="input-container">
                <form action="">

                    <div class="input-container">
                        <label>Title:</label>
                        <input type="text" id="title"
                        placeholder="eg:Density of Metals">
                    </div>

                    <div class="input-container">
                        <label>Input Property Heading:</label>
                        <input type="text" id="property-heading"
                        placeholder="eg:Metals">
                    </div>

                    <div class="input-container">
                        <label>Input Data Heading:</label>
                        <input type="text" id="data-heading"
                        placeholder="eg:Density">
                    </div>

                    <div class="input-container">
                        <label>Input Rows:</label>
                        <input type="number" id="row-data"
                        placeholder="eg:3">
                    </div>

                </form>
            </div>
        `)
    );
}

let getCandelStick = function() {
    $('#input-form-container').html(
        $(`
            <div id="form-header">Input Dimensions</div>

            <div id="input-container">
                <form action="">

                    <div class="input-container">
                        <label>Input Rows:</label>
                        <input type="number" id="row-data"
                        placeholder="eg:3">
                    </div>

                </form>
            </div>
        `)
    );
}

let getLineChart = function() {
    $('#input-form-container').html(
        $(`
            <div id="form-header">Input Dimensions</div>

            <div id="input-container">
                <form action="">

                    <div class="input-container">
                        <label>Title:</label>
                        <input type="text" id="title"
                        placeholder="eg:Company Performance">
                    </div>

                    <div class="input-container">
                        <label>Input Property Heading:</label>
                        <input type="text" id="property-heading"
                        placeholder="eg:Year">
                    </div>

                    <div class="input-container">
                        <label>Input Data Heading1:</label>
                        <input type="text" id="data-heading-one"
                        placeholder="eg:Sales">
                    </div>

                    <div class="input-container">
                        <label>Input Data Heading2:</label>
                        <input type="text" id="data-heading-two"
                        placeholder="eg:Expenses">
                    </div>

                    <div class="input-container">
                        <label>Input Rows:</label>
                        <input type="number" id="row-data"
                        placeholder="eg:3">
                    </div>

                </form>
            </div>
        `)
    );
}

let getGeoChart = function() {
    $('#input-form-container').html(
        $(`
            <div id="form-header">Input Dimensions</div>

            <div id="input-container">
                <form action="">

                    <div class="input-container">
                        <label>Input Data Heading:</label>
                        <input type="text" id="data-heading"
                        placeholder="eg:Popularity">
                    </div>

                    <div class="input-container">
                        <label>Input Rows:</label>
                        <input type="number" id="row-data"
                        placeholder="eg:3">
                    </div>

                </form>
            </div>
        `)
    );
}

let getWordTree = function() {
    $('#input-form-container').html(
        $(`
            <div id="form-header">Input Dimensions</div>

            <div id="input-container">
                <form action="">

                    <div class="input-container">
                        <label>Input Root Word:</label>
                        <input type="text" id="root-word"
                        placeholder="eg:cat">
                    </div>

                    <div class="input-container">
                        <label>Input Rows:</label>
                        <input type="number" id="row-data"
                        placeholder="eg:3">
                    </div>

                </form>
            </div>
        `)
    );
}
