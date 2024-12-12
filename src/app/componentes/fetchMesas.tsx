import mesa from "../interfaces/mesa";
import reserva from "../interfaces/reserva"

import Header from "./header";
import Footer from "./footer";

import styles from "./fetchmesa.module.css";

export async function FetchMesas () {
    const response = await fetch('http://localhost:3333/reservas')
    const data = await response.json()
    const mesas : mesa[] = data.mesa;
    const reservas : reserva[] = data.reserva;

    return(
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
                  >
                    {mesa.codigo}
                  </div>
                );
              }
            })}
          </div>
        </div>
      )
}