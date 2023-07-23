import React, { useEffect, useState } from 'react';
import axios from "../AxiosSetting/axios"
import Cookies from 'universal-cookie';

import Lluvia from "../assets/Lluvioso.png"
import Nublado from "../assets/Nublado.png"
import Soleado from "../assets/Soleado.jpg"
import Vientoso from "../assets/Vientoso.png"

const Temperature = () => {

  const [image, setImage] = useState("")
  const [text, setText] = useState("")
  const [temperatura, setTemperatura] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await axios.get('/temperatura/temperaturas/ultimo-dato/');
        const valorPredeterminado = 22;
        const valor = res.data[0]['valor'] ?? valorPredeterminado;
        setTemperatura(valor)
        setText(valor)
        if (temperatura > 25) {
          setImage(Soleado);
          setText("Soleado")
        } else if (temperatura >= 20 && temperatura <= 25) {
          setImage(Nublado);
          setText("Nublado")
        } else if (temperatura >= 15 && temperatura < 20) {
          setImage(Lluvia);
          setText("LLluvioso")
        } else if (temperatura < 15) {
          setImage(Vientoso);
          setText("Vientoso")
        }
      } catch (err) {
        const cookies = new Cookies();
        cookies.remove('token')
      }
    };

    fetchData();
  }, []);


  return (
    <>
      <div className="temperatura-container">
        <div className="temperatura-main">
          <p className="temperatura-text"><b>Estado del día: {text}</b></p>
          <div className="temperatura-img">
            <img className="img-temperatura" src={image} alt="Clima actual" />
            <p className="temperatura">{text}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Temperature;
