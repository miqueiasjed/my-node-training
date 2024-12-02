import chalk from "chalk";
import server from "server";
import { DateTime } from "luxon";

const {get} = server.router;

function imprimeHora(cidade, hora){
  console.log(chalk.bgBlue(`Em ${cidade} são ${hora}`));
}

server({port: 8080},[
  get("/", (ctx) => "Hello Word!!"),
  get("/roma", () => {
    const time = DateTime.local({zone: "Europe/Rome"}).toFormat("HH:mm:ss");
    imprimeHora("Roma", time)
    return time
  }),
  get("/luanda", () => {
    const time = DateTime.local({zone: "Africa/Luanda"}).toFormat("HH:mm:ss");
    imprimeHora("Luanda", time)
    return time
  }),
  get("/seoul", () => {
    const time = DateTime.local({zone: "Asia/Seoul"}).toFormat("HH:mm:ss");
    imprimeHora("Seoul", time)
    return time
  }),
  get("/cuiaba", () => {
    const time = DateTime.local({zone: "America/Cuiaba"}).toFormat("HH:mm:ss");
    imprimeHora("Cuiaba", time)
    return time
  })
])

// const azul = (texto) => console.log(chalk.blue(texto));
// const aviso = (texto) => {
//   console.log(chalk.bgYellow.bold(texto)); 
// }
// const erro = (texto) => {
//   console.log(chalk.bgRed.bold.italic(texto))
// }

// azul("Sou um texto");
// aviso("Preciso te avisar uma coisa..");
// erro("Abortar Missão");