import Sidebar from "../components/global-components/Sidebar";
import Navbar from "../components/global-components/Navbar";

function KycDetails({ isExpanded, setIsExpanded }) {
    return (
        <div className="flex">
            <Sidebar isExpanded={isExpanded} toggleSidebar={() => setIsExpanded(!isExpanded)} />

            <div className={`flex-1 duration-300`}>
                <Navbar isExpanded={isExpanded} />

                <div className={`text-white bg-[#2e2f39] min-h-screen ${isExpanded ? 'pl-[6rem] md:pl-[18rem]' : 'pl-[6rem]'} pt-[7rem] pr-[2rem]`}>
                    <h1 className="text-center text-xl lg:text-2xl font-semibold mb-8 text-[#eba312]">KYC DETAILS</h1>

                    <h3 className="text-lg mb-4 text-stone-400"><strong>Aadhar Card Details:</strong></h3>

                    <div className="w-full overflow-auto">
                        <table className="w-full table-fixed border-collapse border border-white">
                            <tbody>
                                <tr className="border-b border-white">
                                    <th className="border-r border-white py-1 px-2 text-[#eba312] text-left break-words">Aadhar Number</th>
                                    <td className="py-1 px-2 text-left break-words">768021534787</td>
                                </tr>

                                <tr className="border-b border-white">
                                    <th className="border-r border-white py-1 px-2 text-[#eba312] text-left break-words">Front Copy</th>
                                    <td className="py-1 px-2 text-left break-words">Jibin_Contract_yPNsJ3A.pdf</td>
                                </tr>

                                <tr className="border-b border-white">
                                    <th className="border-r border-white py-1 px-2 text-[#eba312] text-left break-words">Back Copy</th>
                                    <td className="py-1 px-2 text-left break-words">Jibin_Contract_yPNsJ3A.pdf</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 className="text-lg my-4 text-stone-400"><strong>PAN Card Details:</strong></h3>

                    <div className="w-full overflow-auto">
                        <table className="w-full table-fixed border-collapse border border-white">
                            <tbody>
                                <tr className="border-b border-white">
                                    <th className="border-r border-white py-1 px-2 text-[#eba312] text-left break-words">PAN Number</th>
                                    <td className="py-1 px-2 text-left break-words">CIZPJ33N</td>
                                </tr>

                                <tr className="border-b border-white">
                                    <th className="border-r border-white py-1 px-2 text-[#eba312] text-left break-words">Front Copy</th>
                                    <td className="py-1 px-2 text-left break-words">Jibin_Contract_yPNsJ3A.pdf</td>
                                </tr>

                                <tr className="border-b border-white">
                                    <th className="border-r border-white py-1 px-2 text-[#eba312] text-left break-words">Back Copy</th>
                                    <td className="py-1 px-2 text-left break-words">Jibin_Contract_yPNsJ3A.pdf</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KycDetails