// Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

let userWordA = prompt("Inserisci la prima parola");
let userWordB = prompt("Inserisci la seconda parola");

console.log(userWordA , userWordB);

//     function sameLenght(wordA , wordB){
//    if(wordA.lenght === wordB.lenght){
//    let risultato = console.log(wordA , wordB);
//        return  risultato;
//    } else if(wordA.lenght > wordB.lenght){
//    let risultatoB = console.log(wordA);
//        return  risultatoB;
//    }else {
//        let risultatoC = console.log(wordB);
 //       return risultatoC;
 //   }
// }

    function sameLenght(wordA , wordB){
        if(wordA.lenght === wordB.lenght){
            return true; }
            else {
            return false;
            }
        }



    if(sameLenght(userWordA.length , userWordB.length) === true){
        console.log(userWordA , userWordB)}
        else if (wordA.lenght > wordB.lenght) {
            console.log(wordA);
        } else {
            console.log(wordB);
        }
