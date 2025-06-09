import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { 
    User, 
    Settings, 
    LogOut, 
    Menu, 
    Search,
    ChevronDown,
    X
} from "lucide-react";

export default function Navbar({ isExpanded, toggleSidebar }) {
    const navigate = useNavigate();
    const [userDropdownOpen, setUserDropdownOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchFocused, setSearchFocused] = useState(false);
    
    const userDropdownRef = useRef(null);

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
                setUserDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("phone");
        navigate("/partners/partners-login");
    };

    return (
        <nav className={`
            bg-gradient-to-r from-black via-gray-900 to-black
            border-b-2 border-[#eba312]/50 text-white shadow-2xl
            fixed w-full top-0 z-30 transition-all duration-300 backdrop-blur-md
            ${isExpanded ? 'md:pl-64' : 'md:pl-16'}
        `}>
            {/* Main navbar content */}
            <div className="mx-auto  sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    
                    {/* Left section - Mobile menu + Logo + Breadcrumb */}
                    <div className="flex items-center space-x-4 flex-1">
                        {/* Mobile menu button */}
                        <button 
                            onClick={toggleSidebar}
                            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-[#eba312] hover:bg-gray-800/50 transition-all duration-200 group"
                        >
                            <Menu size={20} className="group-hover:scale-110 transition-transform" />
                        </button>

                        <img src="/Logo.webp" alt="Logo" className="w-1/2 md:w-1/5" />
                    </div>

                    {/* Center section - Search (hidden on small screens) */}
                    <div className="hidden lg:flex flex-1 max-w-md mx-8">
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search size={16} className="text-gray-400" />
                            </div>
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onFocus={() => setSearchFocused(true)}
                                onBlur={() => setSearchFocused(false)}
                                className={`
                                    w-full pl-10 pr-4 py-2 bg-gray-800/50 border rounded-lg
                                    text-white placeholder-gray-400 text-sm
                                    transition-all duration-300 focus:outline-none
                                    ${searchFocused 
                                        ? 'border-[#eba312] ring-2 ring-[#eba312]/20 bg-gray-800/80' 
                                        : 'border-gray-600/50 hover:border-gray-500'
                                    }
                                `}
                                placeholder="Search properties, tenants..."
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
                                >
                                    <X size={16} />
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Right section - Actions */}
                    <div className="flex items-center space-x-2">
                        
                        {/* Search button for mobile */}
                        <button className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-[#eba312] hover:bg-gray-800/50 transition-all duration-200">
                            <Search size={18} />
                        </button>

                        {/* User Profile Dropdown */}
                        <div className="relative" ref={userDropdownRef}>
                            <button 
                                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                                className="flex items-center space-x-2 p-2 rounded-lg text-gray-300 hover:text-[#eba312] hover:bg-gray-800/50 transition-all duration-200 group border border-transparent hover:border-[#eba312]/30"
                            >
                                <div className="relative">
                                    <div className="w-8 h-8 bg-gradient-to-br from-[#eba312] to-[#d4941a] rounded-full flex items-center justify-center shadow-lg">
                                        <User size={16} className="text-white" />
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900"></div>
                                </div>
                                <div className="hidden sm:block text-left">
                                    <div className="text-sm font-medium">Jibin Roy</div>
                                    <div className="text-xs text-gray-400">Partner</div>
                                </div>
                                <ChevronDown size={14} className={`hidden sm:block transition-transform duration-200 ${userDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {/* User Dropdown Menu */}
                            {userDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50 animate-in slide-in-from-top-5 duration-200">
                                    
                                    {/* User Info Header */}
                                    <div className="px-4 py-4 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-10 h-10 bg-gradient-to-br from-[#eba312] to-[#d4941a] rounded-full flex items-center justify-center">
                                                <User size={18} className="text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm font-semibold text-gray-800">Jibin Roy</p>
                                                <p className="text-xs text-gray-500">jibin@gmail.com</p>
                                                <div className="flex items-center mt-1">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                                                    <span className="text-xs text-green-600 font-medium">Active Partner</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Menu Items */}
                                    <div className="py-2">
                                        <button
                                            onClick={() => {
                                                navigate("/partners/partners-owner-details");
                                                setUserDropdownOpen(false);
                                            }}
                                            className="flex items-center w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#eba312] transition-all duration-200 group"
                                        >
                                            <User size={16} className="mr-3 group-hover:scale-110 transition-transform" />
                                            <div className="text-left">
                                                <div className="font-medium">Profile Settings</div>
                                                <div className="text-xs text-gray-500">Manage your account</div>
                                            </div>
                                        </button>

                                        <button
                                            onClick={() => {
                                                setUserDropdownOpen(false);
                                            }}
                                            className="flex items-center w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#eba312] transition-all duration-200 group"
                                        >
                                            <Settings size={16} className="mr-3 group-hover:scale-110 transition-transform" />
                                            <div className="text-left">
                                                <div className="font-medium">Preferences</div>
                                                <div className="text-xs text-gray-500">App settings & more</div>
                                            </div>
                                        </button>

                                        <hr className="my-2 border-gray-100" />

                                        <button
                                            onClick={handleLogout}
                                            className="flex items-center w-full px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-all duration-200 group"
                                        >
                                            <LogOut size={16} className="mr-3 group-hover:scale-110 transition-transform" />
                                            <div className="text-left">
                                                <div className="font-medium">Sign Out</div>
                                                <div className="text-xs text-red-400">End your session</div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Remove the mobile page title section that was causing layout issues */}
        </nav>
    );
}