import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const ButtonHome = () => {

    const navigate = useNavigate();
    const cookies = new Cookies()

    const handleRedirectHome = () => {
        navigate(`/home/`)
    }

    return (
        <>
            <button className="button-principal" onClick={handleRedirectHome}>Get Started</button>
        </>
    )
}

export default ButtonHome;