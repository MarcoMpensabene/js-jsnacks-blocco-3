
const userFrigo = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];
let coco = "cocomero";
userFrigo.push("pesca");
console.log(userFrigo);
let foundCoco = false;
for (let i = 0 ; i <userFrigo.length ; i++){
    if (coco === userFrigo[i]){
        foundCoco = true;
    }
}
if (foundCoco === true) {
    console.log("Trovato! Devo solo preparare il cocktail.");
} else {
    console.log( "Oh no, devo uscire a comprare il cocomero!");
}