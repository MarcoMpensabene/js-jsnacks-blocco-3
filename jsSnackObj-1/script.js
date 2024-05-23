// > Crea un array composto da 15 automobili.
// > Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
// < Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
// < Infine stampa separatamente i 3 array.

let auto = [
    {
        marca : "nissan", modello : "500" ,alimentazione : "benzina",
    },
    {
        marca : "tesla", modello : "500" ,alimentazione : "metano",
    },
    {
        marca : "Toyota", modello : "500" ,alimentazione : "diesel",
    },
    {
        marca : "Mercedes-Benz", modello : "500" ,alimentazione : "benzina",
    },
    {
        marca : "BMW", modello : "500" ,alimentazione : "benzina",
    },
    {
        marca : "pasquale", modello : "500" ,alimentazione : "gpl",
    },
    {
        marca : "ducati", modello : "500" ,alimentazione : "benzina",
    },
    {
        marca : "lamborghini", modello : "500" ,alimentazione : "benzina",
    },
    {
        marca : "ferrari", modello : "500" ,alimentazione : "elettrico",
    },
    {
        marca : "Porsche", modello : "500" ,alimentazione : "metano",
    },
    {
        marca : "Audi", modello : "500" ,alimentazione : "benzina",
    },
    {
        marca : "Hyundai", modello : "500" ,alimentazione : "diesel",
    },
                                        

]

const autoBenzina = auto.filter((alimentazioneAbenz) => {
    if(alimentazioneAbenz.alimentazione === "benzina"){
        return true;
    }
});
const autoDiesel = auto.filter((alimentazioneDiesel) => {
    if(alimentazioneDiesel.alimentazione === "diesel"){
        return true;
    }
});
console.log(auto)
console.log(autoBenzina)
console.log(autoDiesel)

const otherAuto = auto.filter((others) => {
    if(others.alimentazione !== "benzina" && others.alimentazione !== "diesel"){
        return true;
    }
});

console.log(otherAuto)