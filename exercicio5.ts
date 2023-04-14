const entrada5 = require("readline-sync");

let vetor: number[] = [];
let gg: number[] = [];
let i: number = 0

  for(i; i <20; i++){
     vetor[i]= parseFloat(entrada5.question("DIGITE UM NUMERO QUALQUER: "));
        if(vetor[i] % 4 == 0){
            gg.push(vetor[i])

        }
    }

         console.log(gg)