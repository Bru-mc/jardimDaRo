import { Schema, model } from "mongoose";

interface IUser {
  nome: string;
  email: string;
  password: string;
}

const userSchema = new Schema<IUser>({
  nome: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true}
});

const Users = model<IUser>('users', userSchema);

export default Users;