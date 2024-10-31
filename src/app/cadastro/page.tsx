'use client'

import styles from "./page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../componentes/header";
// Importando interface do usuário
import Usuario from "../interfaces/usuario";

export default function Cadastro() {
    // const do usuário, com os atributos da interface
  const [usuario, setUsuario] = useState<Usuario>({name: ' ', email: ' ', password: ' ', tipo: 'cliente'});
  const router = useRouter();
  
  const click = () => {
    router.push('/login');
  }

    // Função para atualizar o nome
  const autualizeNome = (novoNome : string) =>{
    console.log(usuario)
    setUsuario(
        (prevUsuario) => ({
        ...prevUsuario,
        name: novoNome
        })
    )
  }

  // Função para atualizar o email
  const autualizeEmail = (novoEmail : string) =>{
    console.log(usuario)
    setUsuario(
        (prevUsuario) => ({
        ...prevUsuario,
        email: novoEmail
        })
    )
  }

  // Função para atualizar a senha
  const autualizePassword = (novaPassword : string) =>{
    console.log(usuario)
    setUsuario(
        (prevUsuario) => ({
        ...prevUsuario,
        password: novaPassword
        })
    )
  }

  // Return com os inputs para nome, email, senha, e botão para página de login
  return(

  <div>
      <Header/>
    <div className={styles.container}>
        <div className={styles.login}>
          <h1>Cadastro</h1>
          <input className={styles.input} type="text" value={usuario.name} placeholder="Nome de usuário" onChange={(e) => autualizeNome(e.target.value)}/>
          <input className={styles.input} type="text" value={usuario.email} placeholder="Email" onChange={(e) => autualizeEmail(e.target.value)}/>
          <input className={styles.input} type="text" value={usuario.password} placeholder="Senha" onChange={(e) => autualizePassword(e.target.value)}/>
          <button className={styles.botao} onClick={click}>Cadastre-se</button>

        </div>
    </div>
  </div>

  );


}