/*
MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
*/

/*
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

// inizializzo variabile per rappresentare il contenuto del carosello
let itemContent = '';

// ciclo for con array e per ogni i dell'array creo un div con un img nell'ordine corrispondente
for (let i = 0; i < imgArray.length; i++) {
    itemContent += `<div class="item"><img src="./img/${imgArray[i]}"></div>`; 
};

// scrivo inserisco nell'html il codice js creato con il ciclo for
const itemsSlider = document.querySelector('.item-slider').innerHTML = itemContent;

// inizializzo una costante e le do la classe
const item = document.getElementsByClassName('item');

// inizializzo una variabile per rappresentare l'immagine che dovrà essere visibile in questo caso la prima dell'array
let itemActive = 0;

// a questa costante aggiungo la classe per dare display-block
item[itemActive].classList.add('active');

// inizializzo le variabili per gestire i bottoni per muovermi nel carosello
let previous = document.querySelector('.previous');
let next = document.querySelector('.next');

/*
//prima funzione per il tasto next se itemactive non corrisponde all'ultimo elemento dell'array aumenta di 1
next.addEventListener ('click', function() {

    //cliccando tolgo il display block
    item[itemActive].classList.remove('active');

    if ( itemActive != imgArray.length-1 ) {
        itemActive++;
    }
    
    //a prescidere se il ciclo si sposta o meno alla immagine successiva metterà nuovamente il display-block
    item[itemActive].classList.add('active');

});
*/

/*
//seconda funzione per il tasto previous se itemactive non corrisponde al primo elemento dell'array diminuirà di 1
previous.addEventListener ('click', function() {
    
    //cliccando tolgo il display block
    item[itemActive].classList.remove('active');

    if (itemActive != 0) {
        itemActive--;
    }
    
    //a prescidere se il ciclo si sposta o meno alla immagine successiva metterà nuovamente il display-block
    item[itemActive].classList.add('active');

});
*/

// prima funzione per il tasto next al click rimuove active all'item corrispondente, se l'item è l'ultimo lo riporta al primo
// sennò avanzerà di uno, alla fine della funzione rimetterà active all'item corrispondente.
next.addEventListener ('click', function() {

    item[itemActive].classList.remove('active');

    if ( itemActive == imgArray.length-1 ) {
        itemActive = 0;
    }
    else {
        itemActive++;
    };

    item[itemActive].classList.add('active');

});

// seconda funzione per il tasto previous al click rimuove active all'item corrispondente, se l'item è il primo lo riporta all'ultimo
// sennò diminuirà di uno, alla fine della funzione rimetterà active all'item corrispondente.
previous.addEventListener ('click', function() {

    item[itemActive].classList.remove('active');

    if ( itemActive == 0 ) {
        itemActive = imgArray.length - 1;
    }
    else {
        itemActive--;
    };

    item[itemActive].classList.add('active');

});