import TitleHome from "../components/TitleHome";
import MainLayout from "../layouts/MainLayout";
import NewPlantC from "../components/NewPlant"

const NewPlant = () => {
    return (
        <>
            <MainLayout title={<TitleHome title="¿Deseas añadir una nueva planta :)?" />} newPlant={<NewPlantC />}/>
        </>
    )
}

export default NewPlant;