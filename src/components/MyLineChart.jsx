import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Cookies from 'universal-cookie';
import axios from "../AxiosSetting/axios.js"
import { showAlert } from '../SweetAlerts/SweetAlerts';

const MyLineChart = () => {

  const [data, setData] = useState([])
  const cookies = new Cookies()

  const usuario_id = cookies.get('user_id')
  const planta_id = cookies.get('plant_id')

  const humedad_suelo = cookies.get('humedad_suelo')
  const intensidad_luz = cookies.get('intensidad_luz')
  const temperatura = cookies.get('temperatura')
  const humedad_ambiente = cookies.get('humedad_ambiente')

  useEffect(() => {
    axios.post(`/plants/obtener-datos-promedio/`, {
      usuario_id, planta_id
    })
      .then((res) => {
        if (res.status === 200) {
          const dataPlants = res.data;
          const sortedData = dataPlants.slice().sort((a, b) => new Date(a.dia) - new Date(b.dia));
          setData(sortedData)
          return;
        }
        showAlert('¡Error!', 'Verifica tu conexion a internet', 'error');
        cookies.remove('token')
      })
      .catch((err) => {
        showAlert('¡Error!', 'Verifica tu conexion a internet', 'error');
        cookies.remove('token')
      })
  }, [])

  return (
    <>
      <div className="grafica-1">
        <ResponsiveContainer>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="dia" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="valor" stroke="#8884d8" activeDot={{ r: 8 }} />

          </LineChart>
        </ResponsiveContainer>
          <a href={humedad_suelo}>Reporte Semanal: Humedad Del Suelo</a>
          <br />
          <a href={intensidad_luz}>Reporte Semanal: Intensidad De La Luz</a>
          <br />
          <a href={temperatura}>Reporte Semanal: Temperatura</a>
          <br />
          <a href={humedad_ambiente}>Reporte Semanal: Humadad Del Ambiente</a>
      </div>
    </>
  )
};

export default MyLineChart;