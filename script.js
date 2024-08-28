
document.addEventListener("DOMContentLoaded", () => {
    let boxcolor = document.getElementById('color-box');  
    let changecolor = document.getElementById('change-color-btn');  
    changecolor.addEventListener('click', () => {  
        boxcolor.style.background = getRandomColor();
    }); 
});

function getRandomColor() {
    var r = Math.floor(256*Math.random());
    var g = Math.floor(256*Math.random());
    var b = Math.floor(256*Math.random());
    console.log(r+' '+g+' '+b+' '+Math.random());
    return "rgba(" + r + "," + g + "," + b + ",1)";
}