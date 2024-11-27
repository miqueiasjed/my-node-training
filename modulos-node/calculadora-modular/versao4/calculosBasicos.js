const info = "sou o módulo calculosBásicos"

function soma(x,y) {
  return x + y;
}

function sub(x,y) {
  return x - y; 
}

module.exports = {
  texto:info, 
  soma, 
  sub
}