import { useId, useRef, useState } from "react";

const Texto = () => {

    const [texto, setTexto] = useState("");

    const idCampo = useId();
    const idCombo = useId();

    const campo = useRef(null);

    const tomarTexto = e => {
        //console.log(e.target.value);
        //setTexto(e.target.value); // <- recuperar
    }

    const cambiarSeleccion = e => {
        console.log(e.target.value);
    }

    const actualizarTexto = () => {
        console.log(campo.current.value);
        setTexto(campo.current.value);
    }

    return (
        <div>
            <label htmlFor={idCampo}>Nombre:</label>
            <input type="text" onChange={tomarTexto} id={idCampo} ref={campo} /><br />
            <p>{280 - texto.length} caracteres restantes.</p>
            <input type="button" value="Ver texto" onClick={actualizarTexto} />
            <hr />

            <label htmlFor={idCombo}>Letra favorita:</label>
            <select onChange={cambiarSeleccion} id={idCombo} >
                <option value="a">A</option>
                <option value="b">B</option>
            </select>

        </div>
    )
}

export default Texto