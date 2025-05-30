import { Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { ROUTES } from "./routes";

// Import pages
import Login from "../pages/Login";
import Home from "../pages/Home";
import Properties from "../pages/Properties";
import PropertyDetails from "../pages/PropertyDetails";
import KycDetails from "../pages/KycDetails";
import BankDetails from "../pages/BankDetails";
import OwnerDetails from "../pages/OwnerDetails";

function Routing() {
    return (
        <Routes>
            {/* Public Routes */}
            <Route 
                path={ROUTES.LOGIN} 
                element={
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                } 
            />

            {/* Private Routes */}
            <Route
                path={ROUTES.HOME}
                element={
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>
                }
            />
            
            <Route
                path={ROUTES.PROPERTIES}
                element={
                    <PrivateRoute>
                        <Properties />
                    </PrivateRoute>
                }
            />
            
            <Route
                path={ROUTES.PROPERTY_DETAILS}
                element={
                    <PrivateRoute>
                        <PropertyDetails />
                    </PrivateRoute>
                }
            />
            
            <Route
                path={ROUTES.KYC_DETAILS}
                element={
                    <PrivateRoute>
                        <KycDetails />
                    </PrivateRoute>
                }
            />
            
            <Route
                path={ROUTES.BANK_DETAILS}
                element={
                    <PrivateRoute>
                        <BankDetails />
                    </PrivateRoute>
                }
            />
            
            <Route
                path={ROUTES.OWNER_DETAILS}
                element={
                    <PrivateRoute>
                        <OwnerDetails />
                    </PrivateRoute>
                }
            />

            {/* Fallback route */}
            <Route 
                path="*" 
                element={<Navigate to={ROUTES.LOGIN} replace />} 
            />
        </Routes>
    );
}

export default Routing;