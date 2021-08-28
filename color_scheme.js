let backGroundColors = ['#e4d7ea', '#d6f7ca', '#e0e6e9', '#c8f1d5', '#ffd7d7', '#dad6d6'];
let headerColors = ['#b697c1', '#678f78', '#677c8f', '#44c39c', '#c04949', '#4b4b4b'];

$('body').css('background-color', backGroundColors[0]);
$('header').css('background-color', headerColors[0]);

let color = 1;
setInterval(() => {
    $('body').css('background-color', backGroundColors[color % 5]);
    $('header').css('background-color', headerColors[color % 5]);
    color++;
}, 3000);