

///////////////////////////////////
// lettera per lettera in avanti //
///////////////////////////////////

// const nome = "Depapas";

// for (let i = 0; i < nome.length; i++) {
//     console.log(nome[i]) 
// }

//////////////////////////////////////
// lettera per lettera al contrario //
//////////////////////////////////////

// const nome = "Depapas";

// for (let i = nome.length - 1; i >= 0; i--) {
//     console.log(nome[i]) 
// }

let nome = prompt("Inserire una parola")

const a = []
const b = []


console.log(`l'utente ha inserito la parola ${nome}`)


for (let i = 0; i < nome.length; i++) {

    a.push(nome[i])

    console.log(nome[i]) 
}

for (let c = nome.length - 1; c >= 0; c--) {

    b.push(nome[c])

    console.log(nome[c]) 
}


const verifica = function (a, b) {

    for (var i = 0; i < a.length; i++) {
        if (a[i] !== b[i]){
            return false
        };
    }

    return true;
};

console.log(verifica(a, b)); 







