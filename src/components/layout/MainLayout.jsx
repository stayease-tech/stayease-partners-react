import { useState, useEffect } from "react";
import Sidebar from "../global-components/Sidebar";
import Navbar from "../global-components/Navbar";

function MainLayout({ children, title, description }) {
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
        <div className="flex min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
            <Sidebar isExpanded={isExpanded} toggleSidebar={() => setIsExpanded(!isExpanded)} />

            <div className="flex-1 transition-all duration-300">
                <Navbar isExpanded={isExpanded} toggleSidebar={() => setIsExpanded(!isExpanded)} />

                <div className={`
                    text-white transition-all duration-300
                    ${isExpanded ? 'pl-[6rem] md:pl-[18rem]' : 'pl-10 md:pl-[6rem]'} 
                    pt-20 pr-[2rem] pb-8
                `}>
                    {/* Optional Header Section */}
                    {(title || description) && (
                        <div className="mb-8">
                            {title && (
                                <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#eba312] via-yellow-400 to-[#eba312] bg-clip-text text-transparent mb-2">
                                    {title}
                                </h1>
                            )}
                            {description && (
                                <p className="text-gray-400 text-sm lg:text-base">
                                    {description}
                                </p>
                            )}
                        </div>
                    )}

                    {/* Page Content */}
                    {children}
                </div>
            </div>
        </div>
    );
}

export default MainLayout;