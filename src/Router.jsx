import { createBrowserRouter } from "react-router-dom";

import Login from "./pages/Login"
import Registro from "./pages/Registro";
import Principal from "./pages/Principal"
import NotFound from "./pages/NotFound";
import DefaultLayout from "./layouts/DefaultLayout";
import GuestLayout from "./layouts/GuestLayout";
import Home from "./pages/Home";
import Analysis from "./pages/Analysis";
import Recomendations from "./pages/Recomendations";
import Help from "./pages/Help";
import NewPlant from "./pages/NewPlant";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Principal />,
            },
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/new-plant",
                element: <NewPlant />
            },
            {
                path: "/analysis",
                element: <Analysis />
            },
            {
                path: "/recomendations",
                element: <Recomendations />
            },
            {
                path: "/help",
                element: <Help />
            }
        ]
    }, 
    {
        path: "/",
        element: <GuestLayout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/registro",
                element: <Registro />
            }
        ]
    },
])