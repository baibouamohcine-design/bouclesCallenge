const prompt = require('prompt-sync')();
let nom = Number(prompt("entrer a nombre : "))
for (let i = 1  ; i <= 10; i++) {
    let rs =  nom * i
      console.log(nom , " * ", i , " = " ,rs )

}



