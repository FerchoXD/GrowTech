import { useState } from "react";
import { UserContext } from "./UserContext";
import Cookies from "universal-cookie";

// eslint-disable-next-line react/prop-types
const UserState = ({ children }) => {
    const cookies = new Cookies();
    const [id, setId] = useState(null)
    const [username, setUsername] = useState(cookies.get('username'))
    const [email, setEmail] = useState(cookies.get('email'))
    const [password, setPassword] = useState("")
    const [token, setToken] = useState(cookies.get('token'))

    const newId = (value) => {
        setId(value)
    }

    const newUsername = (value) => {
        setUsername(value);
    }

    const newEmail = (value) => {
        setEmail(value)
    }

    const newPassword = (value) => {
        setPassword(value)
    }

    const newToken = (value) => {
        setToken(value)
    }

    return (
        <>
            <UserContext.Provider value={{
                id, username, email, password, token, newId, newUsername, newEmail, newPassword, newToken
            }}>
                { children }
            </UserContext.Provider>
        </>
    )

}

export default UserState;