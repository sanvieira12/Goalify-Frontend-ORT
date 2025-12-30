import { useEffect, useState } from "react"

const Lista = () => {

    const [lista, setLista] = useState([]);

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=20")
            .then(r => r.json())
            .then(datos => {
                console.log(datos.results);
                setLista(datos.results);

            })
    }, [])


    return (
        <div>
            {lista.map(persona => <p key={persona.login.uuid}>{persona.name.first} <img src={persona.picture.thumbnail} /></p>)}
        </div>
    )
}

export default Lista