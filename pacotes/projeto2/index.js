import pensador from "pensador-scrap";

const {error, success} = await pensador.search({
  query: "Platao",
  limit: 12
});

// console.log(success);
// console.log(error);

const pensamentos = success.thought;
const indiceAleatorio = Math.floor(Math.random() * pensamentos.length)
const pensamentoSelecionado = pensamentos[indiceAleatorio];

console.log(pensamentoSelecionado.content);


