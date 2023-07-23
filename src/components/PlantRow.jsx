const PlantRow = ({ id, planta, humedad, estado, onClick }) => {

    return (
        <>
            <tr className="tr-body" onClick={() => onClick(id)}>
                <td className="tr-body-item">{id}</td>
                <td className="tr-body-item">{planta}</td>
                <td className="tr-body-item">{humedad}</td>
                <td className="tr-body-item">
                    {estado === 'Optimo' && <span style={{ color: 'green' }}>●</span>}
                    {estado === 'Critico' && <span style={{ color: 'red' }}>●</span>}
                    {estado}
                </td>
            </tr>
        </>
    )
}

export default PlantRow;