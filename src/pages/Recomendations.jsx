import MainLayout from "../layouts/MainLayout";
import TitleHome from "../components/TitleHome";
import Advices from "../components/Advices";
import "../public/css/Recomendations.css"

const Recomendations = () => {
    return (
        <>
            <MainLayout title={<TitleHome title="Recomendaciones" />} recomendations={<Advices />} />
        </>
    )
}

export default Recomendations;