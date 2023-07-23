import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const InputEmail = () => {
    // eslint-disable-next-line no-unused-vars
    const { newEmail } = useContext(UserContext)

    const handleChangeEmail = (e) => {
        newEmail(e.target.value);
    }

    return (
        <>
            <div>
                <label className="label-form-shared" htmlFor="">
                    <h4 className="h4-form-shared">Correo Electronico</h4>
                </label>
            </div>
            <input className="input-form-shared" type="email" placeholder="Ingresa una contraseña segura" onChange={handleChangeEmail}/>
            <br />
        </>
    )
}

export default InputEmail;