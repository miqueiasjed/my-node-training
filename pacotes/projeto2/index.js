import pensador from "pensador-scrap";
import fs from "fs";

const autor = "Platao";
let pensamentoSalvar;
const {error, success} = await pensador.search({
  query: autor,
  limit: 12
});

// console.log(success);
// console.log(error);

try{
  const pensamentos = success.thought;
  const indiceAleatorio = Math.floor(Math.random() * pensamentos.length);
  const pensamentoSelecionado = pensamentos[indiceAleatorio].content;

  pensamentoSalvar = `Pensamento de ${autor} -> ${pensamentoSelecionado}\n`;
}catch(erro){
  pensamentoSalvar = `o ${autor} não tem pensamento\n`
}finally{
  // fs.writeFileSync("frases.txt", pensamentoSalvar, "utf8");
  fs.appendFileSync("frases.txt", pensamentoSalvar, "utf8");

  const texto = fs.readFileSync("frases.txt", "utf8");

  console.log(texto);
}


