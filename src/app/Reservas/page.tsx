'use client'
import styles from "./page.module.css";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Header from "../componentes/header";
import Footer from "../componentes/footer";

export default function Reservas() {

  const [usuario, setUsuario] = useState("");
  const [mesa, setMesa] = useState("");
  const [data, setData] = useState("");
  const [nPessoas, setNPessoas] = useState("");
  const [erroReserva, setReserva] = useState("");

  return(
    <div>
      <Header/>
      <div className={styles.container}>
        <div className={styles.login}>
          <form>
          <h1>Reservas</h1>
          <input className={styles.input} type="text" value={usuario} placeholder="Usuário" onChange={(e) => setUsuario(e.target.value)}/>
          <input className={styles.input} type="text" value={mesa} placeholder="Mesa" onChange={(e) => setMesa(e.target.value)}/>
          <input className={styles.input} type="text" value={data} placeholder="Data" onChange={(e) => setData(e.target.value)}/>
          <input className={styles.input} type="text" value={nPessoas} placeholder="Número de Pessoas" onChange={(e) => setNPessoas(e.target.value)}/>
          <button className={styles.botao} type="submit">Reservar</button>
          
          
            {erroReserva && (
              <div className={styles.autenticar}>
                <h2>Não foi possível realizar a Reserva</h2>
                <p>{erroReserva}</p>
              </div>
            )}
          </form>
          
        </div>
    </div>
      <Footer/>
    </div>
  )

}
