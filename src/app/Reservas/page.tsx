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
import Reserva from "../interfaces/reserva";
import { table } from "console";


export default function Reservas() {

  const [mesas, setMesas] = useState<mesa[]>([]);
  const [reservas, setReservas] = useState<reserva[]>([]);  
  const [usuario, setUsuario] = useState("");
  const [data, setData] = useState("");
  const [nPessoas, setNPessoas] = useState("");
  const [erroReserva, setErroReserva] = useState("");
  const [selectedTable, setSelectedTable] = useState(0);
  const [fromReserva, setFormReserva]= useState<Reserva>({
    id: 0,
    usuario_id: 0,
    mesa_id: 0,
    data: "",
    n_pessoas: 0,
    status: true
  })

  function alterFormReserva<K extends keyof Reserva>(key:K, value: Reserva[K] ){
    console.log(key, value)
    setFormReserva( (prevForm) => ({
      ...prevForm,
      [key] : value
    }))
  }

  useEffect(() => {

    async function fetchData() {

      try {
        const responseReservas = await fetch('http://localhost:3333/reservas');
        const responseMesas = await fetch('http://localhost:3333/mesas');
        const dataReservas = await responseReservas.json()
        const dataMesas = await responseMesas.json()

        setMesas(dataMesas)
        setReservas(dataReservas)
        //console.log(data.mesas)

      } catch (error) {
        console.error("Erro ao carregar os dados:", error);
        setErroReserva("Erro ao carregar as informações. Tente novamente.");
      }
    }
    
    fetchData()
  }, [])


  const selectTable = (mesaId: number) => {
    setSelectedTable(mesaId);
    alterFormReserva("mesa_id", mesaId);
  };

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    await fetch('http://localhost:3333/reservas', {
      method: 'POST',
      body: JSON.stringify(fromReserva)
    })
  }

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
                    onClick={() => {
                      alterFormReserva("mesa_id", mesa.id)
                      selectTable(mesa.id) }}
                  >
                    {mesa.codigo}
                  </div>
                );
              }
            })}
          </div>
        </div>

            
        <div className={styles.reservas}>
          <form className={styles.form} onSubmit={handleSubmit}>
          <h1>Reservas</h1>
          <input className={styles.input} type="number" value={fromReserva.usuario_id} placeholder="Usuário" onChange={(e) => alterFormReserva("usuario_id", parseInt(e.target.value))}/>
          <input className={styles.input} type="text" value={"Mesa: " + selectedTable} placeholder="Mesa" readOnly/>
          <input className={styles.input} type="date" value={fromReserva.data} placeholder="Data" onChange={((e) => alterFormReserva("data", e.target.value))}/>
          <input className={styles.input} type="number" value={fromReserva.n_pessoas} placeholder="Número de Pessoas" onChange={(e) => alterFormReserva("n_pessoas", parseInt(e.target.value))}/>
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
