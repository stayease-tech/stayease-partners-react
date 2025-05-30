import { useState } from 'react';
import Sidebar from "../components/global-components/Sidebar";
import Navbar from "../components/global-components/Navbar";
import { 
    Building2, 
    MapPin, 
    IndianRupee, 
    FileText, 
    Shield, 
    Zap, 
    Droplets, 
    Receipt,
    ChevronRight,
    ChevronLeft,
    Home,
    Users,
    Calendar,
    CheckCircle,
    ArrowLeft,
    Edit3,
    Download,
    Eye
} from "lucide-react";
import { useNavigate } from 'react-router-dom';

function PropertyDetails({ isExpanded, setIsExpanded }) {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState('propertyData');

    const dataHandleToggle = (step) => {
        setCurrentStep(step);
    };

    const steps = [
        { id: 'propertyData', label: 'Property Data', icon: <Building2 size={16} /> },
        { id: 'propertyKyc', label: 'Property KYC', icon: <Shield size={16} /> }
    ];

    const getCurrentStepIndex = () => {
        return steps.findIndex(step => step.id === currentStep);
    };

    const goToNext = () => {
        const currentIndex = getCurrentStepIndex();
        if (currentIndex < steps.length - 1) {
            setCurrentStep(steps[currentIndex + 1].id);
        }
    };

    const goToPrev = () => {
        const currentIndex = getCurrentStepIndex();
        if (currentIndex > 0) {
            setCurrentStep(steps[currentIndex - 1].id);
        }
    };

    const PropertyDataCard = ({ icon, title, value, className = "" }) => (
        <div className={`bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl border border-gray-700/50 rounded-xl p-4 hover:border-[#eba312]/30 transition-all duration-300 ${className}`}>
            <div className="flex items-start space-x-3">
                <div className="p-2 bg-[#eba312]/20 rounded-lg flex-shrink-0">
                    {icon}
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-400 font-medium">{title}</p>
                    <p className="text-white font-semibold mt-1 break-words">{value || 'Not specified'}</p>
                </div>
            </div>
        </div>
    );

    const DocumentCard = ({ icon, title, fileName, category }) => (
        <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl border border-gray-700/50 rounded-xl p-4 hover:border-[#eba312]/30 transition-all duration-300 group">
            <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3 flex-1 min-w-0">
                    <div className="p-2 bg-[#eba312]/20 rounded-lg flex-shrink-0 group-hover:bg-[#eba312]/30 transition-colors duration-300">
                        {icon}
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-400 font-medium">{title}</p>
                        <p className="text-white font-semibold mt-1 break-words">{fileName}</p>
                        {category && (
                            <span className="inline-block mt-2 px-2 py-1 bg-[#eba312]/20 text-[#eba312] rounded-md text-xs font-medium">
                                {category}
                            </span>
                        )}
                    </div>
                </div>
                <div className="flex space-x-2 ml-2">
                    <button className="p-2 bg-gray-800/50 hover:bg-[#eba312]/20 text-gray-400 hover:text-[#eba312] rounded-lg transition-all duration-300 border border-gray-700/50 hover:border-[#eba312]/30">
                        <Eye size={14} />
                    </button>
                    <button className="p-2 bg-gray-800/50 hover:bg-[#eba312]/20 text-gray-400 hover:text-[#eba312] rounded-lg transition-all duration-300 border border-gray-700/50 hover:border-[#eba312]/30">
                        <Download size={14} />
                    </button>
                </div>
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
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
                        <div className="flex items-center space-x-4">
                            <button 
                                onClick={() => navigate('/partners/partners-properties')}
                                className="p-2 bg-gray-900/50 hover:bg-[#eba312]/20 border border-gray-700/50 hover:border-[#eba312]/30 rounded-lg text-gray-400 hover:text-[#eba312] transition-all duration-300"
                            >
                                <ArrowLeft size={18} />
                            </button>
                            <div>
                                <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#eba312] via-yellow-400 to-[#eba312] bg-clip-text text-transparent">
                                    Property Details
                                </h1>
                                <p className="text-gray-400 text-sm lg:text-base">
                                    Stayease Harmonia - Complete Information
                                </p>
                            </div>
                        </div>
                        
                        <button className="mt-4 sm:mt-0 px-6 py-3 bg-gradient-to-r from-[#eba312] to-[#d4941a] hover:from-[#d4941a] hover:to-[#eba312] text-black font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-[#eba312]/25 hover:scale-105 flex items-center space-x-2">
                            <Edit3 size={18} />
                            <span>Edit Property</span>
                        </button>
                    </div>

                    {/* Step Navigation */}
                    <div className="mb-8">
                        <div className="flex items-center space-x-1 bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl border border-gray-700/50 rounded-xl p-1">
                            {steps.map((step, index) => (
                                <button
                                    key={step.id}
                                    onClick={() => setCurrentStep(step.id)}
                                    className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg transition-all duration-300 flex-1 ${
                                        currentStep === step.id
                                            ? 'bg-[#eba312] text-black shadow-md'
                                            : 'text-gray-400 hover:text-[#eba312] hover:bg-gray-800/50'
                                    }`}
                                >
                                    <span className={`transition-colors duration-300 ${currentStep === step.id ? 'text-black' : 'text-[#eba312]'}`}>
                                        {step.icon}
                                    </span>
                                    <span className="font-medium text-sm">{step.label}</span>
                                    {currentStep === step.id && (
                                        <CheckCircle size={14} className="ml-auto" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Property Data Step */}
                    {currentStep === 'propertyData' && (
                        <div className="space-y-8">
                            {/* Basic Information */}
                            <div>
                                <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                                    <div className="w-1 h-6 bg-gradient-to-b from-[#eba312] to-[#d4941a] rounded-full mr-3"></div>
                                    Basic Information
                                </h2>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <PropertyDataCard
                                        icon={<Building2 size={16} className="text-[#eba312]" />}
                                        title="Room Type"
                                        value="Stayease Harmonia"
                                        className="md:col-span-2 lg:col-span-1"
                                    />
                                    <PropertyDataCard
                                        icon={<Home size={16} className="text-[#eba312]" />}
                                        title="Property Type"
                                        value="PG/Hostel"
                                    />
                                    <PropertyDataCard
                                        icon={<MapPin size={16} className="text-[#eba312]" />}
                                        title="Door/Building"
                                        value="11/12"
                                    />
                                </div>
                            </div>

                            {/* Location Details */}
                            <div>
                                <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                                    <div className="w-1 h-6 bg-gradient-to-b from-[#eba312] to-[#d4941a] rounded-full mr-3"></div>
                                    Location Details
                                </h2>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <PropertyDataCard
                                        icon={<MapPin size={16} className="text-[#eba312]" />}
                                        title="Street Address"
                                        value="Virata Nagar"
                                        className="md:col-span-2"
                                    />
                                    <PropertyDataCard
                                        icon={<MapPin size={16} className="text-[#eba312]" />}
                                        title="Area"
                                        value="FED7587"
                                    />
                                    <PropertyDataCard
                                        icon={<MapPin size={16} className="text-[#eba312]" />}
                                        title="Landmark"
                                        value=""
                                    />
                                    <PropertyDataCard
                                        icon={<MapPin size={16} className="text-[#eba312]" />}
                                        title="State"
                                        value="Karnataka"
                                    />
                                    <PropertyDataCard
                                        icon={<MapPin size={16} className="text-[#eba312]" />}
                                        title="City"
                                        value="Bengaluru"
                                    />
                                    <PropertyDataCard
                                        icon={<MapPin size={16} className="text-[#eba312]" />}
                                        title="Pincode"
                                        value="560068"
                                    />
                                </div>
                            </div>

                            {/* Pricing & Amenities */}
                            <div>
                                <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                                    <div className="w-1 h-6 bg-gradient-to-b from-[#eba312] to-[#d4941a] rounded-full mr-3"></div>
                                    Pricing & Amenities
                                </h2>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                    <PropertyDataCard
                                        icon={<IndianRupee size={16} className="text-[#eba312]" />}
                                        title="Monthly Rent"
                                        value="₹12,000"
                                    />
                                    <PropertyDataCard
                                        icon={<IndianRupee size={16} className="text-[#eba312]" />}
                                        title="Security Deposit"
                                        value="₹50,000"
                                    />
                                    <PropertyDataCard
                                        icon={<Calendar size={16} className="text-[#eba312]" />}
                                        title="Rent Free Period"
                                        value="1 Month"
                                    />
                                    <PropertyDataCard
                                        icon={<Users size={16} className="text-[#eba312]" />}
                                        title="Meal Type"
                                        value="Veg"
                                    />
                                </div>
                            </div>

                            {/* Navigation */}
                            <div className="flex justify-end">
                                <button
                                    onClick={goToNext}
                                    className="px-8 py-3 bg-gradient-to-r from-[#eba312] to-[#d4941a] hover:from-[#d4941a] hover:to-[#eba312] text-black font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-[#eba312]/25 flex items-center space-x-2"
                                >
                                    <span>Next: Property KYC</span>
                                    <ChevronRight size={18} />
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Property KYC Step */}
                    {currentStep === 'propertyKyc' && (
                        <div className="space-y-8">
                            {/* Property KYC Documents */}
                            <div>
                                <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                                    <div className="w-1 h-6 bg-gradient-to-b from-[#eba312] to-[#d4941a] rounded-full mr-3"></div>
                                    Property KYC Documents
                                </h2>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <DocumentCard
                                        icon={<FileText size={16} className="text-[#eba312]" />}
                                        title="Sale Deed"
                                        fileName="UdayveerPeetaniResume_4d7V7kQ.pdf"
                                        category="Legal"
                                    />
                                    <DocumentCard
                                        icon={<Zap size={16} className="text-[#eba312]" />}
                                        title="Electricity Bill"
                                        fileName="Company_-_Chocolatex_tZGzMrN.pdf"
                                        category="Utility"
                                    />
                                    <DocumentCard
                                        icon={<Receipt size={16} className="text-[#eba312]" />}
                                        title="Tax Receipt"
                                        fileName="Logo_5WdPC0y.pdf"
                                        category="Tax"
                                    />
                                    <DocumentCard
                                        icon={<Droplets size={16} className="text-[#eba312]" />}
                                        title="Water Bill"
                                        fileName="Jibin_VC_kmBQQ7k.pdf"
                                        category="Utility"
                                    />
                                </div>
                            </div>

                            {/* Supply Documents */}
                            <div>
                                <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                                    <div className="w-1 h-6 bg-gradient-to-b from-[#eba312] to-[#d4941a] rounded-full mr-3"></div>
                                    Supply Documents
                                </h2>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <DocumentCard
                                        icon={<FileText size={16} className="text-[#eba312]" />}
                                        title="Letter of Intent (LOI)"
                                        fileName="Rangayana_Theatre_Jf1787M.pdf"
                                        category="Legal"
                                    />
                                    <DocumentCard
                                        icon={<Shield size={16} className="text-[#eba312]" />}
                                        title="Agreement"
                                        fileName="JK_TC_ujyVzG6.pdf"
                                        category="Legal"
                                    />
                                </div>
                            </div>

                            {/* Building Details */}
                            <div>
                                <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                                    <div className="w-1 h-6 bg-gradient-to-b from-[#eba312] to-[#d4941a] rounded-full mr-3"></div>
                                    Building Specifications
                                </h2>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                    <PropertyDataCard
                                        icon={<Building2 size={16} className="text-[#eba312]" />}
                                        title="Number of Basements"
                                        value="1"
                                    />
                                    <PropertyDataCard
                                        icon={<Building2 size={16} className="text-[#eba312]" />}
                                        title="Number of Floors"
                                        value="2"
                                    />
                                    <PropertyDataCard
                                        icon={<Home size={16} className="text-[#eba312]" />}
                                        title="Number of Rooms"
                                        value="2"
                                    />
                                    <PropertyDataCard
                                        icon={<Users size={16} className="text-[#eba312]" />}
                                        title="Common Areas"
                                        value="2"
                                    />
                                </div>
                            </div>

                            {/* Navigation */}
                            <div className="flex justify-between">
                                <button
                                    onClick={goToPrev}
                                    className="px-8 py-3 bg-gray-900/50 hover:bg-gray-800/50 border border-gray-700/50 hover:border-[#eba312]/30 text-gray-300 hover:text-[#eba312] font-semibold rounded-xl transition-all duration-300 flex items-center space-x-2"
                                >
                                    <ChevronLeft size={18} />
                                    <span>Previous: Property Data</span>
                                </button>
                                
                                <button
                                    onClick={() => navigate('/partners/partners-properties')}
                                    className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/25 flex items-center space-x-2"
                                >
                                    <CheckCircle size={18} />
                                    <span>Complete Review</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PropertyDetails;