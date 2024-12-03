import {salvar, deletar, pegarDados, persistirDados} from "./Banco.js";

// console.log(pegarDados())

// salvar("Miqueias");
// salvar("Talita");
// salvar("João");
// salvar("Pedro");

// console.log(pegarDados())

deletar(3);
deletar(4);
deletar(5);

console.log(pegarDados())
console.log("---------------------------");
salvar("teste",0);

console.log(pegarDados())

persistirDados();