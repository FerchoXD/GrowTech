import Logo from "../assets/Logo.svg"
import SeñoraPlantando from "../assets/Señora-Plantando.svg"

const AsideHome = () => {
    return (
        <>
            <aside className="aside-principal">
                    <figure className="figure-principal">
                        <img className="img-logo-principal" src={Logo} alt="Logo Growtech" />
                        <img className="img-señora-principal" src={SeñoraPlantando} alt="Señora Plantando" />
                    </figure>
                </aside>
        </>
    )
}

export default AsideHome;