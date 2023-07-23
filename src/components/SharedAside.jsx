import "../public/css/SharedAside.css"
import FormShared from "./FormShared";

// eslint-disable-next-line react/prop-types
const SharedAside = ({ newAccount, inputEmail, children }) => {

    return (
        <>
            <aside className="shared-aside">
                <FormShared newAccount={newAccount} inputEmail={inputEmail} boton={children} />
            </aside>
        </>
    )
}

export default SharedAside;