import SharedSection from "../components/SharedSection";
import SharedAside from "../components/SharedAside"
import Footer from "../components/Footer";
//
import Logo from "../assets/Logo.svg"
import Family from "../assets/Family.svg"
import NewAccount from "../components/NewAccount";
import ButtonShared from "../components/ButtonShared";

import "../public/css/SharedSection.css"

const Login = () => {

    return (
        <>
            <main className="main-shared">
                <SharedSection img1={Logo} img2={Family} />
                <SharedAside newAccount={<NewAccount />}>
                    <ButtonShared title="Inciar Sesion" />
                </SharedAside>
            </main>
            <Footer />
        </>
    )
}

export default Login;