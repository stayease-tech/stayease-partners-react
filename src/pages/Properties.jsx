import React, { useState, useEffect, useCallback } from "react";
import Sidebar from "../components/global-components/Sidebar";
import Navbar from "../components/global-components/Navbar";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEdit } from "react-icons/fa";
import axios from 'axios';

function Properties({ isExpanded, setIsExpanded }) {
    const navigate = useNavigate();
    const [supplyData, setSupplyData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const filteredData = supplyData.filter(item =>
        Object.values(item.fields).some(value =>
            String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        // const fetchData = async () => {
        //     try {
        //         const response = await axios.get('/supply/get-supply-data/');

        //         setSupplyData(JSON.parse(response.data.supply_table));
        //     } catch (err) {
        //         console.log(err.message || 'Error fetching data');
        //     }
        // };

        // fetchData();
    }, []);

    return (
        <div className="flex">
            <Sidebar isExpanded={isExpanded} toggleSidebar={() => setIsExpanded(!isExpanded)} />

            <div className={`flex-1 duration-300`}>
                <Navbar isExpanded={isExpanded} />

                <div className={`text-white ${isExpanded ? 'pl-[6rem] md:pl-[18rem]' : 'pl-[6rem]'} pt-[7rem] pr-[2rem]`}>
                    <h1 className="text-center text-xl lg:text-2xl font-semibold mb-8 text-[#eba312]">PROPERTIES</h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mb-5">
                        <div className="bg-[#2e2f39] text-white rounded-lg flex items-center justify-center h-[10vh] sm:h-[15vh] hover:cursor-pointer" onClick={() => navigate("/partners/partners-property-details")}>
                            <h3 className="text-lg sm:text-xl text-center font-semibold">Stayease Harmonia</h3>
                        </div>

                        <div className="bg-[#2e2f39] text-white rounded-lg flex items-center justify-center h-[10vh] sm:h-[15vh] hover:cursor-pointer" onClick={() => navigate("/partners/partners-property-details")}>
                            <h3 className="text-lg sm:text-xl text-center font-semibold">Stayease Aura</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Properties