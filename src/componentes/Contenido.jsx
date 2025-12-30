import Agregar from './Agregar'
import Tarjetas from './Tarjetas'

const Contenido = () => {

    /*
    2 peticiones fetch
    encadenar
    1° ir a buscar objetivos y después al recibir resp. evaluaciones
    ------
    No disparar dos cosas simultaneamente
    race condition

    */

    

    return (
        <div className="contenido">
            <Agregar/>
            <Tarjetas/>
        </div>
    )
}

export default Contenido