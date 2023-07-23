import AsidePrincipal from "../components/AsideHome";
import ButtonPrincipal from "../components/ButtonHome";
import ComponentPrincipal from "../components/ComponentHome";
import "../public/css/Principal.css"

const Principal = () => {

    return (
        <>
            <main className="main-principal">
                <AsidePrincipal />
                <nav className="navbar-principal-pattern">
                    <ComponentPrincipal />
                    <ButtonPrincipal />
                </nav>
            </main>
        </>
    );
}

export default Principal;