// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. 
// Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

const userArray = [];

let somma = 0;
while(somma < 50){
    let userNum = Number.parseInt(prompt("inserisci un numero") , 10);
    if (userNum !== NaN){
        userArray.push(userNum);
        somma += userNum;
    }
}

console.log(userArray)




