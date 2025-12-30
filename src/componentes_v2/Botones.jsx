//rafce

import { useEffect, useState } from "react";


const Botones = () => {

    const [contador, setContador] = useState(0);
    const [contador2, setContador2] = useState(0);

    //la función se ejecuta cada vez que el componente se redibuje
    /* useEffect(() => {
        document.title = `Cont: ${contador} - Cont2: ${contador2}`;
    }) */

    //la función se ejecuta si cambia algo del array de dependencias
    useEffect(() => {
        document.title = `Cont: ${contador} - Cont2: ${contador2}`;
    }, [contador, contador2])

    //la función se ejecuta solo al renderizar el componente por primera vez (carga)
    /* useEffect(() => {
        document.title = `Cont: ${contador} - Cont2: ${contador2}`;
    }, []) */


    const aumentarCuenta = () => {
        setContador(contador + 1);
    }

    const aumentarCuenta2 = () => {
        setContador2(contador2 + 1);
    }

    return (
        <div>
            <input type="button" value="Contar" onClick={aumentarCuenta} />
            <h2>{contador}</h2>
            <input type="button" value="Contar 2" onClick={aumentarCuenta2} />
            <h2>{contador2}</h2>
        </div>
    )
}

export default Botones

/*
<input type="button" value="Contar 2" onClick={() => { console.log("click 2") }} />
*/