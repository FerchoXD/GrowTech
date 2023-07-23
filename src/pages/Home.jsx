import MainLayout from "../layouts/MainLayout";
import TitleHome from "../components/TitleHome";
import Table from "../components/Table";
import Temperature from "../components/Temperature"

const Home = () => {
     
    return (
        <>
            <MainLayout title={<TitleHome title="Resumen De Estado De Cultivos"/>} table={<Table />} temperatura={<Temperature />} />
        </>
    )
}

export default Home;