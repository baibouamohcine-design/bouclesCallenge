const prompt = require('prompt-sync')();
const n = Number(prompt("Entre a  nombre : "))
let resultat = -1
for(let i = 0 ; i < n ; i++ ){
    resultat = resultat + 2;
console.log(resultat)
}
