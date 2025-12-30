import { useSelector } from "react-redux"

const Cuenta = () => {

    const contadorActual = useSelector(state => state.contador.cuenta)

    return (
        <h1>{contadorActual}</h1>
    )
}

export default Cuenta