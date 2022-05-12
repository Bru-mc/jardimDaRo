import { useState } from 'react';
import './index.css';

export const Login = () =>{
  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    const currentEmail = email;
    const currentPassword = password;
    setEmail("");
    setPassword("");
    console.log("submit", currentEmail, currentPassword);
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return(
    <div id="login">
      <div className="loginContainer">
        <h1 className="title">Login Page</h1>
        <form className="loginForm" onSubmit={handleSubmit}>
          <div className= "field">
            <label htmlFor="email">Email:</label>
            <input 
            type="email" 
            name="email" 
            id="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}/>
          </div>
          <div className="field">
            <label htmlFor="password">Senha:</label>
            <input 
            type="password" 
            name="password" 
            id="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}/>
          </div>
          <div className="actions">
            <button className="btnSubmit" type="submit">Entrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}