import Sidebar from "../components/global-components/Sidebar";
import Navbar from "../components/global-components/Navbar";
import { FileText, CheckCircle, AlertCircle, Eye, Download, Shield } from "lucide-react";

function KycDetails({ isExpanded, setIsExpanded }) {
    const aadharData = {
        number: "768021534787",
        frontCopy: "Jibin_Contract_yPNsJ3A.pdf",
        backCopy: "Jibin_Contract_yPNsJ3A.pdf",
        status: "Verified"
    };

    const panData = {
        number: "CIZPJ33N",
        frontCopy: "Jibin_Contract_yPNsJ3A.pdf",
        backCopy: "Jibin_Contract_yPNsJ3A.pdf",
        status: "Verified"
    };

    const StatusBadge = ({ status }) => (
        <div className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium ${
            status === 'Verified' 
                ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
        }`}>
            {status === 'Verified' ? (
                <CheckCircle size={12} />
            ) : (
                <AlertCircle size={12} />
            )}
            <span>{status}</span>
        </div>
    );

    const DocumentRow = ({ label, value, isFile = false }) => (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 border-b border-gray-700/50 last:border-b-0 group hover:bg-gray-800/20 transition-all duration-300 px-4 -mx-4 rounded-lg">
            <div className="flex-1 mb-2 sm:mb-0">
                <label className="text-sm font-medium text-[#eba312] block mb-1">
                    {label}
                </label>
                <div className="text-white break-words">
                    {isFile ? (
                        <div className="flex items-center space-x-2">
                            <FileText size={16} className="text-gray-400" />
                            <span className="text-sm">{value}</span>
                        </div>
                    ) : (
                        <span className="text-lg font-mono tracking-wider">{value}</span>
                    )}
                </div>
            </div>
            {isFile && (
                <div className="flex space-x-2 mt-2 sm:mt-0">
                    <button className="flex items-center space-x-1 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-[#eba312] rounded-lg transition-all duration-300 text-sm border border-gray-700/50 hover:border-[#eba312]/30">
                        <Eye size={14} />
                        <span>View</span>
                    </button>
                    <button className="flex items-center space-x-1 px-3 py-1.5 bg-[#eba312]/20 hover:bg-[#eba312]/30 text-[#eba312] hover:text-[#d4941a] rounded-lg transition-all duration-300 text-sm border border-[#eba312]/30">
                        <Download size={14} />
                        <span>Download</span>
                    </button>
                </div>
            )}
        </div>
    );

    const DocumentCard = ({ title, data, icon }) => (
        <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-[#eba312]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#eba312]/10">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                    <div className="p-3 bg-[#eba312]/20 rounded-xl">
                        {icon}
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white">{title}</h3>
                        <p className="text-gray-400 text-sm">Identity verification document</p>
                    </div>
                </div>
                <StatusBadge status={data.status} />
            </div>

            <div className="space-y-0">
                <DocumentRow 
                    label={title === "Aadhar Card Details" ? "Aadhar Number" : "PAN Number"} 
                    value={data.number} 
                />
                <DocumentRow 
                    label="Front Copy" 
                    value={data.frontCopy} 
                    isFile={true} 
                />
                <DocumentRow 
                    label="Back Copy" 
                    value={data.backCopy} 
                    isFile={true} 
                />
            </div>
        </div>
    );

    return (
        <div className="flex min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
            <Sidebar isExpanded={isExpanded} toggleSidebar={() => setIsExpanded(!isExpanded)} />

            <div className="flex-1 transition-all duration-300">
                <Navbar isExpanded={isExpanded} />

                <div className={`
                    text-white transition-all duration-300
                    ${isExpanded ? 'pl-[6rem] md:pl-[18rem]' : 'pl-10 md:pl-[6rem]'} 
                    pt-20 pr-[2rem] pb-8
                `}>
                    {/* Header Section */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between mb-2">
                            <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#eba312] via-yellow-400 to-[#eba312] bg-clip-text text-transparent">
                                KYC Details
                            </h1>
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-sm text-green-400 font-medium">All Verified</span>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm lg:text-base">
                            Your identity verification documents and status
                        </p>
                    </div>

                    {/* Verification Status Summary */}
                    <div className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 border border-green-500/30 rounded-2xl p-6 mb-8">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="p-3 bg-green-500/20 rounded-xl">
                                <Shield size={24} className="text-green-400" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white">Verification Complete</h3>
                                <p className="text-green-400 text-sm">All your documents have been verified successfully</p>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="text-center p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                                <div className="text-2xl font-bold text-green-400">2</div>
                                <div className="text-sm text-gray-300">Documents Verified</div>
                            </div>
                            <div className="text-center p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                                <div className="text-2xl font-bold text-green-400">100%</div>
                                <div className="text-sm text-gray-300">Completion Rate</div>
                            </div>
                            <div className="text-center p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                                <div className="text-2xl font-bold text-green-400">Active</div>
                                <div className="text-sm text-gray-300">Account Status</div>
                            </div>
                        </div>
                    </div>

                    {/* Document Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <DocumentCard 
                            title="Aadhar Card Details"
                            data={aadharData}
                            icon={<Shield size={20} className="text-[#eba312]" />}
                        />
                        
                        <DocumentCard 
                            title="PAN Card Details"
                            data={panData}
                            icon={<FileText size={20} className="text-[#eba312]" />}
                        />
                    </div>

                    {/* Additional Information */}
                    <div className="mt-8 bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                            <div className="w-1 h-6 bg-gradient-to-b from-[#eba312] to-[#d4941a] rounded-full mr-3"></div>
                            Important Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-300">
                            <div>
                                <h4 className="font-semibold text-[#eba312] mb-2">Document Requirements:</h4>
                                <ul className="space-y-1 list-disc list-inside">
                                    <li>Clear, readable scanned copies</li>
                                    <li>Valid and non-expired documents</li>
                                    <li>Both front and back sides required</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-[#eba312] mb-2">Verification Process:</h4>
                                <ul className="space-y-1 list-disc list-inside">
                                    <li>Automatic verification within 24 hours</li>
                                    <li>Email notification upon completion</li>
                                    <li>Manual review if automatic fails</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default KycDetails;