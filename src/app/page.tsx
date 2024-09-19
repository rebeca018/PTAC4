'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [user, setUser] = useState(true);
  if(user){
    return (
      <div className={styles.page}>
        
        <h1>Cliente</h1>
        <button onClick={() => setUser(false)}>User</button>
        <button> </button>
      </div>
    );
  } else{
    return (
      <div className={styles.page}>

        <h1>Administrador</h1>
        <button onClick={() => setUser(true)}>User</button>
      </div>
    );
  }


}
