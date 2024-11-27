const {resto} = require("./calculosComplementares")

function div(a,b){
  return a/b;
}

exports.textoDivisao = function(a,b){
  return `A divisão de ${a} por ${b} é ${div(a,b)} e o resto é ${resto(a,b)}`
}