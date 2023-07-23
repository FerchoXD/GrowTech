import SharedSection from "../components/SharedSection";

import Logo from "../assets/Logo.svg"
import Family from "../assets/Family.svg"
import Footer from "../components/Footer";
import SharedAside from "../components/SharedAside";
import InputEmail from "../components/InputEmail";
import ButtonShared from "../components/ButtonShared";
import "../public/css/SharedSection.css"

const Registro = () => {
    return ( 
        <>
            <main className="main-shared">
                <SharedSection img1={Logo} img2={Family}/>
                <SharedAside inputEmail={<InputEmail />}>
                    <ButtonShared title="Registrar" />
                </SharedAside>
            </main>
                <Footer />
        </>
     );
}

export default Registro;