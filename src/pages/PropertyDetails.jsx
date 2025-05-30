import { useState } from 'react';
import Sidebar from "../components/global-components/Sidebar";
import Navbar from "../components/global-components/Navbar";

function PropertyDetails({ isExpanded, setIsExpanded }) {
    const [currentStep, setCurrentStep] = useState('propertyData');

    const dataHandleToggle = (step) => {
        setCurrentStep(step);
    };

    return (
        <div className="flex">
            <Sidebar isExpanded={isExpanded} toggleSidebar={() => setIsExpanded(!isExpanded)} />

            <div className={`flex-1 duration-300`}>
                <Navbar isExpanded={isExpanded} />
            </div>

            <div className={`text-white bg-[#2e2f39] min-h-screen ${isExpanded ? 'pl-[6rem] md:pl-[18rem]' : 'pl-[6rem]'} pt-[7rem] pr-[2rem]`}>
                <h1 className="text-center text-xl lg:text-2xl font-semibold mb-8 text-[#eba312]">PROPERTY DETAILS</h1>

                {currentStep === 'propertyData' && <>
                    <div className="w-full overflow-auto">
                        <table className="w-full table-fixed border-collapse border border-white">
                            <tbody>
                                <tr className="border-b border-white">
                                    <th className="border-r border-white py-1 px-2 text-[#eba312] text-left break-words">Room Type</th>
                                    <td className="py-1 px-2 text-left break-words">Stayease Harmonia</td>
                                </tr>

                                <tr className="border-b border-white">
                                    <th className="border-r border-white py-1 px-2 text-[#eba312] text-left break-words">Property Type</th>
                                    <td className="py-1 px-2 text-left break-words">PG/Hostel</td>
                                </tr>

                                <tr className="border-b border-white">
                                    <th className="border-r border-white py-1 px-2 text-[#eba312] text-left break-words">Door/Building</th>
                                    <td className="py-1 px-2 text-left break-words">11/12</td>
                                </tr>

                                <tr className="border-b border-white">
                                    <th className="border-r border-white py-1 px-2 text-[#eba312] text-left break-words">Street Address</th>
                                    <td className="py-1 px-2 text-left break-words">Virata Nagar</td>
                                </tr>

                                <tr className="border-b border-white">
                                    <th className="border-r border-white py-1 px-2 text-[#eba312] text-left break-words">Area</th>
                                    <td className="py-1 px-2 text-left break-words">FED7587</td>
                                </tr>

                                <tr className="border-b border-white">
                                    <th className="border-r border-white py-1 px-2 text-[#eba312] text-left break-words">Landmark (Optional)</th>
                                    <td className="py-1 px-2 text-left break-words"></td>
                                </tr>

                                <tr className="border-b border-white">
                                    <th className="border-r border-white py-1 px-2 text-[#eba312] text-left break-words">State</th>
                                    <td className="py-1 px-2 text-left break-words">Karnataka</td>
                                </tr>

                                <tr className="border-b border-white">
                                    <th className="border-r border-white py-1 px-2 text-[#eba312] text-left break-words">City</th>
                                    <td className="py-1 px-2 text-left break-words">Bengaluru</td>
                                </tr>

                                <tr className="border-b border-white">
                                    <th className="border-r border-white py-1 px-2 text-[#eba312] text-left break-words">Pincode</th>
                                    <td className="py-1 px-2 text-left break-words">560068</td>
                                </tr>

                                <tr className="border-b border-white">
                                    <th className="border-r border-white py-1 px-2 text-[#eba312] text-left break-words">Meal Type</th>
                                    <td className="py-1 px-2 text-left break-words">Veg</td>
                                </tr>

                                <tr className="border-b border-white">
                                    <th className="border-r border-white py-1 px-2 text-[#eba312] text-left break-words">Rent</th>
                                    <td className="py-1 px-2 text-left break-words">12000</td>
                                </tr>

                                <tr className="border-b border-white">
                                    <th className="border-r border-white py-1 px-2 text-[#eba312] text-left break-words">Deposit</th>
                                    <td className="py-1 px-2 text-left break-words">50000</td>
                                </tr>

                                <tr className="border-b border-white">
                                    <th className="border-r border-white py-1 px-2 text-[#eba312] text-left break-words">Rent Free</th>
                                    <td className="py-1 px-2 text-left break-words">1 Month</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <button
                        className="block w-full px-4 py-2 mt-5 bg-yellow-600 text-white text-base font-medium rounded cursor-pointer hover:bg-yellow-700 mb-[2rem]" onClick={() => dataHandleToggle('propertyKyc')}
                        type="button">Next</button>
                </>
                }

                {currentStep === 'propertyKyc' && <>
                    <h3 className="text-lg mb-4 text-stone-400"><strong>Property KYC</strong></h3>

                    <div className="w-full overflow-auto">
                        <table className="w-full table-fixed border-collapse border border-white">
                            <tbody>
                                <tr className="border-b border-white">
                                    <th className="border-r border-white py-1 px-2 text-[#eba312] text-left break-words">Sale Deed</th>
                                    <td className="py-1 px-2 text-left break-words">UdayveerPeetaniResume_4d7V7kQ.pdf</td>
                                </tr>

                                <tr className="border-b border-white">
                                    <th className="border-r border-white py-1 px-2 text-[#eba312] text-left break-words">E Bill</th>
                                    <td className="py-1 px-2 text-left break-words">Company_-_Chocolatex_tZGzMrN.pdf</td>
                                </tr>

                                <tr className="border-b border-white">
                                    <th className="border-r border-white py-1 px-2 text-[#eba312] text-left break-words">Tax Receipt</th>
                                    <td className="py-1 px-2 text-left break-words">Logo_5WdPC0y.pdf</td>
                                </tr>

                                <tr className="border-b border-white">
                                    <th className="border-r border-white py-1 px-2 text-[#eba312] text-left break-words">Water Bill</th>
                                    <td className="py-1 px-2 text-left break-words">Jibin_VC_kmBQQ7k.pdf</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 className="text-lg my-4 text-stone-400"><strong>Supply Documents</strong></h3>

                    <div className="w-full overflow-auto">
                        <table className="w-full table-fixed border-collapse border border-white">
                            <tbody>
                                <tr className="border-b border-white">
                                    <th className="border-r border-white py-1 px-2 text-[#eba312] text-left break-words">LOI</th>
                                    <td className="py-1 px-2 text-left break-words">Rangayana_Theatre_Jf1787M.pdf</td>
                                </tr>

                                <tr className="border-b border-white">
                                    <th className="border-r border-white py-1 px-2 text-[#eba312] text-left break-words">Agreement</th>
                                    <td className="py-1 px-2 text-left break-words">JK_TC_ujyVzG6.pdf</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 className="text-lg my-4 text-stone-400"><strong>Building Details</strong></h3>

                    <div className="w-full overflow-auto">
                        <table className="w-full table-fixed border-collapse border border-white">
                            <tbody>
                                <tr className="border-b border-white">
                                    <th className="border-r border-white py-1 px-2 text-[#eba312] text-left break-words">Number of Basements</th>
                                    <td className="py-1 px-2 text-left break-words">1</td>
                                </tr>

                                <tr className="border-b border-white">
                                    <th className="border-r border-white py-1 px-2 text-[#eba312] text-left break-words">Number of Floors</th>
                                    <td className="py-1 px-2 text-left break-words">2</td>
                                </tr>

                                <tr className="border-b border-white">
                                    <th className="border-r border-white py-1 px-2 text-[#eba312] text-left break-words">Number of Rooms</th>
                                    <td className="py-1 px-2 text-left break-words">2</td>
                                </tr>

                                <tr className="border-b border-white">
                                    <th className="border-r border-white py-1 px-2 text-[#eba312] text-left break-words">Number of Common Areas</th>
                                    <td className="py-1 px-2 text-left break-words">2</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <button
                        className="block w-full px-4 py-2 mt-5 bg-yellow-600 text-white text-base font-medium rounded cursor-pointer hover:bg-yellow-700 mb-[2rem]" onClick={() => dataHandleToggle('propertyData')}
                        type="button">Prev</button>
                </>}
            </div>
        </div>
    )
}

export default PropertyDetails