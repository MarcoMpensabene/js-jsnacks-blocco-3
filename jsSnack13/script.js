//  > Scrivi una funzione che dato un numero inverta le sue cifre: 1234 -> 4321

let userNumber = Number.parseInt(prompt("type a number") , 10);

function numberInverter(num , reverse){
// Inizializziamo la variabile
reverse = 0;

while(num>0){
    // Ottieni la crifra più esterna da destra 
    let rightmost = num%10;
    
    reverse = reverse*10 + rightmost;
    
    // Rimuovi la cifra più esterna da destra 
    num = Math.floor(num/10);
}
return reverse;
}

let result = numberInverter(userNumber);

console.log(result)