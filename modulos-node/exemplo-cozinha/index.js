// const acoes = require("./cozinha/acoesCozinhar");
// const {alimentos} = require("./cozinha/alimentos");
// console.log(acoes.cozinhar(alimentos[1]));

// console.log(cozinha.assar(cozinha.alimentos[1]))

// const cozinha = require("./cozinha");
// const receita = require("./receita");
// console.log(receita(cozinha.alimentos, cozinha.cortar, cozinha.assar));

const refeicao = require("./refeicao")("Almoço");
refeicao("arroz", "feijão");

const refeicao2 = require("./refeicao")("Jantar");
refeicao2("arroz", "milho");