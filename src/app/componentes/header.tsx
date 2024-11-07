
import Link from "next/link";
import styles from "./header.module.css";
import { useRouter } from "next/navigation";

const Header: React.FC = () => {
  const router = useRouter();

  const click = () => {
    router.push('/login');
  }

  const clickH = () => {
    router.push('/');
  }
   
    return <header className={styles.header}>
        <nav className={styles.nav}>
            <div className={styles.flex}>
                <a href="#">
                    <img
                        alt=""
                        src="./images/icon.png"
                    />
                </a>

                
            </div>

            <div className={styles.e}>
            <button onClick={clickH} className={styles.botaoH}>Home</button>
            </div>

            <div className={styles.d}>
                <button onClick={click} className={styles.botao}>Login</button>
            </div>
        </nav>
    </header>

}

export default Header