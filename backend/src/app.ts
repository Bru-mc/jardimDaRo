import express, { Request, Response } from 'express';
import db from './config/dbConnect';

db.on("Error", console.log.bind(console, "Erro de conexao"));
db.once("open", () => console.log("Conexão com o banco feita com sucesso"));

const app = express();
app.use(express.json());

app.get('/',(req: Request, res: Response)=>{
  res.send('Hello World!!')
})

app.listen(5000, ()=>
  console.log("server running at port 5000")
);