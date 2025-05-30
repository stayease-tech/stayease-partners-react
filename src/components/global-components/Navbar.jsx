import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FiUser, FiSettings, FiLogOut, FiMenu } from "react-icons/fi";
import { FaBell } from "react-icons/fa";

export default function Navbar({ isExpanded, toggleSidebar }) {
    let publicUrl = process.env.PUBLIC_URL + '/';
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [notificationOpen, setNotificationOpen] = useState(false);
    const dropdownRef = useRef(null);
    const notificationRef = useRef(null);

    // Sample notifications (replace with real data)
    const notifications = [
        { id: 1, message: "New property inquiry received", time: "2 min ago", unread: true },
        { id: 2, message: "Payment processed successfully", time: "1 hour ago", unread: true },
        { id: 3, message: "KYC verification completed", time: "2 hours ago", unread: false },
    ];

    const unreadCount = notifications.filter(n => n.unread).length;

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
            if (notificationRef.current && !notificationRef.current.contains(event.target)) {
                setNotificationOpen(false);
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
            bg-gradient-to-r from-[#000000] to-[#1a1a1a] 
            border-b-2 border-[#eba312] text-white shadow-lg
            fixed w-full top-0 z-30 transition-all duration-300
            ${isExpanded ? 'md:pl-64' : 'md:pl-16'}
        `}>
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    
                    {/* Left side - Logo and Mobile Menu */}
                    <div className="flex items-center space-x-4">
                        {/* Mobile menu button */}
                        <button 
                            onClick={toggleSidebar}
                            className="md:hidden text-2xl hover:text-[#eba312] transition-colors duration-200 p-2 rounded-lg hover:bg-[#eba312]/10"
                        >
                            <FiMenu />
                        </button>

                        {/* Logo */}
                        <div className="flex items-center space-x-2">
                            <img 
                                alt="StayEase Logo" 
                                src={publicUrl + "static/img/brand_logo/stayEase-Logo.webp"} 
                                className="h-10 w-auto object-cover"
                                loading="lazy" 
                            />
                        </div>
                    </div>

                    {/* Center - Breadcrumb or Page Title (optional) */}
                    <div className="hidden lg:flex flex-1 justify-center">
                        <div className="text-sm text-gray-300">
                            <span className="text-[#eba312]">Partners Portal</span>
                        </div>
                    </div>

                    {/* Right side - Actions */}
                    <div className="flex items-center space-x-3">
                        
                        {/* Notifications */}
                        <div className="relative" ref={notificationRef}>
                            <button 
                                onClick={() => setNotificationOpen(!notificationOpen)}
                                className="relative p-2 hover:text-[#eba312] hover:bg-[#eba312]/10 rounded-lg transition-all duration-200"
                            >
                                <FaBell className="text-lg" />
                                {unreadCount > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                                        {unreadCount}
                                    </span>
                                )}
                            </button>

                            {/* Notifications Dropdown */}
                            {notificationOpen && (
                                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                                    <div className="px-4 py-2 border-b border-gray-100">
                                        <h3 className="font-semibold text-gray-800">Notifications</h3>
                                    </div>
                                    <div className="max-h-64 overflow-y-auto">
                                        {notifications.map((notification) => (
                                            <div 
                                                key={notification.id}
                                                className={`px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors ${
                                                    notification.unread ? 'bg-blue-50 border-l-4 border-l-[#eba312]' : ''
                                                }`}
                                            >
                                                <p className="text-sm text-gray-800">{notification.message}</p>
                                                <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="px-4 py-2 border-t border-gray-100">
                                        <button className="text-sm text-[#eba312] hover:underline">
                                            View all notifications
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* User Profile Dropdown */}
                        <div className="relative" ref={dropdownRef}>
                            <button 
                                onClick={() => setOpen(!open)}
                                className="flex items-center space-x-2 p-2 hover:text-[#eba312] hover:bg-[#eba312]/10 rounded-lg transition-all duration-200 border border-transparent hover:border-[#eba312]/30"
                            >
                                <div className="w-8 h-8 bg-[#eba312] rounded-full flex items-center justify-center">
                                    <FiUser className="text-black" />
                                </div>
                                <span className="hidden sm:block text-sm">Profile</span>
                            </button>

                            {/* User Dropdown Menu */}
                            {open && (
                                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                                    
                                    {/* User Info */}
                                    <div className="px-4 py-3 border-b border-gray-100">
                                        <p className="text-sm font-medium text-gray-800">Jibin Roy</p>
                                        <p className="text-xs text-gray-500">jibin@gmail.com</p>
                                    </div>

                                    {/* Menu Items */}
                                    <div className="py-1">
                                        <button
                                            onClick={() => {
                                                navigate("/partners/partners-owner-details");
                                                setOpen(false);
                                            }}
                                            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#eba312] transition-colors"
                                        >
                                            <FiSettings className="mr-3" />
                                            Account Settings
                                        </button>

                                        <hr className="my-1 border-gray-100" />

                                        <button
                                            onClick={handleLogout}
                                            className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                                        >
                                            <FiLogOut className="mr-3" />
                                            Sign Out
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}