import './estilos.css'
import Contenido from './componentes/Contenido'
import Menu from './componentes/Menu'
import { Provider } from 'react-redux'
import { store } from './store/store'

const App = () => {

  return (
    <Provider store={store}>
      <Menu />
      <Contenido />
    </Provider>
  )
}

export default App

/* 
<Cuenta />
<Agregar />

*/

/*
import Botones from './componentes/Botones'
import Lista from './componentes/Lista'
import Texto from './componentes/Texto'

<h1>Título</h1>
      <Lista />

      <hr /><hr />
      <Botones />
      <hr />
      <Texto />

      */

/*
class -> className
for -> htmlFor
*/
//evitar las i
{/*nombres.map((nombre, i) => <p key={i}>{nombre}</p>)*/ }

/*
import Noticia from './componentes/Noticia';
import Persona from './componentes/Persona';
import Saludo from './componentes/Saludo';
*/

/*
  //esto no lo vamos a hacer casi nunca en React
  let nombre = "Santiago";
  const nombres = ["Facundo", "Ana", "Guillermo", "Joaquín"];
  //const nombres = [<p>Facundo</p>, <p>Ana</p>, <p>Guillermo</p>, <p>Joaquín</p>];

  const personas = [
    { id: 1, nombre: "Facundo", edad: 22 },
    { id: 2, nombre: "Ana", edad: 21 },
    { id: 3, nombre: "Guillermo", edad: 23 },
    { id: 4, nombre: "Joaquín", edad: 25 }
  ]
*/

/*
<p>Hola, contenido de la noticia</p>
      <p>Hola, soy {nombre}</p>
      <Noticia />
      <Saludo nombre="Santiago" edad="44" />
      <Saludo nombre="Belem" edad="20" />
      <hr />
      nombres.map((nombre, i) => <p key={i}>{nombre}</p>)
      personas.map(objPersona => <Persona key={objPersona.id} nombre={objPersona.nombre} edad={objPersona.edad} />)
      {personas.map(objPersona => <Persona key={objPersona.id} {...objPersona} />)}
      */