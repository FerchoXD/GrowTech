import MainLayout from "../layouts/MainLayout";
import TitleHome from "../components/TitleHome";
import MyLineChart from "../components/MyLineChart";

const Analysis = () => {
    return (
        <>
            <MainLayout title={<TitleHome title="Graficas"/>} grafica={<MyLineChart />}/>
        </>
    )
}

export default Analysis;