import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import { 
    User, 
    BarChart3, 
    Package,
    Shield
} from 'lucide-react';

function Login() {
    const [isSendingOtp, setIsSendingOtp] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [otpSent, setOtpSent] = useState(false);
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        ownerPhone: "",
        otp: ""
    })

    const loginHandleChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSendOTP = async () => {
        setIsSendingOtp(true)
        try {
            const response = {
                data: {
                    message: "OTP sent successfully!"
                }
            }
            if (response.data.message === "OTP sent successfully!") {
                alert(response.data.message);
                setOtpSent(true);
            }
        } catch (error) {
            console.error("Error sending OTP:", error);
            alert("Error occurred while sending OTP");
        } finally {
            setIsSendingOtp(false);
        }
    };

    const verifyOtp = async () => {
        setIsSubmitting(true);
        try {
            alert("Login successful!");
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("phone", loginData.ownerPhone);
            navigate('/partners/partners-home')
        } catch (error) {
            alert("Network or server error: " + error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Why Choose Us Data
    const whyChooseUsData = [
        {
            id: 1,
            title: "Industry Expertise",
            description: "Experienced professionals with proven track record in co-living and homestay management.",
            icon: <User className="w-5 h-5" />,
        },
        {
            id: 2,
            title: "Data & Tech Integration", 
            description: "Targeted advertising and data-driven platforms to reach ideal audiences.",
            icon: <BarChart3 className="w-5 h-5" />,
        },
        {
            id: 3,
            title: "Enhanced Returns",
            description: "Data analytics to optimize rental rates and maximize revenue potential.",
            icon: <Package className="w-5 h-5" />,
        }
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 100
            }
        }
    };

    const cardVariants = {
        hidden: { 
            scale: 0.95, 
            opacity: 0
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 100,
                duration: 0.5
            }
        },
        hover: {
            scale: 1.02,
            transition: {
                type: "spring",
                damping: 30,
                stiffness: 400
            }
        }
    };

    const buttonVariants = {
        idle: { scale: 1 },
        hover: { 
            scale: 1.05,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 400
            }
        },
        tap: { scale: 0.98 }
    };

    const floatingVariants = {
        animate: {
            y: [-10, 10, -10],
            x: [-5, 5, -5],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const pulseVariants = {
        animate: {
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.5, 0.3],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div className="h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden flex flex-col">
            {/* Background Image - Blurred */}
            <div className="absolute inset-0 z-0">
                <div 
                    className="w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('/image1.jpeg')`,
                        filter: 'blur(1.5px) brightness(0.3)',
                        transform: 'scale(1)'
                    }}
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden z-10">
                <motion.div 
                    className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-yellow-500/20 to-amber-600/20 rounded-full blur-3xl"
                    variants={pulseVariants}
                    animate="animate"
                />
                <motion.div 
                    className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-yellow-600/20 to-orange-500/20 rounded-full blur-3xl"
                    variants={pulseVariants}
                    animate="animate"
                    style={{ animationDelay: '1s' }}
                />
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 z-10">
                {[...Array(8)].map((_, i) => (
                    <motion.div 
                        key={i}
                        className="absolute w-1 h-1 bg-yellow-400/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        variants={floatingVariants}
                        animate="animate"
                        transition={{
                            delay: Math.random() * 3,
                            duration: 4 + Math.random() * 2
                        }}
                    />
                ))}
            </div>

            {/* Header with Logo */}
            <motion.div 
                className="relative z-20 flex justify-center pt-4 pb-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <img 
                    alt="StayEase Logo" 
                    src="/Logo.webp"
                    className="h-12 lg:h-16 object-contain"
                    loading="lazy" 
                />
            </motion.div>

            {/* Main Content Container */}
            <div className="relative z-20 flex-1 flex items-center justify-center px-4 lg:px-8">
                <div className="w-full max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center h-full">
                        
                        {/* Left Side - Login Form */}
                        <motion.div 
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="flex justify-center lg:justify-end"
                        >
                            <div className="w-full max-w-md">
                                {/* Login Card */}
                                <motion.div 
                                    className="bg-gray-900/90 backdrop-blur-xl border border-yellow-500/20 rounded-2xl p-6 shadow-2xl"
                                    variants={cardVariants}
                                    initial="hidden"
                                    animate="visible"
                                    whileHover="hover"
                                >
                                    {/* Header */}
                                    <motion.div 
                                        className="text-center mb-6"
                                        variants={itemVariants}
                                    >
                                        <motion.div 
                                            className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl mb-3 shadow-lg"
                                            whileHover={{ 
                                                rotate: 360,
                                                scale: 1.1
                                            }}
                                            transition={{ 
                                                type: "spring", 
                                                damping: 15,
                                                stiffness: 200
                                            }}
                                        >
                                            <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                            </svg>
                                        </motion.div>
                                        <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                                            Welcome Back!
                                        </h1>
                                        <p className="text-gray-400 mt-2 text-sm">Sign in to access your partner dashboard</p>
                                    </motion.div>

                                    {/* Form Fields */}
                                    <motion.div 
                                        className="space-y-4"
                                        variants={itemVariants}
                                    >
                                        {/* Phone Number Input */}
                                        <motion.div 
                                            className="space-y-2"
                                            layout
                                        >
                                            <label htmlFor="ownerPhone" className="text-sm font-medium text-yellow-400 flex items-center gap-2">
                                                <motion.svg 
                                                    className="w-4 h-4" 
                                                    fill="currentColor" 
                                                    viewBox="0 0 20 20"
                                                    whileHover={{ rotate: 15 }}
                                                    transition={{ type: "spring", damping: 20 }}
                                                >
                                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                                </motion.svg>
                                                Phone Number
                                            </label>
                                            <div className="flex gap-2">
                                                <motion.div 
                                                    className="relative flex-1"
                                                    whileFocus={{ scale: 1.02 }}
                                                    transition={{ type: "spring", damping: 20 }}
                                                >
                                                    <input
                                                        type="tel"
                                                        id="ownerPhone"
                                                        value={loginData.ownerPhone}
                                                        onChange={loginHandleChange}
                                                        className="w-full px-4 py-2.5 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 focus:outline-none transition-all duration-300 text-sm"
                                                        name="ownerPhone"
                                                        placeholder="Enter your phone number"
                                                        required
                                                        disabled={otpSent}
                                                    />
                                                    <AnimatePresence>
                                                        {otpSent && (
                                                            <motion.div 
                                                                className="absolute inset-y-0 right-3 flex items-center"
                                                                initial={{ scale: 0, opacity: 0 }}
                                                                animate={{ scale: 1, opacity: 1 }}
                                                                exit={{ scale: 0, opacity: 0 }}
                                                                transition={{ type: "spring", damping: 20 }}
                                                            >
                                                                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                                </svg>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </motion.div>

                                                <motion.button
                                                    onClick={handleSendOTP}
                                                    disabled={isSendingOtp || otpSent || !loginData.ownerPhone}
                                                    className="px-4 py-2.5 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-black font-medium rounded-lg transition-all duration-300 shadow-lg disabled:shadow-none whitespace-nowrap text-sm"
                                                    variants={buttonVariants}
                                                    initial="idle"
                                                    whileHover={!isSendingOtp && !otpSent && loginData.ownerPhone ? "hover" : "idle"}
                                                    whileTap={!isSendingOtp && !otpSent && loginData.ownerPhone ? "tap" : "idle"}
                                                >
                                                    <AnimatePresence mode="wait">
                                                        {isSendingOtp ? (
                                                            <motion.div 
                                                                key="sending"
                                                                className="flex items-center gap-2"
                                                                initial={{ opacity: 0 }}
                                                                animate={{ opacity: 1 }}
                                                                exit={{ opacity: 0 }}
                                                            >
                                                                <motion.svg 
                                                                    className="w-4 h-4" 
                                                                    fill="none" 
                                                                    viewBox="0 0 24 24"
                                                                    animate={{ rotate: 360 }}
                                                                    transition={{ 
                                                                        duration: 1, 
                                                                        repeat: Infinity, 
                                                                        ease: "linear" 
                                                                    }}
                                                                >
                                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                                </motion.svg>
                                                                <span>Sending...</span>
                                                            </motion.div>
                                                        ) : otpSent ? (
                                                            <motion.span
                                                                key="sent"
                                                                initial={{ opacity: 0, scale: 0.8 }}
                                                                animate={{ opacity: 1, scale: 1 }}
                                                                exit={{ opacity: 0, scale: 0.8 }}
                                                            >
                                                                Sent ✓
                                                            </motion.span>
                                                        ) : (
                                                            <motion.span
                                                                key="send"
                                                                initial={{ opacity: 0 }}
                                                                animate={{ opacity: 1 }}
                                                                exit={{ opacity: 0 }}
                                                            >
                                                                Send OTP
                                                            </motion.span>
                                                        )}
                                                    </AnimatePresence>
                                                </motion.button>
                                            </div>
                                        </motion.div>

                                        {/* OTP Input - Animated Entry */}
                                        <AnimatePresence>
                                            {otpSent && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0, y: -20 }}
                                                    animate={{ opacity: 1, height: "auto", y: 0 }}
                                                    exit={{ opacity: 0, height: 0, y: -20 }}
                                                    transition={{ 
                                                        type: "spring", 
                                                        damping: 20, 
                                                        stiffness: 100,
                                                        duration: 0.5
                                                    }}
                                                    className="space-y-2"
                                                >
                                                    <label htmlFor="otp" className="text-sm font-medium text-yellow-400 flex items-center gap-2">
                                                        <motion.svg 
                                                            className="w-4 h-4" 
                                                            fill="currentColor" 
                                                            viewBox="0 0 20 20"
                                                            whileHover={{ rotate: 15 }}
                                                            transition={{ type: "spring", damping: 20 }}
                                                        >
                                                            <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
                                                        </motion.svg>
                                                        Verification Code
                                                    </label>
                                                    <motion.input
                                                        type="text"
                                                        id="otp"
                                                        value={loginData.otp}
                                                        onChange={loginHandleChange}
                                                        className="w-full px-4 py-2.5 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 focus:outline-none transition-all duration-300 text-center text-lg tracking-widest"
                                                        name="otp"
                                                        placeholder="Enter 6-digit OTP"
                                                        maxLength="6"
                                                        required
                                                        initial={{ scale: 0.95 }}
                                                        animate={{ scale: 1 }}
                                                        whileFocus={{ scale: 1.02 }}
                                                        transition={{ type: "spring", damping: 20 }}
                                                    />
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        {/* Login Button */}
                                        <motion.button
                                            onClick={verifyOtp}
                                            disabled={isSubmitting || !loginData.otp || !otpSent}
                                            className="w-full py-3 px-6 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-black font-bold text-base rounded-lg transition-all duration-300 shadow-lg hover:shadow-yellow-500/25 disabled:shadow-none relative overflow-hidden"
                                            variants={buttonVariants}
                                            initial="idle"
                                            whileHover={!isSubmitting && loginData.otp && otpSent ? "hover" : "idle"}
                                            whileTap={!isSubmitting && loginData.otp && otpSent ? "tap" : "idle"}
                                            layout
                                        >
                                            <AnimatePresence mode="wait">
                                                {isSubmitting ? (
                                                    <motion.div 
                                                        key="submitting"
                                                        className="flex items-center justify-center gap-3"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        exit={{ opacity: 0 }}
                                                    >
                                                        <motion.svg 
                                                            className="w-5 h-5 text-black" 
                                                            fill="none" 
                                                            viewBox="0 0 24 24"
                                                            animate={{ rotate: 360 }}
                                                            transition={{ 
                                                                duration: 1, 
                                                                repeat: Infinity, 
                                                                ease: "linear" 
                                                            }}
                                                        >
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                        </motion.svg>
                                                        <span>Signing In...</span>
                                                    </motion.div>
                                                ) : (
                                                    <motion.span
                                                        key="signin"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        exit={{ opacity: 0 }}
                                                    >
                                                        Sign In to Dashboard
                                                    </motion.span>
                                                )}
                                            </AnimatePresence>
                                        </motion.button>

                                        {/* Resend OTP */}
                                        <AnimatePresence>
                                            {otpSent && (
                                                <motion.div 
                                                    className="text-center"
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                    transition={{ delay: 0.2 }}
                                                >
                                                    <motion.button
                                                        onClick={() => {
                                                            setOtpSent(false);
                                                            setLoginData(prev => ({ ...prev, otp: "" }));
                                                        }}
                                                        className="text-sm text-yellow-400 hover:text-yellow-300 transition-colors duration-300 underline underline-offset-2"
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        Change phone number
                                                    </motion.button>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Right Side - Why Choose Us Section (Desktop Only) */}
                        <div className="hidden lg:flex justify-start">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="w-full max-w-lg"
                            >
                                {/* Section Header */}
                                <motion.div 
                                    className="mb-8"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6, duration: 0.6 }}
                                >
                                    <div className="flex items-center mb-4">
                                        <div>
                                            <h2 className="text-2xl font-bold">
                                                <span className="text-white">WHY </span>
                                                <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
                                                    CHOOSE US?
                                                </span>
                                            </h2>
                                            <div className="w-12 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 mt-2 rounded-full"></div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Feature Cards - Compact Version */}
                                <div className="space-y-4">
                                    {whyChooseUsData.map((feature, index) => (
                                        <motion.div
                                            key={feature.id}
                                            initial={{ opacity: 0, x: 30 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.8 + (index * 0.1), duration: 0.5 }}
                                            whileHover={{ scale: 1.02, x: 5 }}
                                            className="group cursor-pointer"
                                        >
                                            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/20 rounded-xl p-5 relative overflow-hidden transition-all duration-300 hover:border-yellow-500/30 hover:bg-gray-900/50">
                                                {/* Background Gradient */}
                                                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-amber-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                
                                                {/* Content */}
                                                <div className="relative z-10 flex items-center space-x-4">
                                                    {/* Icon Circle */}
                                                    <motion.div 
                                                        className="flex-shrink-0"
                                                        whileHover={{ rotate: 15 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <div className="w-12 h-12 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-full flex items-center justify-center border border-gray-700/30 group-hover:border-yellow-500/30 transition-all duration-300">
                                                            <div className="text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
                                                                {feature.icon}
                                                            </div>
                                                        </div>
                                                    </motion.div>

                                                    {/* Text Content */}
                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex items-center mb-2">
                                                            <span className="text-yellow-400 font-bold text-sm mr-2">
                                                                {feature.id}.
                                                            </span>
                                                            <h3 className="text-lg font-bold text-white group-hover:text-yellow-100 transition-colors duration-300">
                                                                {feature.title}
                                                            </h3>
                                                        </div>
                                                        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                                            {feature.description}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Decorative Element */}
                                                <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-yellow-400/30 rounded-full group-hover:bg-yellow-400/60 transition-colors duration-300"></div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login