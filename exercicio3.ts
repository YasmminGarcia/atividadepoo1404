const entrada3 = require('readline-sync');

let g: number = entrada3.question('!');

for (let i = g - 1; 1 < i ; i--) {
               g = g*i;

}
 console.log(g);