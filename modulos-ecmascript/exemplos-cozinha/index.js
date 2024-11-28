import cozinha from "./cozinha/index.js";
import receita from "./receita.js";
import refeicao from "./refeicao.js";

console.log(receita(['arroz', 'feijao'], cozinha.assar, cozinha.cortar));


const vouComernoAlmoco = refeicao("Almoço");
const vouComernoJantar = refeicao("Jantar");

vouComernoAlmoco('Arroz', 'Feijão', 'Batata');
vouComernoJantar('Macarrão', 'Arroz', 'Milho');

