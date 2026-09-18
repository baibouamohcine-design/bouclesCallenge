const prompt = require('prompt-sync')();
let base = Number(prompt("entrer base nombre pour calcul puissanse :"))
let exposant = Number(prompt("entrer exposant nombre pour calcul puissanse :"))
let x = 0
for(let i = 1 ; i <= exposant ; i++  ){
x = x + base
    console.log(x)
}