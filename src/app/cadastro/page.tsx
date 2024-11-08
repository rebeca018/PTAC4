'use client'

import styles from "./page.module.css";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Header from "../componentes/header";
import Footer from "../componentes/footer";
// Importando interface do usuário
import Usuario from "../interfaces/usuario";

import { ApiURL } from "../config";
import { setCookie } from "nookies";

interface ResponseSignin {
  erro: boolean,
  mensagem: string,
  token?: string
}

export default function Cadastro() {
    // const do usuário, com os atributos da interface
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erroLogin, setErroLogin] = useState("");
  const router = useRouter();
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try{
      const response = await fetch(`${ApiURL}/auth/cadastro`, {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({nome, email, password})
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
    
    console.log('Nome', nome)
    console.log('Email', email);
    //console.log('Password', password);
  }
  


  // Return com os inputs para nome, email, senha, e botão para página de login
  return(

  <div>
      <Header/>
    <div className={styles.container}>
        <div className={styles.login}>
          <form onSubmit={handleSubmit}>
            <h1>Cadastro</h1>
            <p className={styles.p}>Nome de usuário:</p>
            <input className={styles.input} type="text" value={nome} placeholder="Nome de usuário" onChange={(e) => setNome(e.target.value)}/>

            <p className={styles.p}>Email:</p>
            <input className={styles.input} type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            
            <p className={styles.p}>Senha:</p>
            <input className={styles.input} type="password" value={password} placeholder="Senha" onChange={(e) => setPassword(e.target.value)}/>
            <button className={styles.botao} type="submit">Cadastre-se</button>
          </form>

        </div>
    </div>
    <Footer/>
  </div>

  );

}