import styles from "./footer.module.css";

const Footer: React.FC = () => {
   
    return <footer className={styles.footer}>
    <div className={styles.e}>
        <p>Reserva de Mesas</p>
    </div>

    <div className={styles.d}>
        <p>PTAC e PTAS</p>
    </div>
</footer>

}

export default Footer