import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import { motion, AnimatePresence } from 'framer-motion';

function Login() {
    let publicUrl = process.env.PUBLIC_URL + '/';
    const [isScrolledUp, setIsScrolledUp] = useState(true);
    const [lastScrollPosition, setLastScrollPosition] = useState(0);
    const [isSendingOtp, setIsSendingOtp] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [otpSent, setOtpSent] = useState(false);
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        ownerPhone: "",
        otp: ""
    })

    const handleScroll = useCallback(() => {
        const currentScrollPosition = window.pageYOffset;

        if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 80) {
            setIsScrolledUp(false);
        } else if (currentScrollPosition < lastScrollPosition) {
            setIsScrolledUp(true);
        }

        setLastScrollPosition(currentScrollPosition)
    }, [lastScrollPosition])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [lastScrollPosition, handleScroll])

    const loginHandleChange = (e) => {
        const { name, value } = e.target;

        setLoginData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    const getCSRFToken = () => {
        return Cookies.get('csrftoken');
    }

    axios.defaults.headers.common['X-CSRFToken'] = getCSRFToken()

    const handleSendOTP = async () => {
        setIsSendingOtp(true)

        try {
            const response = await axios.post(
                "send-otp/",
                new URLSearchParams({ phone: loginData.ownerPhone }),
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }
            );

            if (response.data.message === "OTP sent successfully!") {
                alert(response.data.message);
                setOtpSent(true);
            } else if (response.data.message === "Phone number required!") {
                alert(response.data.message);
            }
            else if (response.data.message === "Phone Number not registered!") {
                alert(response.data.message);
            }
            else {
                alert("Failed to send OTP");
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
            const formData = new FormData();
            formData.append("phone", loginData.ownerPhone);
            formData.append("otp", loginData.otp);

            const response = await axios.post("verify-otp/", formData);

            if (response.data.message === "Login successful!") {
                alert(response.data.message);
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("phone", loginData.ownerPhone);
                navigate('/partners/partners-home')
            }
            if (response.data.message === "Phone number required!") {
                alert(response.data.message);
            }
            if (response.data.message === "Phone Number not registered!") {
                alert(response.data.message);
            }
            if (response.data.message === "OTP is required!") {
                alert(response.data.message);
            }
            if (response.data.message === "Invalid OTP!") {
                alert(response.data.message);
            }
        } catch (error) {
            if (error.response) {
                alert(error.response.data.error);
            } else {
                alert("Network or server error: " + error.message);
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
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
            scale: 0.8, 
            opacity: 0,
            rotateY: -15
        },
        visible: {
            scale: 1,
            opacity: 1,
            rotateY: 0,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 100,
                duration: 0.6
            }
        },
        hover: {
            scale: 1.02,
            rotateY: 2,
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
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const pulseVariants = {
        animate: {
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div 
                    className="absolute -top-40 -right-40 w-60 sm:w-80 h-60 sm:h-80 bg-gradient-to-br from-yellow-500/20 to-amber-600/20 rounded-full blur-3xl"
                    variants={pulseVariants}
                    animate="animate"
                />
                <motion.div 
                    className="absolute -bottom-40 -left-40 w-60 sm:w-80 h-60 sm:h-80 bg-gradient-to-br from-yellow-600/20 to-orange-500/20 rounded-full blur-3xl"
                    variants={pulseVariants}
                    animate="animate"
                    style={{ animationDelay: '1s' }}
                />
                <motion.div 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-full blur-3xl"
                    variants={pulseVariants}
                    animate="animate"
                    style={{ animationDelay: '0.5s' }}
                />
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0">
                {[...Array(15)].map((_, i) => (
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

            {/* Navigation Bar */}
            <motion.nav 
                className={`bg-black/80 backdrop-blur-md border-b border-yellow-500/20 text-white shadow-2xl fixed w-full top-0 z-[100]`}
                initial={{ y: -100, opacity: 0 }}
                animate={{ 
                    y: isScrolledUp ? 0 : -100, 
                    opacity: isScrolledUp ? 1 : 0 
                }}
                transition={{ 
                    type: "spring", 
                    damping: 20, 
                    stiffness: 100 
                }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 sm:h-20 items-center">
                        <motion.div 
                            className="flex items-center"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", damping: 20, stiffness: 400 }}
                        >
                            <img 
                                alt="StayEase Logo" 
                                src={publicUrl + "static/img/brand_logo/stayEase-Logo.webp"} 
                                className="h-12 sm:h-16 w-auto object-cover"
                                loading="lazy" 
                            />
                        </motion.div>
                    </div>
                </div>
            </motion.nav>

            {/* Main Content */}
            <motion.div 
                className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
                    {/* Login Card */}
                    <motion.div 
                        className="bg-gray-900/80 backdrop-blur-xl border border-yellow-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl"
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                    >
                        {/* Header */}
                        <motion.div 
                            className="text-center mb-6 sm:mb-8"
                            variants={itemVariants}
                        >
                            <motion.div 
                                className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 shadow-lg"
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
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                            </motion.div>
                            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                                Welcome Back!
                            </h1>
                            <p className="text-gray-400 mt-2 text-sm sm:text-base">Sign in to access your partner dashboard</p>
                        </motion.div>

                        {/* Form Fields */}
                        <motion.div 
                            className="space-y-4 sm:space-y-6"
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
                                <div className="flex flex-col sm:flex-row gap-3">
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
                                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 focus:outline-none transition-all duration-300 text-sm sm:text-base"
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
                                                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                    </svg>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>

                                    <motion.button
                                        onClick={handleSendOTP}
                                        disabled={isSendingOtp || otpSent || !loginData.ownerPhone}
                                        className="px-4 sm:px-6 py-3 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-black font-medium rounded-xl transition-all duration-300 shadow-lg disabled:shadow-none whitespace-nowrap text-sm sm:text-base"
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
                                                    <span className="hidden sm:inline">Sending...</span>
                                                    <span className="sm:hidden">...</span>
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
                                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 focus:outline-none transition-all duration-300 text-center text-lg tracking-widest"
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
                                className="w-full py-3 sm:py-4 px-6 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-black font-bold text-base sm:text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-yellow-500/25 disabled:shadow-none relative overflow-hidden"
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
                                                className="w-5 h-5 sm:w-6 sm:h-6 text-black" 
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
        </div>
    )
}

export default Login