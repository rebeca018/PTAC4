import { useState } from 'react';
import styles from './page.module.css';

import Header from "../componentes/header";
import Footer from "../componentes/footer";
import { FetchMesas } from '../componentes/FetchMesas';

const Reservas = () => {
  const [usuario, setUsuario] = useState("");
  const [data, setData] = useState("");
  const [nPessoas, setNPessoas] = useState("");
  const [erroReserva, setErroReserva] = useState("");
  const [selectedTable, setSelectedTable] = useState("");

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <FetchMesas />  {/* Renderizando o componente FetchMesas */}
        
        <div className={styles.reservas}>
          <form className={styles.form}>
            <h1>Reservas</h1>
            <input
              className={styles.input}
              type="text"
              value={usuario}
              placeholder="Usuário"
              onChange={(e) => setUsuario(e.target.value)}
            />
            <input
              className={styles.input}
              type="text"
              value={"Mesa: " + selectedTable}
              placeholder="Mesa"
              readOnly
            />
            <input
              className={styles.input}
              type="date"
              value={data}
              placeholder="Data"
              onChange={(e) => setData(e.target.value)}
            />
            <input
              className={styles.input}
              type="text"
              value={nPessoas}
              placeholder="Número de Pessoas"
              onChange={(e) => setNPessoas(e.target.value)}
            />
            <button className={styles.botao} type="submit">
              Reservar
            </button>

            {erroReserva && (
              <div className={styles.autenticar}>
                <h2>Não foi possível realizar a Reserva</h2>
                <p>{erroReserva}</p>
              </div>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Reservas;
