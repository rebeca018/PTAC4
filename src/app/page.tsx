'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import Button from "./componentes/button"
import MyInput from "./componentes/myinput"

export default function Home() {
  const [user, setUser] = useState(true);
  const [input, setInput] = useState("");
  if(user){
    return (
      <div className={styles.page}>
        
        <h1>Cliente</h1>
        <MyInput valor={'oi'} funcao={() => {}}/>
        <button onClick={() => setUser(false)}>User</button>
        <button> </button>
      </div>
    );
  } else{
    return (
      <div className={styles.page}>
        <Button name="Info 6"/>
        <h1>Administrador</h1>
        <button onClick={() => setUser(true)}>User</button>
      </div>
    );
  }


}
