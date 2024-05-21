// ! Chiedi all'utente un numero di secondi da attendere e fai partire un timer da quel momento a zero secondi, interrompendo il timer

let userSecond = Number.parseInt(prompt("Inserisci i secondi") , 10);
let divEl = document.querySelector("div")
const timer = setInterval(myTime , 1000);

function myTime() {

if (userSecond > 10 || isNaN(userSecond)){
    userSecond = 9;
}
userSecond--;
let pEl = document.createElement("p")
divEl.appendChild(pEl);
pEl.innerText = userSecond;

console.log(userSecond)
if (userSecond <= 0){
    clearInterval(timer)
}
};

