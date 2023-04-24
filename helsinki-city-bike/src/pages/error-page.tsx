import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error:any = useRouteError();
    console.log(error);

    return(
        <div className="error-page">
            <h1>Oops!</h1>
            <p>Something went wrong! This was totally unexpected thus this page really doesn't exist. Its all in your head!</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}

export default ErrorPage;