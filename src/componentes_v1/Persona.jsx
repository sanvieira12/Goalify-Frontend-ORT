//rafce

import Edad from "./Edad"

const Persona = ({nombre, edad}) => {
  return (
    <div>
        <h3>{nombre}</h3>
        <Edad edad={edad} />
    </div>
  )
}

export default Persona