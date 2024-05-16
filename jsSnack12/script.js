// Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

let userWordA = prompt("Inserisci la prima parola");
let userWordB = prompt("Inserisci la seconda parola");

console.log(userWordA , userWordB);

function sameLenght(wordA , wordB){
    if(wordA.lenght === wordB.lenght){
    return  risultato = console.log(wordA , wordB);
    } else if(wordA.lenght > wordB.lenght){
    return   risultato = console.log(wordA);
    }else {
    return  risultato = console.log(wordB);
    }
}

let lunghezza = sameLenght(userWordA , userWordB);

console.log(lunghezza)

