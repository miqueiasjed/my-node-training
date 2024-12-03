import {salvar, deletar, pegarDados, persistirDados} from "./Banco.js";
import { finaliza, menu } from "./interface.js";

const itemsMenu = [" Adicionar ", " Editar ", " Deletar ", " Ver Todos ", " Persistir ", " Sair "];

const selecionado = await menu(itemsMenu);

console.log(selecionado);

finaliza();