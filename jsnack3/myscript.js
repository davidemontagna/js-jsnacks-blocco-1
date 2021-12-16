/*JSnack 3
Crea due tag div con due id diversi:
un div avrà il testo colorato di rosso mentre l’altro di verde.
Partendo da un array di numeri, stampiamo nell’id rosso i
numeri dispari e in verde i numeri pari.*/

const myArr = [5, 8, 9, 10, 5, 2, 1, 3, 6, 56, 48, 33, 20, 97];  //la mia array


let txtRed = document.createElement("div"); //creo il div
let txtGreen = document.createElement("div");

document.body.appendChild(txtRed); //inserisco il testo al div
document.body.appendChild(txtGreen);

txtGreen.style.color="green" //do il colore verde
txtRed.style.color="red"  //do il colore rosso

index=0
while(index < myArr.length){ //inizio il ciclo while per la lunghezza della mia array

    if(myArr[index] % 2 ==0){ //controllo se l'elemento è divisibile per due
        txtRed.innerHTML +=  " " + myArr[index]; //inserisco i numeri pari
    }else{  
        txtGreen.innerHTML += " " + myArr[index];  //inserisco i numeri dispari
    }
    index++; //incremento l'index al termine del quale uscirò dal ciclo while
}