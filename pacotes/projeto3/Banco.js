import fs from "fs";
import {v4 as uuidv4} from "uuid";

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
  const indice = dadosManipulaveis.findIndex((obj)=>obj.id === id);
  if(indice >= 0){
    dadosManipulaveis[indice].nome = nome;
  }else{
    const idUnico = uuidv4();
    dadosManipulaveis.push({nome, id:idUnico});
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
