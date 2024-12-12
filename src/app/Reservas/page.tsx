'use client'
import styles from "./page.module.css";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import Header from "../componentes/header";
import Footer from "../componentes/footer";
import { parseCookies } from "nookies";
import reserva from "../interfaces/reserva";
import mesa from "../interfaces/mesa";


export default function Reservas() {

  const [mesas, setMesas] = useState<mesa[]>([]);
  const [reservas, setReservas] = useState<reserva[]>([]);  
  const [usuario, setUsuario] = useState("");
  const [data, setData] = useState("");
  const [nPessoas, setNPessoas] = useState("");
  const [erroReserva, setErroReserva] = useState("");
  const [selectedTable, setSelectedTable] = useState("");

  useEffect(() => {

    async function fetchData() {

      try {
        const response = await fetch('http://localhost:3333/reservas');
        const data = await response.json()

        setMesas(data.mesas)
        setReservas(data.reservas)
        console.log(data.mesas)

      } catch (error) {
        console.error("Erro ao carregar os dados:", error);
        setErroReserva("Erro ao carregar as informações. Tente novamente.");
      }
    }
    
    fetchData()
  }, [])


  const selectTable = (mesa: string) => {
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

            const isReserved = reservas.some((item) => item.mesa_id === mesa.id && item.status);

            if (isReserved) {
              return (
                <div key={index} className={styles.mesaR}>
                    {mesa.codigo}
                </div>
              );
            } else {
                return (           
                  <div
                    key={index}
                    className={styles.mesa}
                    onClick={() => selectTable(mesa.id.toString())}
                  >
                    {mesa.codigo}
                  </div>
                );
              }
            })}
          </div>
        </div>

            
        <div className={styles.reservas}>
          <form className={styles.form}>
          <h1>Reservas</h1>
          <input className={styles.input} type="text" value={usuario} placeholder="Usuário" onChange={(e) => setUsuario(e.target.value)}/>
          <input className={styles.input} type="text" value={"Mesa: " + selectedTable} placeholder="Mesa" readOnly/>
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
