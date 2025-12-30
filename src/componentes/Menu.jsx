import { useSelector } from "react-redux"

const Menu = () => {

    const cantidad = useSelector(state => state.tareas.tareas.filter(t => !t.completed).length);

    return (
        <div className="menu">
            <h2>Tareas (Pendientes: {cantidad})</h2>
        </div>
    )
}

export default Menu