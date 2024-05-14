
const userArray = [];
userArray.length = Number.parseInt(prompt("Inserisci la lunghezza dell'array") , 10);
console.log(userArray.length)
let randomNumber = Math.floor(Math.random() * 100) + 1; 

for (let i = 0 ; i < userArray.length; i++ ){
    console.log(userArray)
}

// console.log(userArray.slice((userArray.length - 5), userArray.length));
