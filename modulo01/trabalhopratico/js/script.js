var rRed = document.querySelector("#rRed");
var nRed = document.querySelector("#nRed");

var rGreen = document.querySelector("#rGreen");
var nGreen = document.querySelector("#nGreen");

var rBlue = document.querySelector("#rBlue");
var nBlue = document.querySelector("#nBlue");

var painelRGB = document.querySelector("#painel-rgb");

function defineCor() {
    painelRGB.style.backgroundColor = "rgb(" + nRed.value + ", " + nGreen.value + ", " + nBlue.value + ")";
}

rRed.addEventListener("change", function (event) {
    nRed.value = this.value;
    defineCor();
});

rGreen.addEventListener("change", function (event) {
    nGreen.value = this.value;
    defineCor();
});

rBlue.addEventListener("change", function (event) {
    nBlue.value = this.value;
    defineCor();
});

window.addEventListener("load", function (event) {
    defineCor();
});