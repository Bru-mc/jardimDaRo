import { Schema, model, connect, connection } from 'mongoose';

interface IUser{
  name: string;
  email: string;
  password: string;
}

connect('mongodb+srv://jardimdaro:rosangela789@jardimdaro.4xbah.mongodb.net/jardimDaRo');

let db = connection;

export default db;