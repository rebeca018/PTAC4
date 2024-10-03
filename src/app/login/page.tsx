'use client'

import styles from "./page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Login() {
  const [user, setUser] = useState("");
  const [senha, setSenha] = useState("");
  const [erroLogin, setErroLogin] = useState(false);
  const router = useRouter();
  const autenticar = () => {
    if (user !== "teste" || senha !== "teste123"){
      setErroLogin(true)
    }else{
      setErroLogin(false)
      router.push("/");
    }
  }

  return(
  <div className={styles.container}>
      <div className={styles.login}>
        <h1>Login</h1>
        <input className={styles.input} type="text" value={user} placeholder="Nome de usuário" onChange={(e) => setUser(e.target.value)}/>
        <input className={styles.input} type="text" value={senha} placeholder="Senha" onChange={(e) => setSenha(e.target.value)}/>
        <button className={styles.botao} onClick={autenticar}>Login</button>

        {erroLogin && (
        <div className={styles.autenticar}>
          <h2>Não foi possível realizar o Login</h2>
          <p>Usuário ou Senha inválidos</p>
        </div>
      )}
      </div>
  </div>
  );


}