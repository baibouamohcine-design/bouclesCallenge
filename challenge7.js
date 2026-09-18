const prompt = require('prompt-sync')();
const n = Number(prompt("entrer a nombre  : "))

for (let i = 1 ; i <= 10 ; i++ ){
    resultat = n * i
    console.log("resultat :" , n , " * ", i , " = " , resultat)
}