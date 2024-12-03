import kit from "terminal-kit";

const term = kit.terminal;

export async function menu(itens){
  let options = {
    style: term.inverse,
    selectedStyle: term.white.bgCyan
  }

  const opcaoSelecionada = await term.singleLineMenu(itens, options).promise;
  return opcaoSelecionada;
}

export function finaliza(){
  process.exit();
}