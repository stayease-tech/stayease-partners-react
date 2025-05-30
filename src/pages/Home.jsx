import React from "react";
import Sidebar from "../components/global-components/Sidebar";
import Navbar from "../components/global-components/Navbar";
import { useNavigate } from "react-router-dom";

function Home({ isExpanded, setIsExpanded }) {
    const navigate = useNavigate();

    return (
        <div className="flex">
            <Sidebar isExpanded={isExpanded} toggleSidebar={() => setIsExpanded(!isExpanded)} />

            <div className={`flex-1 duration-300`}>
                <Navbar isExpanded={isExpanded} />

                <div className={`text-white ${isExpanded ? 'pl-[6rem] md:pl-[18rem]' : 'pl-[6rem]'} pt-[7rem] pr-[2rem]`}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-5">
                        <div className="bg-[#2e2f39] text-white rounded-lg flex items-center justify-center h-[10vh] sm:h-[20vh] hover:cursor-pointer" onClick={() => navigate("/partners/partners-properties")}>
                            <div className="flex gap-4 sm:flex-col sm:gap-2">
                                <h3 className="text-lg sm:text-xl text-center font-semibold">Total Properties <span className="sm:hidden">:</span></h3>
                                <p className="text-lg sm:text-2xl text-center">2</p>
                            </div>
                        </div>

                        <div className="bg-[#2e2f39] text-white rounded-lg flex items-center justify-center h-[10vh] sm:h-[20vh] hover:cursor-pointer" onClick={() => navigate("/partners/partners-kyc-details")}>
                            <h3 className="text-lg sm:text-xl text-center font-semibold">KYC Details</h3>
                        </div>

                        <div className="bg-[#2e2f39] text-white rounded-lg flex items-center justify-center h-[10vh] sm:h-[20vh] hover:cursor-pointer" onClick={() => navigate("/partners/partners-bank-details")}>
                            <h3 className="text-lg sm:text-xl text-center font-semibold">Bank Details</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home