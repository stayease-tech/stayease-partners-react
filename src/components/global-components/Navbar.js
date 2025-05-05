import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import { FiUser } from "react-icons/fi";

export default function Navbar({ isExpanded }) {
    let publicUrl = process.env.PUBLIC_URL + '/';
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("phone");
        navigate("/partners/partners-login");
      };

    return (
        <nav className={`bg-[#000000] border-b-2 border-[#eba312] text-white shadow fixed w-full top-0 transition-opacity duration-300 ${isExpanded ? 'pl-[4rem] md:pl-[16rem]' : 'pl-[4rem]'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex items-center">
                        <img alt="CompanyLogo" src={publicUrl + "static/img/brand_logo/stayEase-Logo.webp"} className="h-18 w-auto object-cover"
                            loading="lazy" />
                    </div>

                    <div className="flex gap-3">
                        <div to='' className="hover:text-[#eba312] hover:bg-[#282b38] hover:border-[#eba312] p-3 border-2 rounded-full" onClick={() => setOpen(!open)}><FiUser /></div>

                        {open && (
                            <div
                                className="absolute right-0 z-10 mt-[3.5rem] mr-[1rem] w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-none"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="menu-button"
                                tabIndex="-1"
                            >
                                <div className="py-1" role="none">
                                    <div
                                        className="block px-4 py-2 text-sm text-gray-700 hover:cursor-pointer"
                                        role="menuitem"
                                        tabIndex="-1"
                                        onClick={() => navigate("/partners/partners-owner-details")}
                                    >
                                        Account settings
                                    </div>

                                    <hr/>

                                        <button
                                            onClick={handleLogout}
                                            className="block w-full px-4 py-2 text-left text-sm text-gray-700"
                                            role="menuitem"
                                            tabIndex="-1"
                                        >
                                            Sign out
                                        </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
