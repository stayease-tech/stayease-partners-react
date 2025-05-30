import { useState, useEffect } from "react";
import { 
    Menu, 
    Home, 
    Settings, 
    User, 
    Bell, 
    X, 
    ArrowLeft, 
    Building2, 
    Landmark,
    Shield
} from "lucide-react";
import { useLocation, Link } from "react-router-dom";

export default function Sidebar({ toggleSidebar, isExpanded }) {
    const location = useLocation();
    const [hoveredItem, setHoveredItem] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);

    // Check for mobile screen size
    useEffect(() => {
        const checkScreenSize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            
            // On mobile, when sidebar is expanded, show overlay
            if (mobile && isExpanded) {
                setIsOverlayVisible(true);
                document.body.style.overflow = 'hidden';
            } else {
                setIsOverlayVisible(false);
                document.body.style.overflow = 'unset';
            }
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        
        return () => {
            window.removeEventListener('resize', checkScreenSize);
            document.body.style.overflow = 'unset';
        };
    }, [isExpanded]);

    const handleItemClick = () => {
        // Close sidebar on mobile when menu item is clicked
        if (isMobile && isExpanded) {
            toggleSidebar();
        }
    };

    const handleOverlayClick = () => {
        if (isMobile && isExpanded) {
            toggleSidebar();
        }
    };

    const menuItems = [
        { 
            name: "Dashboard", 
            icon: <Home size={20} />, 
            link: "/partners/partners-home",
            description: "Overview & Analytics"
        },
        { 
            name: "Properties", 
            icon: <Building2 size={20} />, 
            link: "/partners/partners-properties",
            description: "Manage your listings",
        },
        { 
            name: "KYC Details", 
            icon: <Shield size={20} />, 
            link: "/partners/partners-kyc-details",
            description: "Verification status"
        },
        { 
            name: "Bank Details", 
            icon: <Landmark size={20} />, 
            link: "/partners/partners-bank-details",
            description: "Payment information"
        },
        { 
            name: "Profile", 
            icon: <User size={20} />, 
            link: "/partners/partners-owner-details",
            description: "Personal information"
        },
        { 
            name: "Settings", 
            icon: <Settings size={20} />, 
            link: "/partners/partners-settings",
            description: "App preferences"
        },
    ];

    const MenuItem = ({ item, index }) => {
        const isActive = location.pathname === item.link;
        
        return (
            <li key={index} className="relative z-10">
                <Link
                    to={item.link}
                    onClick={handleItemClick}
                    onMouseEnter={() => setHoveredItem(index)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={`
                        flex items-center rounded-xl transition-all duration-300 group relative overflow-hidden
                        ${(isExpanded || isMobile) ? "p-3 mx-2 space-x-3" : "p-3 mx-2 justify-center"}
                        ${isActive 
                            ? "bg-[#eba312]/20 text-[#eba312] border border-[#eba312] shadow-lg shadow-[#eba312]/25" 
                            : "hover:bg-gray-800/50 hover:text-[#eba312] text-gray-300"
                        }
                    `}
                >   
                    {/* Icon */}
                    <div className="relative flex-shrink-0">
                        <span className={`transition-transform duration-300 ${
                            isActive ? 'scale-110' : 'group-hover:scale-110'
                        }`}>
                            {item.icon}
                        </span>
                        {item.badge && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                                {item.badge}
                            </span>
                        )}
                    </div>
                    
                    {/* Text */}
                    {(isExpanded || isMobile) && (
                        <div className="flex-1 min-w-0">
                            <span className="font-medium text-sm block truncate">
                                {item.name}
                            </span>
                            {!isActive && (
                                <span className="text-xs text-gray-400 block truncate opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {item.description}
                                </span>
                            )}
                        </div>
                    )}
                </Link>

                {/* Tooltip for collapsed state - Only show on desktop */}
                {!isMobile && !isExpanded && hoveredItem === index && (
                    <div className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg shadow-xl z-50 whitespace-nowrap border border-gray-700">
                        <div className="flex items-center space-x-2">
                            <span className="font-medium text-sm">{item.name}</span>
                            {item.badge && (
                                <span className="bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                                    {item.badge}
                                </span>
                            )}
                        </div>
                        <div className="text-xs text-gray-400">{item.description}</div>
                        {/* Arrow */}
                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900 rotate-45 border-l border-b border-gray-700"></div>
                    </div>
                )}
            </li>
        );
    };

    return (
        <>
            {/* Mobile Overlay */}
            {isMobile && isOverlayVisible && (
                <div
                    className="fixed inset-0 bg-black/50 z-[99] md:hidden"
                    onClick={handleOverlayClick}
                ></div>
            )}

            <div
                className={`
                    min-h-screen bg-gradient-to-b from-black via-gray-900 to-black 
                    border-r-2 border-[#eba312]/50 text-white 
                    transition-all duration-300 ease-in-out
                    fixed z-[100] left-0 top-0 shadow-2xl
                    ${isMobile 
                        ? isExpanded 
                            ? "w-64 translate-x-0" 
                            : "w-16 -translate-x-full md:translate-x-0"
                        : isExpanded 
                            ? "w-64" 
                            : "w-16"
                    }
                `}
            >
                {/* Header */}
                <div className="p-4 border-b border-gray-800">
                    <div className="flex items-center justify-between">
                        {(isExpanded) && (
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-gradient-to-br from-[#eba312] to-[#d4941a] rounded-lg flex items-center justify-center">
                                    <Building2 size={16} className="text-white" />
                                </div>
                                <div>
                                    <h2 className="font-bold text-sm text-white">StayEase</h2>
                                    <p className="text-xs text-gray-400">Partner Portal</p>
                                </div>
                            </div>
                        )}
                        
                        <button 
                            onClick={toggleSidebar} 
                            className={`
                                p-2 rounded-lg transition-all duration-300 
                                hover:bg-gray-800 hover:text-[#eba312] text-gray-300
                                ${(!isExpanded && !isMobile) && 'mx-auto'}
                            `}
                        >
                            {isMobile && isExpanded ? (
                                <X size={18} />
                            ) : isExpanded ? (
                                <ArrowLeft size={18} />
                            ) : (
                                <Menu size={18} />
                            )}
                        </button>
                    </div>
                </div>

                {/* Main Navigation */}
                <div className="flex-1 py-6">
                    <nav>
                        <ul className="space-y-2">
                            {menuItems.map((item, index) => (
                                <MenuItem key={index} item={item} index={index} />
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#eba312]/5 to-transparent pointer-events-none"></div>
            </div>
        </>
    );
}