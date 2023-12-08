/*
MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l'immagine attiva, che quindi verrà visualizzata al posto della precedente.
*/

// Creazione array immagini
const imgArray = [
    '01.webp',
    '02.webp',
    '03.webp',
    '04.webp',
    '05.webp',
];

// Creazione array bottoni
const btnArray = [
    '01.webp',
    '02.webp',
    '03.webp',
    '04.webp',
    '05.webp',
];

// inizializzo variabile per rappresentare il contenuto del carosello
let itemContent = '';
let itemThumbnail = '';

// ciclo for con array e per ogni i dell'array creo un div con un img nell'ordine corrispondente
// creo anche un button con una immagine dentro
for (let i = 0; i < imgArray.length; i++) {
    itemContent += `<div class="item"><img src="./img/${imgArray[i]}" alt="Image ${i+1}"></div>`; 
    itemThumbnail += `<button type="button" onclick="showImage(${i})"><img src="./img/${imgArray[i]}" alt="Image ${i+1}"></button>`; 
};

// inserisco nell'html il codice js creato con il ciclo for
const itemsSlider = document.querySelector('.item-slider').innerHTML = itemContent;
const itemsThumbnail = document.querySelector('.thumbnail-container').innerHTML = itemThumbnail;

// inizializzo una costante e l'associo a tutti gli elementi che hanno la classe selezionata
const item = document.getElementsByClassName('item');

// inizializzo una costante e l'asscocio a tutte le query con questo selettore avanzato
const thumbnails = document.querySelectorAll('.thumbnail-container button');

// inizializzo una variabile per rappresentare l'immagine che dovrà essere visibile in questo caso la prima dell'array
let counter = 0;

// a questa costante aggiungo la classe per dare display-block
item[counter].classList.add('active');

// inizializzo le variabili per gestire i bottoni per muovermi nel carosello
let previous = document.querySelector('.previous');
let next = document.querySelector('.next');

// prima funzione per il tasto next al click rimuove active all'item corrispondente, se l'item è l'ultimo lo riporta al primo
// sennò avanzerà di uno, alla fine della funzione rimetterà active all'item corrispondente.
next.addEventListener ('click', function() {

    item[counter].classList.remove('active');

    if ( counter == imgArray.length-1 ) {
        counter = 0;
    }
    else {
        counter++;
    };

    item[counter].classList.add('active');

});

// seconda funzione per il tasto previous al click rimuove active all'item corrispondente, se l'item è il primo lo riporta all'ultimo
// sennò diminuirà di uno, alla fine della funzione rimetterà active all'item corrispondente.
previous.addEventListener ('click', function() {

    item[counter].classList.remove('active');

    if ( counter == 0 ) {
        counter = imgArray.length - 1;
    }
    else {
        counter--;
    };

    item[counter].classList.add('active');

});

// terza funzione per i bottoni rimuovo la classe active e lo assegno alla stessa immagine che corrisponde
//  all'indice del bottone corrispondente in seguito darò a quell'imagine classe active
function showImage(index) {

    item[counter].classList.remove('active');
    counter = index;
    item[counter].classList.add('active');

}