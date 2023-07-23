import TitleHome from "../components/TitleHome"
import MainLayout from "../layouts/MainLayout"
import HelpComponent from "../components/Help"

const Help = () => {
    return (
        <>
            <MainLayout title={<TitleHome title="Ayuda y Soporte" />} help={<HelpComponent />} />
        </>
    )
}

export default Help