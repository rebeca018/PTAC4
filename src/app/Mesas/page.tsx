'use client'
import styles from "./page.module.css";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import Header from "../componentes/header";
import Footer from "../componentes/footer";
import { parseCookies } from "nookies";
import { ApiURL } from "../config";
import reserva from "../interfaces/reserva";
import mesa from "../interfaces/mesa";


export default function Mesas() {

  const [mesas, setMesas] = useState<mesa[]>([]);
  const [reservas, setReservas] = useState<reserva[]>([]);  
  const [usuario, setUsuario] = useState("");
  const [codigo, setCodigo] = useState("")
  const [n_lugares, setN_lugares] = useState(0);
  const [erroCadastroMesa, setErroCadastroMesa] = useState("");

  async function handleSubmit(e:FormEvent) {
    e.preventDefault()
    try{
      const {'restaurant-token' : token} = parseCookies()
      const response = await fetch(`${ApiURL}/mesa`, {
        method: 'POST',
        headers: {
          'Authorization':`Token: ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ codigo, n_lugares })
      });

      if(response){
        const data = await response.json()
        console.log(data)

        setCodigo("");
        setN_lugares(0);
      }

    }catch(error){
      console.error('Erro na requisição', error)
    }
    
    console.log('Código', codigo)
    console.log('N_lugares', n_lugares);
  }


  return(
    <div>
      <Header/>
      <div className={styles.container}>
            
        <div className={styles.reservas}>
          <form className={styles.form} onSubmit={handleSubmit}>
          <h1>Cadastro de Mesas</h1>
          <input className={styles.input} type="text" value={codigo} placeholder="Código" onChange={(e) => setCodigo(e.target.value)}/>
          <input className={styles.input} type="number" value={n_lugares} placeholder="Número de Lugares" onChange={(e) => setN_lugares(parseInt(e.target.value))}/>
          <button className={styles.botao} type="submit">Reservar</button>
          
            {erroCadastroMesa && (
              <div className={styles.autenticar}>
                <h2>Não foi possível realizar a Reserva</h2>
                <p>{erroCadastroMesa}</p>
              </div>
            )}
          </form>
          
        </div>
      </div>
      
      <Footer/>
    </div>
  )

}
