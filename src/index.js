import ReactDOM from "react-dom";
import App from "./app.js";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.render(
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <App/>
    </GoogleOAuthProvider>
, document.querySelector("#root")); //eslint-disable-line
