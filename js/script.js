const display = document.getElementById('resultado');

var valueRegistrer = 0;

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

    valueRegistrer += value;

}

function resultDisplay() {
    var display = document.getElementById('resultado');
    try {
        display.innerText = eval(display.innerText);
        console.log(display);
    }
    catch(error){
        display.innerText = 'ERROR'
    }
    
}

function raizQuadrada() {
    valueRegistrer = Number(valueRegistrer);
    let sqrt = ((Math.sqrt(valueRegistrer)).toFixed(3)).toString();
    console.log(sqrt);
    valueRegistrer = 0;

    document.getElementById('resultado').innerText = sqrt;

}

function GUTSeasterEgg() {
    document.getElementById('resultado').innerText = 'Sour-Olivia Rodrigo';
    playAudio();

}

// document.querySelectorAll ==> serve para selecionar todos os elementos(div) com a mesma classe
