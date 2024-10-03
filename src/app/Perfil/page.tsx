'use client'
import { useState } from "react";

import Usuario from "../interfaces/usuario";


const PaginaPerfil = () => {
    const [usuario, setUsuario] = useState<Usuario>(); 


    return(
        <div>
            <h1>Página Perfil</h1>
        </div>
    )
}

export default PaginaPerfil;