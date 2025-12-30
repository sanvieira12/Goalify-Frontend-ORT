import { useDispatch } from "react-redux"
import { incrementar } from "../../features/contadorSlice"

const Agregar = () => {

    const dispatch = useDispatch();

    const aumentarCuenta = e => {
        dispatch(incrementar())
    }

    return (
        <div>
            <input type="button" value="Aumentar cuenta" onClick={aumentarCuenta} />
        </div>
    )
}

export default Agregar