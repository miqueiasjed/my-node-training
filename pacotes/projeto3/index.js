import {salvar, deletar, pegarDados, persistirDados} from "./Banco.js";

console.log(pegarDados())

salvar("Miqueias",41);
salvar("Talita", 411);
salvar("João", 418);
salvar("Pedro",43);

console.log(pegarDados())

// deletar(3);

console.log("---------------------------");

console.log(pegarDados())

persistirDados();