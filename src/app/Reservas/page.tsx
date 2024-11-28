'use client'
import styles from "./page.module.css";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import Header from "../componentes/header";
import Footer from "../componentes/footer";
import { parseCookies } from "nookies";

const reservas = [
  {
  id: 1,
  mesa: '2',
  data: '2024-02-02'
},
{
  id: 1,
  mesa: '14',
  data: '2024-02-02'
}
];



export default function Reservas() {

  const [usuario, setUsuario] = useState("");
  //const [mesa, setMesa] = useState("");
  const [data, setData] = useState("");
  const [nPessoas, setNPessoas] = useState("");
  const [erroReserva, setReserva] = useState("");
  const [selectedTable, setSelectedTable] = useState("");
  const mesas = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"]

  const selectTable = (mesa) => {
    setSelectedTable(mesa);
  };

  return(
    <div>
      <Header/>
      <div className={styles.container}>
      <div className={styles.mesasContainer}>
          <h1 className={styles.h1}>Selecione uma Mesa:</h1>
          <div className={styles.mesas}>
            {mesas.map((mesa, index) => {
            if (reservas.find((item) => item.mesa === mesa)) {
              return (
                <div
                    key={index}
                    className={styles.mesaR}
                  >
                    {mesa}
                  </div>
              )
            } else {
                return (           
                  <div
                    key={index}
                    className={styles.mesa}
                    onClick={() => selectTable(mesa)}
                  >
                    {mesa}
                  </div>
                )
              }
            })}
          </div>
        </div>

        <div className={styles.reservas}>
          <form className={styles.form}>
          <h1>Reservas</h1>
          <input className={styles.input} type="text" value={usuario} placeholder="Usuário" onChange={(e) => setUsuario(e.target.value)}/>
          <input className={styles.input} type="text" value={"Mesa: " + selectedTable} placeholder="Mesa" onChange={(e) => setReserva(selectedTable)}/>
          <input className={styles.input} type="date" value={data} placeholder="Data" onChange={(e) => setData(e.target.value)}/>
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
