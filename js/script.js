const display = document.getElementById('resultado');

var valueRegistrer;

const goodForU = document.getElementById("goodForU");

function playAudio() {
    goodForU.play();
}

function clearDisplay() {
    document.getElementById('resultado').innerText = '';
}

function appendOnDisplay(value) {
    var display = document.getElementById('resultado');
    display.innerText += value;

    valueRegistrer = Number(value);
}

function resultDisplay() {
    var display = document.getElementById('resultado');

    display.innerText = eval(display.innerText);
    console.log(display);
}

function raizQuadrada() {
    let sqrt = ((Math.sqrt(valueRegistrer)).toFixed(3)).toString();
    console.log(sqrt);

    document.getElementById('resultado').innerText = sqrt;

}

function GUTSeasterEgg() {
    document.getElementById('resultado').innerText = 'Sour-Olivia Rodrigo';
    playAudio();

}

// document.querySelectorAll ==> serve para selecionar todos os elementos(div) com a mesma classe
