'use client'
import styles from "./page.module.css";

import Header from "./componentes/header";
import Footer from "./componentes/footer";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { parseCookies } from "nookies";

export default function Home() {
  const router = useRouter();

  const click = () => {
    router.push('/login');
  }

  useEffect(() => {
    const {'restaurant-token' : token} = parseCookies()
    if(!token){
      router.push("/")
    }
    console.log(token)
  }, [])
  
  return(
    <div >
      <Header/>

      <div className={styles.page}>
      <div className={styles.flex}>
          <a href="#">
            <img
              alt=""
              src="./images/icone.png"  
            />
            </a>
          </div>

        <h1 className={styles.title}>Home</h1>


          <div className={styles.main}>
            <button onClick={click} className={styles.botao}>Login</button>
          </div>
      </div>
      <Footer/>
    </div>

  )
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
