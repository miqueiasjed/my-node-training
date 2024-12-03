import fs from "fs";

let dadosManipulaveis = _carregarValores(); //formato {nome,id}
let ultimoIdRegistrado = dadosManipulaveis[dadosManipulaveis.length -1]?.id ?? -1;

let idGlobal = ultimoIdRegistrado + 1;

export function persistirDados(){
  const dadosJSON = JSON.stringify(dadosManipulaveis, null, 4);
  fs.writeFileSync("banco.json", dadosJSON, "utf8");
}

function _carregarValores(){
  const dadosJSON = fs.readFileSync("banco.json", "utf8");
  const dados = JSON.parse(dadosJSON);
  return dados;
}

export function salvar(nome, id){
  const indice = dadosManipulaveis.findIndex((obj)=>obj.id === id);
  if(indice >= 0){
    dadosManipulaveis[indice].nome = nome;
  }else{
    dadosManipulaveis.push({nome, id:idGlobal});
    idGlobal++;
  }
}

export function deletar(id){
  const dadosFiltrados = dadosManipulaveis.filter((dado) => {
    return dado.id != id;
  })
  return dadosManipulaveis = dadosFiltrados;
}

export function pegarDados(){
  const dadosImprimiveis = dadosManipulaveis.map((dado) => {
    return `${dado.nome} -> ${dado.id}`;
  })
  return dadosImprimiveis;
}
