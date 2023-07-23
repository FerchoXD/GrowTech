import { useContext } from "react";
import { Outlet, Navigate, useNavigation } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const DefaultLayout = () => {
   
    const navigator = useNavigation();
    const { token } = useContext(UserContext);

    if(!token){
        return <Navigate to= "/login" />
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

export default DefaultLayout;