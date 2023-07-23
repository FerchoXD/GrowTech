import Cookies from "universal-cookie";
import PlantRow from "../components/PlantRow";
import { useRef, useState, useEffect } from "react";
import axios from "../AxiosSetting/axios"
import { showAlert } from "../SweetAlerts/SweetAlerts";
import { useNavigate } from "react-router-dom";

const Table = () => {

    const [plants, setPlants] = useState([])
    const [allPlants, setAllPlants] = useState([])
    const [originalPlants, setOriginalPlants] = useState([])
    const [nButton, setNButton] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    const cookies = new Cookies()
    const navigate = useNavigate()

    const userId = cookies.get('user_id')
    
    const paginado = useRef(null);
    const previousButton = useRef(null);
    const nextButton = useRef(null);

    useEffect(() => {
        axios.get(`/plants/listar/plantas/${userId}/`)
            .then((res) => {
                let arr = res.data
                const modifiedArr = arr.map((element, index) => {
                    return { ...element, id: index + 1 };
                })
                let nBotones = [];
                for (let i = 1; i <= Math.ceil(arr.length / 4); i++)
                    nBotones.push(i)
                setNButton(nBotones)
                if (arr.length > 4) {
                    paginado.current.style.setProperty("display", "flex")
                    previousButton.current.style.setProperty("display", "none")
                }
                setOriginalPlants(res.data)
                setPlants(modifiedArr.slice(0, 4))
                setAllPlants(modifiedArr)
            })
            .catch((err) => {
                showAlert('¡Error!', 'Verifica tu conexion a internet', 'error');
            })
    }, [])

    const handleClickNextPage = () => {
        let lastPage = Math.ceil(allPlants.length / 4);
        const nextPage = currentPage + 1;
        settingPlants(nextPage)
        validateButtons(nextPage, lastPage);
    }

    const handleClickPreviousPage = () => {
        let lastPage = Math.ceil(allPlants.length / 4);
        const nextPage = currentPage - 1;
        settingPlants(nextPage)
        validateButtons(nextPage, lastPage);
    }

    const handleClickButton = (e) => {
        let actualPage = parseInt(e.target.textContent);
        let lastPage = Math.ceil(allPlants.length / 4);
        validateButtons(actualPage, lastPage)
        settingPlants(actualPage)
    }

    const validateButtons = (actualPage, lastPage) => {
        if (actualPage !== 1) {
            previousButton.current.style.setProperty("display", "flex")
        } else {
            previousButton.current.style.setProperty("display", "none")
        }

        if (actualPage === lastPage) {
            nextButton.current.style.setProperty("display", "none")
        } else {
            nextButton.current.style.setProperty("display", "flex")
        }
    }

    const settingPlants = (actualPage) => {
        let plantas = allPlants;
        setPlants(plantas.slice(((actualPage * 4) - 4), (actualPage * 4)))
        setCurrentPage(actualPage)
    }

    const plantSelect = (id) => {
        let planta_id = originalPlants[id-1]['id']
        cookies.set('plant_id', originalPlants[id-1]['id'])
        fetchData(planta_id)
        navigate('/analysis')
    }

    const fetchData = async (planta_id) => {
        try {
          const response1 = await axios.post('/generar/reporte/semanal/Humedad/suelo/', { planta_id });
          cookies.set('humedad_suelo', response1.data.url_reporte)
          //alert(response1.data.url_reporte)
    
          const response2 = await axios.post('/generar/reporte/semanal/intensidad/', { planta_id });
            cookies.set('intensidad_luz', response2.data.url_reporte)
            //alert(response2.data.url_reporte)

          const response3 = await axios.post('/generar/reporte/semanal/temperatura/', { planta_id });
          cookies.set('temperatura', response3.data.url_reporte)
          //alert(response3.data.url_reporte)
    
          const response4 = await axios.post('/generar/reporte/semanal/Humedad/ambiente/', { planta_id });
          cookies.set('humedad_ambiente', response4.data.url_reporte)
          //alert(response4.data.url_reporte)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

    return (
        <>
            <div className="tabla-container">
                <table className="tabla">
                    <thead className="tabla-header">
                        <tr className="tr-header">
                            <th className="tr-header-item">Numero</th>
                            <th className="tr-header-item">TIPO DE CULTIVO</th>
                            <th className="tr-header-item">HUMEDAD</th>
                            <th className="tr-header-item">ESTATUS</th>
                        </tr>
                    </thead>
                    <tbody className="tabla-body">
                        {plants.map((plant) => (
                            <PlantRow id={plant.id} planta={plant.nombre} humedad={plant.humedad} estado={plant.status ? 'Optimo' : 'Critico'} onClick={plantSelect} />
                        ))}
                    </tbody>
                    <caption ref={paginado} className="tabla-botones">
                        <div className="contenedor-botones">
                            <button className="botones-paginado" ref={previousButton} onClick={handleClickPreviousPage}>Previous Page</button>
                        </div>
                        <div className="contenedor-botones-paginado">
                            {
                                nButton.map((n) =>
                                    <button className="botones-paginado" onClick={handleClickButton}>{n}</button>
                                )
                            }
                        </div>
                        <div className="contenedor-botones">
                            <button className="botones-paginado" ref={nextButton} onClick={handleClickNextPage}>Next Page</button>
                        </div>
                    </caption>
                </table>
            </div>
        </>
    )
}

export default Table;