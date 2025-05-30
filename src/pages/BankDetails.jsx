import Sidebar from "../components/global-components/Sidebar";
import Navbar from "../components/global-components/Navbar";

function BankDetails({ isExpanded, setIsExpanded }) {
    return (
        <div className="flex">
            <Sidebar isExpanded={isExpanded} toggleSidebar={() => setIsExpanded(!isExpanded)} />

            <div className={`flex-1 duration-300`}>
                <Navbar isExpanded={isExpanded} />
            </div>

            <div className={`text-white bg-[#2e2f39] min-h-screen ${isExpanded ? 'pl-[6rem] md:pl-[18rem]' : 'pl-[6rem]'} pt-[7rem] pr-[2rem]`}>
                <h1 className="text-center text-xl lg:text-2xl font-semibold mb-8 text-[#eba312]">BANK DETAILS</h1>

                <div className="w-full overflow-auto">
                    <table className="w-full table-fixed border-collapse border border-white">
                        <tbody>
                            <tr className="border-b border-white">
                                <th className="border-r border-white py-1 px-2 text-[#eba312] text-left break-words">Account Holder's Name</th>
                                <td className="py-1 px-2 text-left break-words">Jibin Roy</td>
                            </tr>

                            <tr className="border-b border-white">
                                <th className="border-r border-white py-1 px-2 text-[#eba312] text-left break-words">Account Number</th>
                                <td className="py-1 px-2 text-left break-words">761252095745674</td>
                            </tr>

                            <tr className="border-b border-white">
                                <th className="border-r border-white py-1 px-2 text-[#eba312] text-left break-words">Bank Name</th>
                                <td className="py-1 px-2 text-left break-words">Federal Bank</td>
                            </tr>

                            <tr className="border-b border-white">
                                <th className="border-r border-white py-1 px-2 text-[#eba312] text-left break-words">Bank Branch</th>
                                <td className="py-1 px-2 text-left break-words">Edappally</td>
                            </tr>

                            <tr className="border-b border-white">
                                <th className="border-r border-white py-1 px-2 text-[#eba312] text-left break-words">IFSC Code</th>
                                <td className="py-1 px-2 text-left break-words">FED7587</td>
                            </tr>

                            <tr className="border-b border-white">
                                <th className="border-r border-white py-1 px-2 text-[#eba312] text-left break-words">Cheque Copy</th>
                                <td className="py-1 px-2 text-left break-words">Fertility__Mortality_Rates_TVg5rWS.pdf</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default BankDetails