import { useRef, useState } from "react"
import { useDispatch } from "react-redux";
import { agregarTarea } from "../features/tareasSlice";

const Agregar = () => {

    const campo = useRef(null);
    const dispatch = useDispatch();
    //const [mensajeError, setMensajeError] = useState("");
    const [hayError, setHayError] = useState(false);

    const guardarTarea = () => {

        let textoTarea = campo.current.value;
        if (textoTarea !== "") {
            //setMensajeError("");
            setHayError(false);
            let objTarea = {
                title: textoTarea,
                completed: false,
                userId: 1
            }

            fetch('https://jsonplaceholder.typicode.com/todos', {
                method: 'POST',
                body: JSON.stringify(objTarea),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => {
                    console.log(json)
                    objTarea.id = json.id;
                    dispatch(agregarTarea(objTarea));
                });
        } else {
            //setMensajeError("El texto no puede estar vacío");
            setHayError(true);
        }
    }

    return (
        <div className="agregar">
            <label htmlFor="txtAgregar">Agregar:</label>
            <input type="text" id="txtAgregar" ref={campo} />
            <input type="button" value="Agregar" onClick={guardarTarea} />
            {hayError && <p>Hay error</p>}
        </div>
    )
}

export default Agregar

/*
<p>{mensajeError}</p>
{hayError ? <p>Hay error</p> : <p></p>}
*/