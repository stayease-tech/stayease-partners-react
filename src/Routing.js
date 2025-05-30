import { useState, useEffect } from "react";
import Properties from "./components/section-components/Properties";
import KycDetails from "./components/section-components/KycDetails";
import BankDetails from "./components/section-components/BankDetails";
import PropertyDetails from "./components/section-components/PropertyDetails";
import OwnerDetails from "./components/section-components/OwnerDetails";
import PrivateRoute from "./components/PrivateRoute";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

function Routing() {
    const isMdOrLarger = () => window.innerWidth >= 768;

    const [isExpanded, setIsExpanded] = useState(() => {
        if (typeof window !== "undefined" && isMdOrLarger()) {
            return JSON.parse(sessionStorage.getItem("isExpanded")) ?? false;
        }
        return false;
    });

    useEffect(() => {
        if (typeof window !== "undefined" && isMdOrLarger()) {
            sessionStorage.setItem("isExpanded", JSON.stringify(isExpanded));
        }
    }, [isExpanded]);

    return (
        <div>
            <Routes>
                <Route path="/partners/partners-login" element={<Login />} />

                <Route
                    path="/partners/partners-home"
                    element={
                        <PrivateRoute>
                            <Home isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/partners/partners-properties"
                    element={
                        <PrivateRoute>
                            <Properties isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/partners/partners-kyc-details"
                    element={
                        <PrivateRoute>
                            <KycDetails isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/partners/partners-bank-details"
                    element={
                        <PrivateRoute>
                            <BankDetails isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/partners/partners-property-details"
                    element={
                        <PrivateRoute>
                            <PropertyDetails isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/partners/partners-owner-details"
                    element={
                        <PrivateRoute>
                            <OwnerDetails isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </div>
    )
}

export default Routing