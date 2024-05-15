
let userArray = [];
let userArrayEl = Number.parseInt(prompt("Inserisci la lunghezza dell'array") , 10);

for (let i = 0 ; i < userArrayEl; i++ ){
    let randomNum = Math.floor(Math.random() * 100) + 1;
    userArray.push(randomNum);
}

console.log(userArray.slice(-5));