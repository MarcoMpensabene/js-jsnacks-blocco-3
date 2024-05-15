// Snack9 Crea un array vuoto. Chiedi fino a che l'array non ha 6 numeri all'utente di inserire un numero, se è dispari inseriscilo nell'array.

let userArray = [];
while(userArray.length < 6){
    let userNum = Number.parseInt(prompt("Type a number") , 10)
    if (userArray % 2 === 1 ){
        userArray.push(userNum)
}
}
console.log(userArray)