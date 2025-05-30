import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const isLoggedIn = "true";

    if (!isLoggedIn) {
        return <Navigate to="/partners/partners-login" />;
    }

    return children;
};

export default PrivateRoute;
