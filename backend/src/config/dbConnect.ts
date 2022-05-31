import { Schema, model, connect } from 'mongoose';

interface IUser{
  name: string;
  email: string;
  password: string;
}

mongoose.connect('mongodb+srv://jardimdaro:rosangela789@cluster0.4xbah.mongodb.net/jardimDaRo');

let db = mongoose.connection;

export default db;