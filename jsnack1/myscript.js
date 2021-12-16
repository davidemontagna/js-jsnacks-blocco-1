/* JSnack 1
Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
Continua a chiedere i numeri all’utente e a inserirli nell’array
fino a quando la somma degli elementi è minore di 50.*/

const numeriArr = [];
let somma = 0;
let i=0;

do {
    let numInserito = prompt("Inserisci un numero:");
    numeriArr.push(parseInt(numInserito));
    somma += numeriArr[i];
    i++;
} while (somma < 50);

console.log(numeriArr);