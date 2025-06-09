import { useState } from "react";
import { 
    Landmark, 
    CreditCard, 
    Building, 
    MapPin, 
    FileText, 
    Edit3, 
    Save, 
    X, 
    Eye, 
    Download,
    Shield,
    TrendingUp,
    Calendar
} from "lucide-react";
import MainLayout from "../components/layout/MainLayout";

function BankDetails({ isExpanded, setIsExpanded }) {
    const [isEditing, setIsEditing] = useState(false);
    const [bankData, setBankData] = useState({
        accountHolderName: "Jibin Roy",
        accountNumber: "761252095745674",
        bankName: "Federal Bank",
        branchName: "Edappally",
        ifscCode: "FED7587",
        chequeCopy: "Fertility__Mortality_Rates_TVg5rWS.pdf"
    });

    const [originalData, setOriginalData] = useState({ ...bankData });

    const handleEdit = () => {
        setIsEditing(true);
        setOriginalData({ ...bankData });
    };

    const handleSave = () => {
        setIsEditing(false);
        // Here you would make an API call to save the data
    };

    const handleCancel = () => {
        setBankData({ ...originalData });
        setIsEditing(false);
    };

    const handleInputChange = (field, value) => {
        setBankData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const paymentStats = [
        {
            title: "Total Earnings",
            value: "₹2,40,000",
            change: "+12%",
            icon: <TrendingUp size={20} className="text-green-400" />,
            positive: true
        },
        {
            title: "This Month",
            value: "₹24,000",
            change: "+8%",
            icon: <Calendar size={20} className="text-[#eba312]" />,
            positive: true
        },
        {
            title: "Pending",
            value: "₹0",
            change: "0%",
            icon: <CreditCard size={20} className="text-gray-400" />,
            positive: true
        }
    ];

    const BankField = ({ icon, label, value, field, editable = true, type = "text", isFile = false }) => (
        <div className="group bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl border border-gray-700/50 rounded-xl p-4 hover:border-[#eba312]/30 transition-all duration-300">
            <div className="flex items-start space-x-3">
                <div className="p-2 bg-[#eba312]/20 rounded-lg group-hover:bg-[#eba312]/30 transition-colors duration-300">
                    {icon}
                </div>
                <div className="flex-1 min-w-0">
                    <label className="text-sm font-medium text-[#eba312] block mb-2">
                        {label}
                    </label>
                    {isEditing && editable && !isFile ? (
                        <input
                            type={type}
                            value={value}
                            onChange={(e) => handleInputChange(field, e.target.value)}
                            className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-[#eba312] focus:ring-2 focus:ring-[#eba312]/20 focus:outline-none transition-all duration-300"
                            placeholder={`Enter ${label.toLowerCase()}`}
                        />
                    ) : isFile ? (
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <FileText size={16} className="text-gray-400" />
                                <span className="text-white text-sm">{value}</span>
                            </div>
                            <div className="flex space-x-2">
                                <button className="flex items-center space-x-1 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-[#eba312] rounded-lg transition-all duration-300 text-sm border border-gray-700/50 hover:border-[#eba312]/30">
                                    <Eye size={14} />
                                    <span>View</span>
                                </button>
                                <button className="flex items-center space-x-1 px-3 py-1.5 bg-[#eba312]/20 hover:bg-[#eba312]/30 text-[#eba312] rounded-lg transition-all duration-300 text-sm border border-[#eba312]/30">
                                    <Download size={14} />
                                    <span>Download</span>
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="text-white text-lg break-words font-mono tracking-wider">
                            {field === 'accountNumber' ? 
                                `****-****-${value.slice(-4)}` : 
                                value
                            }
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

    return (
        <MainLayout 
            title="Payment & Banking"
            description="Manage your payment information and view earnings"
        >
            <div className="flex items-center justify-between mb-2">
                <div className="flex space-x-3">
                    {isEditing ? (
                        <>
                            <button
                                onClick={handleSave}
                                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/25"
                            >
                                <Save size={16} />
                                <span>Save Changes</span>
                            </button>
                            <button
                                onClick={handleCancel}
                                className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-xl transition-all duration-300"
                            >
                                <X size={16} />
                                <span>Cancel</span>
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={handleEdit}
                            className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#eba312] to-[#d4941a] hover:from-[#d4941a] hover:to-[#eba312] text-black font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-[#eba312]/25"
                        >
                            <Edit3 size={16} />
                            <span>Edit Details</span>
                        </button>
                    )}
                </div>
            </div>

            {/* Payment Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {paymentStats.map((stat, index) => (
                    <div 
                        key={index}
                        className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-xl p-4 hover:border-[#eba312]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#eba312]/10"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-400 text-sm">{stat.title}</p>
                                <p className="text-2xl font-bold text-white">{stat.value}</p>
                                <div className="flex items-center mt-1">
                                    <span className={`text-sm font-medium ${
                                        stat.positive ? 'text-green-400' : 'text-red-400'
                                    }`}>
                                        {stat.change}
                                    </span>
                                    <span className="text-gray-500 text-xs ml-1">vs last month</span>
                                </div>
                            </div>
                            <div className={`p-3 rounded-lg ${
                                stat.title === "Total Earnings" 
                                    ? 'bg-green-500/20' 
                                    : stat.title === "This Month"
                                    ? 'bg-[#eba312]/20'
                                    : 'bg-gray-500/20'
                            }`}>
                                {stat.icon}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bank Account Status */}
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 border border-green-500/30 rounded-2xl p-6 mb-8">
                <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-green-500/20 rounded-xl">
                        <Shield size={24} className="text-green-400" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white">Account Verified</h3>
                        <p className="text-green-400 text-sm">Your bank account is active and ready for payments</p>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                        <div className="text-2xl font-bold text-green-400">✓</div>
                        <div className="text-sm text-gray-300">Account Verified</div>
                    </div>
                    <div className="text-center p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                        <div className="text-2xl font-bold text-green-400">Auto</div>
                        <div className="text-sm text-gray-300">Payment Setup</div>
                    </div>
                    <div className="text-center p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                        <div className="text-2xl font-bold text-green-400">0</div>
                        <div className="text-sm text-gray-300">Pending Issues</div>
                    </div>
                </div>
            </div>

            {/* Bank Details */}
            <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                    <div className="w-1 h-6 bg-gradient-to-b from-[#eba312] to-[#d4941a] rounded-full mr-3"></div>
                    Bank Account Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <BankField 
                        icon={<CreditCard size={16} className="text-[#eba312]" />}
                        label="Account Holder's Name"
                        value={bankData.accountHolderName}
                        field="accountHolderName"
                    />
                    
                    <BankField 
                        icon={<CreditCard size={16} className="text-[#eba312]" />}
                        label="Account Number"
                        value={bankData.accountNumber}
                        field="accountNumber"
                    />
                    
                    <BankField 
                        icon={<Building size={16} className="text-[#eba312]" />}
                        label="Bank Name"
                        value={bankData.bankName}
                        field="bankName"
                    />
                    
                    <BankField 
                        icon={<MapPin size={16} className="text-[#eba312]" />}
                        label="Bank Branch"
                        value={bankData.branchName}
                        field="branchName"
                    />
                    
                    <BankField 
                        icon={<Landmark size={16} className="text-[#eba312]" />}
                        label="IFSC Code"
                        value={bankData.ifscCode}
                        field="ifscCode"
                    />
                    
                    <BankField 
                        icon={<FileText size={16} className="text-[#eba312]" />}
                        label="Cheque Copy"
                        value={bankData.chequeCopy}
                        field="chequeCopy"
                        editable={false}
                        isFile={true}
                    />
                </div>
            </div>

            {/* Payment Schedule & Info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Payment Schedule */}
                <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                        <div className="w-1 h-6 bg-gradient-to-b from-[#eba312] to-[#d4941a] rounded-full mr-3"></div>
                        Payment Schedule
                    </h3>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
                            <span className="text-gray-300">Payment Frequency</span>
                            <span className="text-[#eba312] font-medium">Monthly</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
                            <span className="text-gray-300">Next Payment</span>
                            <span className="text-white">15th Jan 2025</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
                            <span className="text-gray-300">Processing Time</span>
                            <span className="text-white">2-3 Business Days</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                            <span className="text-gray-300">Auto Payment</span>
                            <span className="text-green-400">✓ Enabled</span>
                        </div>
                    </div>
                </div>

                {/* Important Information */}
                <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                        <div className="w-1 h-6 bg-gradient-to-b from-[#eba312] to-[#d4941a] rounded-full mr-3"></div>
                        Important Information
                    </h3>
                    <div className="space-y-3 text-sm text-gray-300">
                        <div>
                            <h4 className="font-semibold text-[#eba312] mb-1">Security:</h4>
                            <p>Your bank details are encrypted and securely stored. We never store your complete account number.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-[#eba312] mb-1">Payments:</h4>
                            <p>Earnings are automatically transferred to your account on the 15th of each month.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-[#eba312] mb-1">Support:</h4>
                            <p>Contact our support team for any payment-related queries or issues.</p>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default BankDetails;