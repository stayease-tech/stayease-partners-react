import { useNavigate } from "react-router-dom";
import { Building2, Shield, Landmark, User, TrendingUp, BarChart3 } from "lucide-react";
import MainLayout from "../components/layout/MainLayout";

function Home() {
    const navigate = useNavigate();

    const dashboardCards = [
        {
            title: "Total Properties",
            value: "2",
            icon: <Building2 size={24} />,
            path: "/partners/partners-properties",
            description: "Active listings",
            color: "from-[#eba312] to-[#d4941a]",
            bgColor: "bg-gradient-to-br from-[#eba312]/10 to-[#d4941a]/10",
            borderColor: "border-[#eba312]/30",
            textColor: "text-[#eba312]"
        },
        {
            title: "KYC Details",
            value: "Verified",
            icon: <Shield size={24} />,
            path: "/partners/partners-kyc-details",
            description: "Document status",
            color: "from-green-500 to-emerald-600",
            bgColor: "bg-gradient-to-br from-green-500/10 to-emerald-600/10",
            borderColor: "border-green-500/30",
            textColor: "text-green-500"
        },
        {
            title: "Bank Details",
            value: "Active",
            icon: <Landmark size={24} />,
            path: "/partners/partners-bank-details",
            description: "Payment setup",
            color: "from-blue-500 to-blue-600",
            bgColor: "bg-gradient-to-br from-blue-500/10 to-blue-600/10",
            borderColor: "border-blue-500/30",
            textColor: "text-blue-500"
        },
        {
            title: "Profile",
            value: "Complete",
            icon: <User size={24} />,
            path: "/partners/partners-owner-details",
            description: "Account information",
            color: "from-purple-500 to-purple-600",
            bgColor: "bg-gradient-to-br from-purple-500/10 to-purple-600/10",
            borderColor: "border-purple-500/30",
            textColor: "text-purple-500"
        }
    ];

    const statsCards = [
        {
            title: "Monthly Revenue",
            value: "₹24,000",
            change: "+12%",
            icon: <TrendingUp size={20} />,
            positive: true
        },
        {
            title: "Occupancy Rate",
            value: "85%",
            change: "+5%",
            icon: <BarChart3 size={20} />,
            positive: true
        }
    ];

    return (
        <MainLayout 
            title="Welcome Back, Jibin!"
            description="Here's an overview of your property management dashboard"
        >
            {/* Date Display */}
            <div className="flex justify-end mb-8">
                <div className="text-sm text-gray-400">
                    {new Date().toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                    })}
                </div>
            </div>

            {/* Quick Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {statsCards.map((stat, index) => (
                    <div 
                        key={index}
                        className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-xl p-4 transition-all duration-300 hover:border-[#eba312]/30 hover:shadow-lg hover:shadow-[#eba312]/10"
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
                                stat.positive 
                                    ? 'bg-green-500/20 text-green-400' 
                                    : 'bg-red-500/20 text-red-400'
                            }`}>
                                {stat.icon}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Dashboard Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
                {dashboardCards.map((card, index) => (
                    <div 
                        key={index}
                        onClick={() => navigate(card.path)}
                        className={`
                            group cursor-pointer transition-all duration-300 
                            bg-gradient-to-br from-gray-900/80 to-gray-800/80 
                            backdrop-blur-xl border rounded-xl p-6
                            hover:scale-105 hover:shadow-2xl hover:-translate-y-1
                            ${card.borderColor} ${card.bgColor}
                            hover:border-[#eba312]/50 hover:shadow-[#eba312]/20
                            relative overflow-hidden
                        `}
                    >
                        {/* Background gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        <div className="relative z-10">
                            {/* Icon */}
                            <div className={`
                                inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4
                                bg-gradient-to-br ${card.color} shadow-lg
                                group-hover:scale-110 transition-transform duration-300
                            `}>
                                <span className="text-white">
                                    {card.icon}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="space-y-2">
                                <h3 className="text-lg font-semibold text-white group-hover:text-[#eba312] transition-colors duration-300">
                                    {card.title}
                                </h3>
                                
                                <div className="flex items-center justify-between">
                                    <span className={`text-2xl font-bold ${card.textColor}`}>
                                        {card.value}
                                    </span>
                                </div>
                                
                                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                                    {card.description}
                                </p>
                            </div>

                            {/* Hover indicator */}
                            <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-2 h-2 bg-[#eba312] rounded-full animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Quick Actions Section */}
            <div className="mt-12">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                    <div className="w-1 h-6 bg-gradient-to-b from-[#eba312] to-[#d4941a] rounded-full mr-3"></div>
                    Quick Actions
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <button 
                        onClick={() => navigate("/partners/partners-properties")}
                        className="group p-4 bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl border border-gray-700/50 rounded-lg hover:border-[#eba312]/30 transition-all duration-300 text-left"
                    >
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-[#eba312]/20 rounded-lg group-hover:bg-[#eba312]/30 transition-colors duration-300">
                                <Building2 size={16} className="text-[#eba312]" />
                            </div>
                            <div>
                                <p className="text-white font-medium">View All Properties</p>
                                <p className="text-gray-400 text-sm">Manage your listings</p>
                            </div>
                        </div>
                    </button>

                    <button 
                        onClick={() => navigate("/partners/partners-kyc-details")}
                        className="group p-4 bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl border border-gray-700/50 rounded-lg hover:border-green-500/30 transition-all duration-300 text-left"
                    >
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-green-500/20 rounded-lg group-hover:bg-green-500/30 transition-colors duration-300">
                                <Shield size={16} className="text-green-500" />
                            </div>
                            <div>
                                <p className="text-white font-medium">Update KYC</p>
                                <p className="text-gray-400 text-sm">Verify documents</p>
                            </div>
                        </div>
                    </button>

                    <button 
                        onClick={() => navigate("/partners/partners-bank-details")}
                        className="group p-4 bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl border border-gray-700/50 rounded-lg hover:border-blue-500/30 transition-all duration-300 text-left"
                    >
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors duration-300">
                                <Landmark size={16} className="text-blue-500" />
                            </div>
                            <div>
                                <p className="text-white font-medium">Payment Settings</p>
                                <p className="text-gray-400 text-sm">Manage bank details</p>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </MainLayout>
    );
}

export default Home;