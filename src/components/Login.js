import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

function Login() {
    let publicUrl = process.env.PUBLIC_URL + '/';
    const [isScrolledUp, setIsScrolledUp] = useState(true);
    const [lastScrollPosition, setLastScrollPosition] = useState(0);
    const [isSendingOtp, setIsSendingOtp] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
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

    return (
        <div className="lg:pb-2 lg:pt-[6rem]">
            <nav className={`bg-[#000000] border-b-2 border-[#eba312] text-white shadow fixed w-full top-0 z-[100] transition-opacity duration-300 ${isScrolledUp ? 'opacity-100' : 'opacity-0'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-20 items-center">
                        <div className="flex items-center">
                            <img alt="CompanyLogo" src={publicUrl + "static/img/brand_logo/stayEase-Logo.webp"} className="h-18 w-auto object-cover"
                                loading="lazy" />
                        </div>
                    </div>
                </div>
            </nav>

            <form className="w-[100%] lg:w-[50%] mx-auto lg:mt-[3rem] p-8 lg:p-10 lg:rounded-md bg-[#2e2f39] max-lg:min-h-screen text-white">

                <h1 className="text-center text-xl lg:text-2xl max-lg:mt-20 font-semibold mb-8 lg:mt-0 text-[#eba312]">Login Here!</h1>

                <label htmlFor="ownerPhone" className="text-[#eba312]"><strong>Phone Number:</strong></label>
                <div className="flex flex-col sm:flex-row gap-3">
                    <input
                        type="text"
                        id="ownerPhone"
                        value={loginData.ownerPhone}
                        onChange={loginHandleChange}
                        className="mt-2 sm:mb-3 text-black flex-[7] p-2 border border-gray-300 rounded text-sm placeholder-gray-400 placeholder:text-xs"
                        name="ownerPhone"
                        placeholder="Enter your Phone Number here"
                        required
                    />

                    <button
                        onClick={handleSendOTP}
                        className="mt-2 mb-3 flex-[3] p-2 bg-yellow-600 text-white text-base font-medium rounded cursor-pointer hover:bg-yellow-700" disabled={isSendingOtp}
                    >
                        {isSendingOtp ? "Sending OTP..." : "Send OTP"}
                    </button>
                </div>

                <label htmlFor="otp" className="text-[#eba312]"><strong>OTP:</strong></label>
                <input
                    type="text"
                    id="otp"
                    value={loginData.otp}
                    onChange={loginHandleChange}
                    className="mt-2 mb-3 text-black w-full p-2 mb-2 border border-gray-300 rounded text-sm placeholder-gray-400 placeholder:text-xs"
                    name="otp"
                    placeholder="Enter your OTP here"
                    required />

                <button
                    className="mt-8 block w-full px-4 py-2 bg-yellow-600 text-white text-base font-medium rounded cursor-pointer hover:bg-yellow-700" disabled={isSubmitting} onClick={verifyOtp}>{isSubmitting ? "Logging In..." : "Login"}</button>
            </form>
        </div>
    )
}

export default Login