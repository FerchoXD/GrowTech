import Logo from "../assets/Logo.svg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import { useContext } from "react"
import { AppContext } from "../contexts/AppContext"

const HeaderApp = (props) => {

    const { stateMenuBurger, newStateMenuBurger } = useContext(AppContext)

    const elemento = props.referenciaAside;
    const container = props.referenciaDiv;
    
    const handleMouseEnter = (e) => {
        e.preventDefault();
        if (stateMenuBurger === false) {
            newStateMenuBurger(true)
            elemento.current.style.setProperty("transform", "translateX(0%)");
            elemento.current.style.setProperty("transition", "transform 0.5s ease-in-out");
            container.current.style.setProperty("opacity", "0.5")
            container.current.style.setProperty("transition", "opacity 0.3s")
            return;
        }
        newStateMenuBurger(false)
        elemento.current.style.setProperty("transform", "translateX(100%)");
        elemento.current.style.setProperty("transition", "transform 0.5s ease-in-out");
        container.current.style.setProperty("opacity", "1")
        container.current.style.setProperty("transition", "opacity 0.3s")
    }

    return (
        <>
            <header className="header">
                <div className="div-img-logo">
                    <img className="img-logo" src={Logo} alt="Logo Grow Tech" />
                </div>
                <nav className="nav-header">
                    <div className="div-img-perfil" onClick={handleMouseEnter} >
                        <FontAwesomeIcon className="img-perfil" icon={faBars} color="#40A798" />
                    </div>
                </nav>
            </header>
        </>
    )
}

export default HeaderApp;