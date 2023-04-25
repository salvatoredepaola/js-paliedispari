
let pariDispari = (prompt("Scegliere pari o dispari"));


if(pariDispari.includes("pari","dispari")) {
    console.log(`L'utente ha scelto ${pariDispari}`)
} else {
    alert("Inserire un valore corretto")
}

let numeroRandom = parseInt(prompt("Inserisci un numero"));
let x = randomNumber();


if (isNaN(numeroRandom)) {
    alert("numero errato")
} else {
    console.log(`L'utente ha inserito il numero ${numeroRandom} `);
}

function randomNumber() {
    let numero;

    numero = Math.floor(Math.random()* 100 +1);

    return numero;

}

let somma = sommaNumeri(numeroRandom, x)

function sommaNumeri(num1, num2) {

    let a = parseInt(num1);
    let b = parseInt(num2);
    let risultato = a + b;

    // if(isNaN(risultato)) {
    //     console.error("Il risultato è NaN");
    // }

    return risultato;
}


console.log(`Il computer ha inserito il numero ${x} `);
// console.log(numeroRandom)
// console.log(x)
console.log(`La somma dei numeri ${numeroRandom} e ${x} è ${somma}`);

let dispariPari = "pari";

if (somma % 2 == 0) {
    console.log(`Il risultato è ${dispariPari}`);
    if (pariDispari == dispariPari){
        console.log("l'utente ha vinto");
    } else {
        console.log("l'utente ha perso");
    }
} else {
    let dispariPari = "dispari"
    console.log(`Il risultato è ${dispariPari}`);
    if (pariDispari == dispariPari){
        console.log("l'utente ha vinto");
    } else {
        console.log("l'utente ha perso");
    }
}

