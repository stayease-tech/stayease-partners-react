import { useState } from 'react';
import { User, Phone, Mail, MapPin, Calendar, Users, Edit3, Save, X } from "lucide-react";
import MainLayout from '../components/layout/MainLayout';

// Move ProfileField component outside to prevent recreation on each render
const ProfileField = ({ icon, label, value, field, type = "text", editable = true, isEditing, onInputChange }) => (
    <div className="group bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl border border-gray-700/50 rounded-xl p-4 hover:border-[#eba312]/30 transition-all duration-300">
        <div className="flex items-start space-x-3">
            <div className="p-2 bg-[#eba312]/20 rounded-lg group-hover:bg-[#eba312]/30 transition-colors duration-300">
                {icon}
            </div>
            <div className="flex-1 min-w-0">
                <label className="text-sm font-medium text-[#eba312] block mb-2">
                    {label}
                </label>
                {isEditing && editable ? (
                    type === "select" ? (
                        <select
                            value={value}
                            onChange={(e) => onInputChange(field, e.target.value)}
                            className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:border-[#eba312] focus:ring-2 focus:ring-[#eba312]/20 focus:outline-none transition-all duration-300"
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    ) : type === "textarea" ? (
                        <textarea
                            value={value}
                            onChange={(e) => onInputChange(field, e.target.value)}
                            rows={2}
                            className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-[#eba312] focus:ring-2 focus:ring-[#eba312]/20 focus:outline-none transition-all duration-300 resize-none"
                            placeholder={`Enter your ${label.toLowerCase()}`}
                        />
                    ) : (
                        <input
                            type={type}
                            value={value}
                            onChange={(e) => onInputChange(field, e.target.value)}
                            className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-[#eba312] focus:ring-2 focus:ring-[#eba312]/20 focus:outline-none transition-all duration-300"
                            placeholder={`Enter your ${label.toLowerCase()}`}
                        />
                    )
                ) : (
                    <div className="text-white text-lg break-words">
                        {type === "date" ? new Date(value).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                        }) : value}
                    </div>
                )}
            </div>
        </div>
    </div>
);

function OwnerDetails({ isExpanded, setIsExpanded }) {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: "Jibin Roy",
        phone: "8111849588",
        email: "jibin@gmail.com",
        address: "qwertyasd",
        dateOfBirth: "1997-08-26",
        gender: "Male"
    });

    const [originalData, setOriginalData] = useState({ ...formData });

    const handleEdit = () => {
        setIsEditing(true);
        setOriginalData({ ...formData });
    };

    const handleSave = () => {
        // Here you would typically make an API call to save the data
        setIsEditing(false);
        // Show success message
    };

    const handleCancel = () => {
        setFormData({ ...originalData });
        setIsEditing(false);
    };

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const profileStats = [
        {
            label: "Account Type",
            value: "Partner",
            icon: <Users size={16} className="text-[#eba312]" />
        },
        {
            label: "Member Since",
            value: "August 2023",
            icon: <Calendar size={16} className="text-[#eba312]" />
        },
        {
            label: "Properties",
            value: "2 Active",
            icon: <User size={16} className="text-[#eba312]" />
        }
    ];

    return (
        <MainLayout 
            title="Profile Settings"
            description="Manage your personal information and account settings"
        >
            {/* Header Section */}
            <div className="flex space-x-3 mb-2">
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
                        <span>Edit Profile</span>
                    </button>
                )}
            </div>

            {/* Profile Header Card */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 mb-8 hover:border-[#eba312]/30 transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <div className="relative">
                        <div className="w-20 h-20 bg-gradient-to-br from-[#eba312] to-[#d4941a] rounded-full flex items-center justify-center shadow-xl">
                            <User size={32} className="text-white" />
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-gray-900 flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                    </div>
                    
                    <div className="flex-1 text-center sm:text-left">
                        <h2 className="text-2xl font-bold text-white">{formData.name}</h2>
                        <p className="text-gray-400">{formData.email}</p>
                        <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-2">
                            {profileStats.map((stat, index) => (
                                <div key={index} className="flex items-center space-x-1 bg-gray-800/50 px-3 py-1 rounded-full">
                                    {stat.icon}
                                    <span className="text-sm text-gray-300">{stat.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Personal Information */}
            <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                    <div className="w-1 h-6 bg-gradient-to-b from-[#eba312] to-[#d4941a] rounded-full mr-3"></div>
                    Personal Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ProfileField 
                        icon={<User size={16} className="text-[#eba312]" />}
                        label="Full Name"
                        value={formData.name}
                        field="name"
                        isEditing={isEditing}
                        onInputChange={handleInputChange}
                    />
                    
                    <ProfileField 
                        icon={<Phone size={16} className="text-[#eba312]" />}
                        label="Phone Number"
                        value={formData.phone}
                        field="phone"
                        type="tel"
                        isEditing={isEditing}
                        onInputChange={handleInputChange}
                    />
                    
                    <ProfileField 
                        icon={<Mail size={16} className="text-[#eba312]" />}
                        label="Email Address"
                        value={formData.email}
                        field="email"
                        type="email"
                        isEditing={isEditing}
                        onInputChange={handleInputChange}
                    />
                    
                    <ProfileField 
                        icon={<Calendar size={16} className="text-[#eba312]" />}
                        label="Date of Birth"
                        value={formData.dateOfBirth}
                        field="dateOfBirth"
                        type="date"
                        isEditing={isEditing}
                        onInputChange={handleInputChange}
                    />
                    
                    <ProfileField 
                        icon={<Users size={16} className="text-[#eba312]" />}
                        label="Gender"
                        value={formData.gender}
                        field="gender"
                        type="select"
                        isEditing={isEditing}
                        onInputChange={handleInputChange}
                    />
                    
                    <ProfileField 
                        icon={<MapPin size={16} className="text-[#eba312]" />}
                        label="Address"
                        value={formData.address}
                        field="address"
                        type="textarea"
                        isEditing={isEditing}
                        onInputChange={handleInputChange}
                    />
                </div>
            </div>

            {/* Account Security */}
            <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                    <div className="w-1 h-6 bg-gradient-to-b from-[#eba312] to-[#d4941a] rounded-full mr-3"></div>
                    Account Security
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <h4 className="font-semibold text-[#eba312]">Security Status</h4>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <span className="text-gray-300">Phone Verified</span>
                                <span className="text-green-400 text-sm">✓ Verified</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-300">Email Verified</span>
                                <span className="text-green-400 text-sm">✓ Verified</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-300">KYC Completed</span>
                                <span className="text-green-400 text-sm">✓ Completed</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="space-y-4">
                        <h4 className="font-semibold text-[#eba312]">Quick Actions</h4>
                        <div className="space-y-2">
                            <button className="w-full text-left px-3 py-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-all duration-300 text-gray-300 hover:text-[#eba312] text-sm">
                                Change Password
                            </button>
                            <button className="w-full text-left px-3 py-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-all duration-300 text-gray-300 hover:text-[#eba312] text-sm">
                                Update Notifications
                            </button>
                            <button className="w-full text-left px-3 py-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-all duration-300 text-gray-300 hover:text-[#eba312] text-sm">
                                Privacy Settings
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default OwnerDetails;