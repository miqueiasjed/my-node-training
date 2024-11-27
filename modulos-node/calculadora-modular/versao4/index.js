const basicos = require("./calculosBasicos");
const complementares = require("./calculosComplementares");

let x,y;
x = 20;
y = 2;

console.log(basicos.soma(x,y));
console.log(basicos.sub(x,y));
console.log(basicos.texto);
console.log(complementares.pot(x,y));
console.log(complementares.resto(x,y));
console.log(complementares.texto);