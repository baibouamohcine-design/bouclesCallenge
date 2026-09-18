const prompt = require('prompt-sync')();
let n = Number(prompt("Entrer a nombre entier pour calcul la somme : "))

let rs = 0

for(let i = 0 ; i <= n ; i++ ){
rs =  rs + i
}
      console.log("la some est = " ,rs )
