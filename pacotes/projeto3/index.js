import {salvar, deletar, pegarDados, persistirDados} from "./Banco.js";
import { finaliza, ler, menu, menuSelecaoUsuario, textoAzul, textoVerde } from "./interface.js";

const itemsMenu = [" Adicionar ", " Editar ", " Deletar ", " Ver Todos ", " Persistir ", " Sair "];
let nome, id;

while(1){
  const selecionado = await menu(itemsMenu);
  switch(selecionado.trim().toLowerCase()){
    case "adicionar":
      nome = await ler("Digite o nome do usuário");
      salvar(nome);
      textoVerde("Feito!");
      break;
    case "editar":
      id = await menuSelecaoUsuario(pegarDados());
      nome = await ler("Nome Atualizado: ");
      salvar(nome, id);
      textoVerde("Editado com Sucesso!");
      break;
    case "deletar":
      id =  await menuSelecaoUsuario(pegarDados());
      deletar(id);
      textoVerde("Deletado com Sucesso!");
      break;
    case "ver todos":
      const dados = pegarDados();
      textoAzul(dados);
      break;
    case "persistir":
      persistirDados();
      textoVerde("Persistido com Sucesso!");
      break;
    case "sair": 
      finaliza();
      textoVerde("Até mais!");
    default: 
      console.log(`${selecionado.trim().toLowerCase()} não é válido`)
  }
}