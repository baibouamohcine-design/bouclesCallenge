const prompt = require('prompt-sync')();
let n = Number(prompt("entrer une nombre pour calcule la factoriel : "))
let factorielle = 1;
for(let i = 1 ; i<= n; i++ ){
    factorielle *= i
}
console.log(`resultat de ${n} != ${factorielle}` )
