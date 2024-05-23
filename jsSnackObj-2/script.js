// Crea un array di oggetti che rappresentano delle persone, 10.
// Ogni persona ha un nome, un cognome e un'età.

// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

const people = [
    {
        nome : "marco" , cognome : "rossi" , età : 15 ,
    },
    {
        nome : "luca" , cognome : "rosso" , età : 25 ,
    },
    {
        nome : "riccardo" , cognome : "rossini" , età : 33 ,
    },
    {
        nome : "antonio" , cognome : "deluca" , età : 44 ,
    },
    {
        nome :" giovanni" , cognome : "salvini" , età : 11 ,
    },
    {
        nome : "silvestro" , cognome : "neri" , età : 17 ,
    },
    {
        nome : "ottavio" , cognome : "marino" , età : 37 ,
    },
    {
        nome : "cesare" , cognome : "smith" , età : 67 ,
    },
    {
        nome :" francesco" , cognome : "francescano" , età : 88 ,
    },
    {
        nome : "elia ", cognome : "blu" , età : 1 ,
    },
];

const canDrive = people.map((drivers) =>{
    if(drivers.età > 18){
        drivers.età ="può guidare"
        return  drivers.nome +" "+drivers.cognome+" "+drivers.età;
    } 
    drivers.età = "non può guidare"
    return drivers.nome +" "+drivers.cognome+" "+drivers.età;
})

console.log(people)
console.log(canDrive)