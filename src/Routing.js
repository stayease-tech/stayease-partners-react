// src/Routing.js - Updated version
import PrivateRoute from "./components/PrivateRoute";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";
import KycDetails from "./pages/KycDetails";
import BankDetails from "./pages/BankDetails";
import OwnerDetails from "./pages/OwnerDetails";

function Routing() {
    return (
        <div>
            <Routes>
                <Route path="/partners/partners-login" element={<Login />} />

                <Route
                    path="/partners/partners-home"
                    element={
                        <PrivateRoute>
                            <Home />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/partners/partners-properties"
                    element={
                        <PrivateRoute>
                            <Properties />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/partners/partners-kyc-details"
                    element={
                        <PrivateRoute>
                            <KycDetails />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/partners/partners-bank-details"
                    element={
                        <PrivateRoute>
                            <BankDetails />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/partners/partners-property-details"
                    element={
                        <PrivateRoute>
                            <PropertyDetails />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/partners/partners-owner-details"
                    element={
                        <PrivateRoute>
                            <OwnerDetails />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </div>
    )
}

export default Routing