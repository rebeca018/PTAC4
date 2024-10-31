type HeaderProp = {
    name: string;

}

import Link from "next/link";
import styles from "./header.module.css";
import { useRouter } from "next/navigation";

const Header: React.FC<HeaderProp> = ({name}) => {

  const router = useRouter();

  const click = () => {
    router.push('/login');
  }
   
    return <header className={styles.header}>
        <nav className={styles.nav}>
            <div className={styles.flex}>
                <a href="#" class="-m-1.5 p-1.5">
                    <img
                        alt=""
                        src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                        class="h-8 w-auto"
                    />
                </a>

                
            </div>

            <div className={styles.e}>
                <p>Home</p>
            </div>

            <div className={styles.d}>
                <button onClick={click} className={styles.botao}>Login</button>
            </div>
        </nav>
    </header>

}

export default Header