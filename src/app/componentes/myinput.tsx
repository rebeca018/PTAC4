type MyInputProp = {
    valor: string;
    funcao: () => void

}
//e: string
const MyInput: React.FC<MyInputProp> = ({valor, funcao}) => {
    return <input value={valor} onChange={funcao}></input>
}

export default MyInput