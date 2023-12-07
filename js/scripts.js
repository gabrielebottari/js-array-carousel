/*
MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
*/

const imgArray = [
    '01.webp',
    '02.webp',
    '03.webp',
    '04.webp',
    '05.webp',
];

let itemContent = '';

for (let i = 0; i < imgArray.length; i++) {
    itemContent += `<div class="item"><img src="./img/${ imgArray[i] }"></div>`; 
};

const itemsSlider = document.querySelector('.item-slider').innerHTML = itemContent;

const item = document.getElementsByClassName('item');

let itemActive = 0;

item[itemActive].classList.add('active');

let previous = document.querySelector('.previous');
let next = document.querySelector('.next');


