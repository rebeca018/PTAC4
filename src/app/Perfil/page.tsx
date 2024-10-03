import PerfilUsuario from "../interfaces/usuario";
import Usuario from "../interfaces/usuario";
const PaginaPerfil = () => {
    const usuario = {
        nome: 'José Lima',
        idade: 20,
        email: 'joselima@gmail.com'
    }

    return(
        <div>
            <PerfilUsuario usuario = {usuario}/>
        </div>
    )
}

export default PaginaPerfil;