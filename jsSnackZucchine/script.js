// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.
// Dividi in due array separati le zucchine che misurano meno o più di 8cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.


const zucchine = [
    {varieta : "varietàA" , peso : 100 , lunghezza : 5 },
    {varieta : "varietàB" , peso : 200 , lunghezza : 9 },
    {varieta : "varietàC" , peso : 300 , lunghezza : 13 },
    {varieta : "varietàD" , peso : 56 , lunghezza : 3 },
    {varieta : "varietàA" , peso : 120 , lunghezza : 7 },
    {varieta : "varietàD" , peso : 140 , lunghezza : 8 },
    {varieta : "varietàF" , peso : 160 , lunghezza : 9 },
    {varieta : "varietàB" , peso : 240 , lunghezza : 11 },
    {varieta : "varietàD" , peso : 302 , lunghezza : 14 },
    {varieta : "varietàE" , peso : 350 , lunghezza : 15 },
];
let pesos= 0;
zucchine.forEach((zucchina) => {
    pesos += zucchina.peso;
})


console.log(pesos)
const longZucchine = zucchine.filter(zucchineL => {
    if (zucchineL.lunghezza > 8){
        return zucchineL;
    } 
})

console.log(longZucchine , pesoLong)

const smallZucchine = zucchine.filter(zucchineL => {
    if (zucchineL.lunghezza < 8){
        return zucchineL;
    } 
})

console.log(smallZucchine);