// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

let arrayA = [1  , 2 , 3 , 4 ,5 ];
let arrayB = [1  , 2 , 3 , 4 ,5 , 11 ,23 ,45 ,66 ,77 ];

let arrayShorter;
let arrayLonger;

if(arrayA.length === arrayB.length){
    console.log("Sono UGUALI!")
} else if(arrayA.length > arrayB.length){
    arrayB = arrayShorter;
    arrayA = arrayLonger;
} else {
    arrayA = arrayShorter;
    arrayB = arrayLonger
}