import { useState } from "react"
import "../public/css/NewPlant.css"
import Cookies from "universal-cookie"
import axios from "../AxiosSetting/axios"
import { useNavigate } from "react-router-dom"
import { showAlert } from "../SweetAlerts/SweetAlerts"

const NewPlant = () => {

    const [plant, setPlant] = useState("")

    const cookies = new Cookies()
    const navigate = useNavigate()

    const handleChangePlant = (e) => {
        setPlant(e.target.value)
    }

    const handleNewPlant = () => {
        const nombre = plant
        const humedad = 0;
        const status = true;
        const usuario = cookies.get('user_id')
        axios.post('/plants/create/', {
            nombre, humedad, status, usuario
        }).then((res) => {
            if (res.status === 201) {
                showAlert('¡Felicidades!' ,'Te ayudaremos a cuidarla :3', 'success')
                navigate("/home")
                return;
            }
            showAlert('¡Error!' ,'Algo sucedio mal, intentalo mas tarde', 'error')
        }).catch((err) => {
            showAlert('¡Error!' ,'Algo sucedio mal, intentalo mas tarde', 'error')
            const cookies = new Cookies();
            cookies.remove('token')
        })
    }

    return (
        <>
            <div className="new-plant-container">
                <input className="new-plant-text" type="text" placeholder="Ingresa el nombre de la planta a añadir" onChange={handleChangePlant} />
                <button className="new-plant-button" onClick={handleNewPlant}>Añadir</button>
            </div>
        </>
    )
}

export default NewPlant