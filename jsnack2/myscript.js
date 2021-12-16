/*JSnack 2
Fai inserire un numero, che chiameremo N, all’utente.
Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
Ogni volta che ne crei uno, stampalo a schermo.*/

const N = parseInt(prompt("Inserisci un numero:"));

for(let i=0; i<N; i++){

    let nArr = [];
    
    
    for(let index = 0; index<10; index++){
        nArr.push(Math.floor(Math.random() * 100 + 1));
    }    
    document.writeln("Array " + i + ": " + nArr  + "<br>");
    
}


