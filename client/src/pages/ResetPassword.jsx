import "./ResetPassword.css";
import React from 'react';
import { Link } from 'react-router-dom';
import image from "../assets/hill.jpg";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { AppContent } from "../context/AppContext";
import axios from "axios";



const ResetPassword = () => {

    const { backendUrl } = useContext(AppContent);
    axios.defaults.withCredentials =true;

    const navigate = useNavigate();


    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [isEmailSent, setIsEmailSent] = useState("");
    const [otp, setOtp] = useState(0);
    const [isOtpSubmited, setIsOtpSubmited] = useState(0);

    const inputRefs = React.useRef([]);

    const handleInput = (e, index) => {
        if (e.target.value.length > 0 && index < inputRefs.current.length - 1) {
          inputRefs.current[index + 1].focus();
        }
      };
    
      const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && e.target.value === "" && index > 0) {
          inputRefs.current[index - 1].focus();
        }
      };
    
      const handlePaste = (e) => {
        const paste = e.clipboardData.getData("text");
        const pasteArray = paste.split("");
        pasteArray.forEach((char, index) => {
          inputRefs.current[index].value = char;
        });
      };
    
      const onSubmitEmail = async (e) => {
        e.preventDefault();
        try {
          const { data } = await axios.post(
            backendUrl + "/api/auth/send-reset-otp",
            { email }
          );
          data.success ? toast.success(data.message) : toast.error(data.message);
          data.success && setIsEmailSent(true);
        } catch (error) {
          toast.error(error.message);
        }
      };
    
      const onSubmitOTP = async (e) => {
        e.preventDefault();
        const otpArray = inputRefs.current.map((e) => e.value);
        setOtp(otpArray.join(""));
        setIsOtpSubmited(true);
      };
    
      const onSubmitNewPassword = async (e) => {
        e.preventDefault();
        try {
          const { data } = await axios.post(
            backendUrl + "/api/auth/reset-password",
            { email, otp, newPassword }
          );
          data.success ? toast.success(data.message) : toast.error(data.message);
          data.success && navigate("/login");
        } catch (error) {
          toast.error(error.message);
        }
      };

  return (
    <div>

{!isEmailSent && (
    <div className="forgot-password-container">
      {/* Logo Section */}
      <div className="logo-container">
        
         
          <span className="logo-text">Welcome to Chandigarh info Service</span>
      
      </div>
     

      {/* Main Container */}
      <div className="main-container">
        {/* Left Section */}
        <div className=" w-2xl rounded-none">
        <div className="max-w-6xl h-[500px] rounded-none mt-9 p-6">
            <img 
              src={image}
              alt="Forgot Password Illustration"
              className="forgot-password-image"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <div className="form-container">
            <h1 className="form-heading">Forgot Password?</h1>
            <p className="form-description">
              Enter your email address, and we'll send you a link to reset your password.
            </p>

         
            <form className="form" onSubmit={onSubmitEmail}>
              <div className="input-group">
                <label className="label">Email Address*</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input-field"
                 value={email}
                 onChange={(e)=>setEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="submit-button">Send Reset Link</button>
              <p className="back-to-login">
                Remember your password?{' '}
                <Link to="/login" className="back-link">Login</Link>
              </p>
            </form>


          </div>
        </div>
      </div>
  

      

      
    </div>
     )}

      {/* otp input form  */}


{!isOtpSubmited && isEmailSent && (
      <div className=" flex items-center justify-center min-h-screen  sm:px-0 bg-gradient-to-br from-blue-200 to-purple-200">
        <form
          onSubmit={onSubmitOTP}
          className="bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-sm"
        >
          <h1 className="text-white text-2xl font-semibold text-center mb-4">
            Password Reset OTP
          </h1>

          <p className="text-center mb-6 text-indigo-300">
            Enter the 6-digit code sent to your email id.
          </p>

          <div className="flex justify-between mb-8" onPaste={handlePaste}>
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <input
                  type="text"
                  maxLength="1"
                  key={index}
                  required
                  className="w-12 h-12 bg-[#333A5C] text-white text-center text-xl rounded-md"
                  ref={(e) => (inputRefs.current[index] = e)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onInput={(e) => handleInput(e, index)}
                />
              ))}
          </div>
          <button className="w-full py-2.5 bg-gradient-to-r from-indigo-500 to-indigo-900 text-white rounded-full">
            Submit
          </button>
        </form>

</div>
)}


      {/* enter new password form  */}


      {isOtpSubmited && isEmailSent && (
      <div className=" flex items-center justify-center min-h-screen  sm:px-0 bg-gradient-to-br from-blue-200 to-purple-200">
        <form
          onSubmit={onSubmitNewPassword}
          className="bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-sm"
        >
          <h1 className="text-white text-2xl font-semibold text-center mb-4">
            {" "}
            New Password{" "}
          </h1>

          <p className="text-center mb-6 text-indigo-300">
            {" "}
            Enter the new password below
          </p>

          <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]">
        
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent outline-none text-white border border-none"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <button className="w-full py-3 bg-gradient-to-r from-indigo-500 to-indigo-900 text-white rounded-full">
            Submit
          </button>
        </form>
      </div>
      )}


    </div>
  );
};

export default ResetPassword;
