import express, { Request, Response } from 'express';
import db from './config/dbConnect';

const app = express();
app.use(express.json());

app.get('/',(req: Request, res: Response)=>{
  res.send('Hello World!!')
})

app.listen(5000, ()=>
  console.log("server running at port 5000")
);