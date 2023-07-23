import { useRouteError } from "react-router-dom";

const NotFound = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div>
            <h1>{error.status}</h1>
            <p>Page {error.statusText}</p>
        </div>
    );
};
export default NotFound;