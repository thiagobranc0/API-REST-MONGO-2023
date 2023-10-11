import "dotenv/config";
import app from "./src/app.js";

const PORT = 3000;

const rotas = {
  "/": "Curso de Node.js",
  "/livros": "Entrei na sessão de livros",
  "/autores": "Entrei na sessão de autores",
};

app.listen(PORT, () => {
  console.log("Servidor escutando!");
});
