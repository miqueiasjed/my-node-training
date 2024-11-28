import { resto } from "./calculosComplementares.js";

function div(x,y){
  return x / y;
}

export default function divisaoPorExtenso(x,y){
  return `A divisão de ${x} por ${y} é ${div(x,y)} e o resto é ${resto(x,y)}`;
}