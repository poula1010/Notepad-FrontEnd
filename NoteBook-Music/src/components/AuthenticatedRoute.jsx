import { Navigate } from "react-router-dom";
import { isUserLoggedIn } from "../services/AuthService";

// eslint-disable-next-line react/prop-types
export default function AuthenticatedRoute({ children }) {

    const isUser = isUserLoggedIn();

    if (isUser) {
        return children
    }
    else {
        return <Navigate to="/login" />
    }
}