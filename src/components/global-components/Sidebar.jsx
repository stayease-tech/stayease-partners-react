import { FiMenu, FiHome, FiSettings, FiX } from "react-icons/fi";
import { BiMessageAltDetail } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Sidebar({ toggleSidebar, isExpanded }) {
    const location = useLocation();

    const menuItems = [
        { name: "Home", icon: <FiHome />, link: "/partners/partners-home" },
        { name: "Properties", icon: <BiMessageAltDetail />, link: "/partners/partners-properties" },
        { name: "Settings", icon: <FiSettings />, link: "#" },
    ];

    // Close sidebar on mobile when clicking outside or on route change
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768 && isExpanded) {
                toggleSidebar();
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isExpanded, toggleSidebar]);

    // Handle overlay click to close sidebar on mobile
    const handleOverlayClick = () => {
        if (window.innerWidth < 768) {
            toggleSidebar();
        }
    };

    return (
        <>
            {/* Mobile Overlay */}
            {isExpanded && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={handleOverlayClick}
                />
            )}

            {/* Sidebar */}
            <div
                className={`
                    min-h-screen bg-gradient-to-b from-[#000000] to-[#1a1a1a] 
                    border-r-2 border-[#eba312] text-white 
                    duration-300 ease-in-out fixed z-50 left-0 top-0 
                    shadow-2xl
                    ${isExpanded ? "w-64" : "w-16"}
                    ${isExpanded ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
                `}
            >
                {/* Header */}
                <div className="p-4 border-b border-[#eba312]/20">
                    <div className="flex items-center justify-between">
                        {isExpanded && (
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-[#eba312] rounded-lg flex items-center justify-center">
                                    <span className="text-black font-bold text-sm">SE</span>
                                </div>
                                <span className="font-semibold text-[#eba312]">StayEase</span>
                            </div>
                        )}
                        <button 
                            onClick={toggleSidebar} 
                            className="text-2xl hover:text-[#eba312] transition-colors duration-200 p-1 rounded-lg hover:bg-[#eba312]/10"
                        >
                            {isExpanded ? <FiX /> : <FiMenu />}
                        </button>
                    </div>
                </div>

                {/* Navigation Menu */}
                <nav className="mt-6 px-3">
                    <ul className="space-y-2">
                        {menuItems.map((item, index) => {
                            const isActive = location.pathname === item.link;
                            return (
                                <li key={index}>
                                    <a
                                        href={item.link}
                                        className={`
                                            flex items-center space-x-3 px-3 py-3 rounded-xl 
                                            transition-all duration-200 group relative overflow-hidden
                                            ${isActive 
                                                ? "bg-[#eba312]/20 text-[#eba312] border border-[#eba312]/30" 
                                                : "hover:bg-[#eba312]/10 hover:text-[#eba312] text-gray-300"
                                            }
                                        `}
                                    >
                                        {/* Active indicator */}
                                        {isActive && (
                                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#eba312] rounded-r-full" />
                                        )}
                                        
                                        {/* Icon */}
                                        <span className={`
                                            text-xl transition-transform duration-200 
                                            ${isActive ? "scale-110" : "group-hover:scale-110"}
                                        `}>
                                            {item.icon}
                                        </span>
                                        
                                        {/* Text */}
                                        {isExpanded && (
                                            <span className="text-sm font-medium transition-all duration-200">
                                                {item.name}
                                            </span>
                                        )}

                                        {/* Tooltip for collapsed state */}
                                        {!isExpanded && (
                                            <div className="
                                                absolute left-full ml-2 px-3 py-2 bg-[#eba312] text-black text-sm 
                                                rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 
                                                transition-opacity duration-200 whitespace-nowrap z-50
                                                shadow-lg
                                            ">
                                                {item.name}
                                                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 
                                                    border-4 border-transparent border-r-[#eba312]" />
                                            </div>
                                        )}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Footer */}
                {isExpanded && (
                    <div className="absolute bottom-4 left-4 right-4">
                        <div className="p-3 rounded-xl bg-[#eba312]/10 border border-[#eba312]/20">
                            <p className="text-xs text-gray-400 text-center">
                                StayEase Partners v1.0
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}