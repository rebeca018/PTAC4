interface Usuario {
    id?: number;
    name: string;
    email: string;
    password: string;
    tipo?: "cliente" | "admin";

}

/*
const PerfilUsuario: React.FC<{usuario: Usuario}>= ({usuario}) => {
    return (
        <div>
            <h1>{usuario.nome}</h1>
            <p>{usuario.idade}</p>
            {usuario.email && <p>Email: {usuario.email}</p>}
        </div>
    )
}

export default PerfilUsuario;
*/
export default Usuario;