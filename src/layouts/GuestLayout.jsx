import { useContext } from "react";
import { Outlet, Navigate, useNavigation } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const GuestLayout = () => {

    const { token } = useContext(UserContext);

    const navigator = useNavigation();

    if (token) {
        return <Navigate to="/" />
    }

    return (
        <>
            {
                navigator.state === "loading" && (
                    <p>
                        Se esta cargando el componente
                    </p>
                )
            }
            <Outlet />
        </>
    )
}

export default GuestLayout;