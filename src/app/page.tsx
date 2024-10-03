'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import Button from "./componentes/button"
import MyInput from "./componentes/myinput"
import { useRouter } from "next/navigation";

export default function Home() {
  const [user, setUser] = useState(true);
  const [input, setInput] = useState("");

  const router = useRouter();

  const click = () => {
    router.push('/login');
  }
/*
  if(user){
    return (
      <div className={styles.page}>

      <h1 className={styles.title}>Home</h1>
        <div className={styles.main}>
          <button onClick={click} className={styles.botao}>Login</button>
        </div>

        <h1>Cliente</h1>
        <MyInput valor={'oi'} funcao={() => {}}/>
        <button onClick={() => setUser(false)}>User</button>
        <button> </button>
      </div>
    );
  } else{
    return (
      <div className={styles.page}>
          <h1 className={styles.title}>Home</h1>
            <div className={styles.main}>
              <button onClick={click} className={styles.botao}>Login</button>
            </div>
        <Button name="Info 6"/>
        <h1>Administrador</h1>
        <button onClick={() => setUser(true)}>User</button>
      </div>
    );
  }
*/
  return(
    <div className={styles.page}>
      <h1 className={styles.title}>Home</h1>
        <div className={styles.main}>
          <button onClick={click} className={styles.botao}>Login</button>
        </div>
    </div>

  )
}
