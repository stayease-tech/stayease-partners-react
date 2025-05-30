import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    // If already logged in, redirect to dashboard
    if (isLoggedIn) {
        return <Navigate to="/partners/partners-home" replace />;
    }

    return children;
};

export default PublicRoute;