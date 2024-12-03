import fs from "fs";

let dadosManipulaveis = _carregarValores(); //formato {nome,id}

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
  dadosManipulaveis.push({nome, id});
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
