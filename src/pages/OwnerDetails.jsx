import Sidebar from "../components/global-components/Sidebar";
import Navbar from "../components/global-components/Navbar";

function OwnerDetails({ isExpanded, setIsExpanded }) {
    return (
        <div className="flex">
            <Sidebar isExpanded={isExpanded} toggleSidebar={() => setIsExpanded(!isExpanded)} />

            <div className={`flex-1 duration-300`}>
                <Navbar isExpanded={isExpanded} />
            </div>

            <div className={`text-white bg-[#2e2f39] min-h-screen ${isExpanded ? 'pl-[6rem] md:pl-[18rem]' : 'pl-[6rem]'} pt-[7rem] pr-[2rem]`}>
                <h1 className="text-center text-xl lg:text-2xl font-semibold mb-8 text-[#eba312]">OWNER DETAILS</h1>

                <div className="w-full overflow-auto">
                    <table className="w-full table-fixed border-collapse border border-white">
                        <tbody>
                            <tr className="border-b border-white">
                                <th className="border-r border-white py-1 px-2 text-[#eba312] text-left break-words">Name</th>
                                <td className="py-1 px-2 text-left break-words">Jibin Roy</td>
                            </tr>

                            <tr className="border-b border-white">
                                <th className="border-r border-white py-1 px-2 text-[#eba312] text-left break-words">Phone</th>
                                <td className="py-1 px-2 text-left break-words">8111849588</td>
                            </tr>

                            <tr className="border-b border-white">
                                <th className="border-r border-white py-1 px-2 text-[#eba312] text-left break-words">Email</th>
                                <td className="py-1 px-2 text-left break-words">jibin@gmail.com</td>
                            </tr>

                            <tr className="border-b border-white">
                                <th className="border-r border-white py-1 px-2 text-[#eba312] text-left break-words">Address</th>
                                <td className="py-1 px-2 text-left break-words">qwertyasd</td>
                            </tr>

                            <tr className="border-b border-white">
                                <th className="border-r border-white py-1 px-2 text-[#eba312] text-left break-words">Date of Birth</th>
                                <td className="py-1 px-2 text-left break-words">1997-08-26</td>
                            </tr>

                            <tr className="border-b border-white">
                                <th className="border-r border-white py-1 px-2 text-[#eba312] text-left break-words">Gender</th>
                                <td className="py-1 px-2 text-left break-words">Male</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default OwnerDetails