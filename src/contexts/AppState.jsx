import { useState } from "react";
import { AppContext } from "./AppContext";

// eslint-disable-next-line react/prop-types
const AppState = ({ children }) => {
    const [stateMenuBurger, setStateMenuBurger] = useState(false)

    const newStateMenuBurger = (value) => {
        setStateMenuBurger(value);
    }

    return (
        <>
            <AppContext.Provider value={{
                stateMenuBurger, newStateMenuBurger
            }}>
                { children }
            </AppContext.Provider>
        </>
    )

}

export default AppState;