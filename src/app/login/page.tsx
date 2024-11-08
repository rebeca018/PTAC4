'use client'

import styles from "./page.module.css";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Header from "../componentes/header";
import Footer from "../componentes/footer";

import { ApiURL } from "../config";
import { setCookie } from "nookies";

interface ResponseSignin {
  erro: boolean,
  mensagem: string,
  token?: string
}


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erroLogin, setErroLogin] = useState("");
  const router = useRouter();

  /*
  const autenticar = () => {
    if (user !== "teste" || password !== "teste123" || email !== "teste@gmail.com"){
      setErroLogin(true)
    }else{
      setErroLogin(false)
      router.push("/");
    }
  }*/

  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try{
      const response = await fetch(`${ApiURL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({email, password})
      })

      if (response){
        const data : ResponseSignin = await response.json()
        const {erro, mensagem, token = ''} = data;
        console.log(data)
        if (erro){
          setErroLogin(mensagem)
        } else {
          setCookie(undefined, 'restaurant-token', token, {
            maxAge: 60*60*1 // 1 hora
          } )
          router.push("/")
        }
      } else {

      }
    }catch(error){
    console.error('Erro na requisição', error)
    }
    
    console.log('Email', email);
    //console.log('Password', password);
  }

  const click = () => {
    router.push('/cadastro');
  }

  return(
  <div>
      <Header/>
    <div className={styles.container}>
        <div className={styles.login}>
          <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <input className={styles.input} type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
          <input className={styles.input} type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
          <button className={styles.botao} type="submit">Login</button>
          <button onClick={click} className={styles.botaoC}>Cadastre-se aqui</button>
          
          
            {erroLogin && (
              <div className={styles.autenticar}>
                <h2>Não foi possível realizar o Login</h2>
                <p>{erroLogin}</p>
              </div>
            )}
          </form>
          
        </div>
    </div>
    <Footer/>
  </div>
  );


}