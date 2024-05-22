

// Creare un oggetto palla che abbia le seguenti proprietà.
// Nome = palla
// Peso = 10
// Attraverso un prompt dare la possibilità all'utente di modificare il peso della palla.

const palla = { 
    Nome : "palla" ,
    Peso : "10 " ,
}
console.log(palla.Nome , palla.Peso)

let element = prompt("Inserisci il peso della palla")

palla.Peso = element;
console.log(palla.Peso)