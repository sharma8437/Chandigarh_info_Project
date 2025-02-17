const userModel = require("../models/userModel.js");
const brcypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const transporter = require("../config/nodemailer.js");

// register

const register = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Missing Details." });
  }
  try {
    const exitingUser = await userModel.findOne({ email });
    if (exitingUser) {
      return res.status(404).json({
        success: false,
        message: "User already exits with this email",
      });
    }

    const hashPassword = await brcypt.hash(password, 10);

    const user = new userModel({ username,email, password: hashPassword });
    await user.save();

    const secret_key = process.env.JWT_SECTRET;

    const token = jwt.sign({ id: user._id }, secret_key, { expiresIn: "7d" });

    res.cookie("token", token, {
      httpOnly: true,
      secure: (process.env.NODE_ENV = "production"),
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    //sending welcome message  on mail

    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: email,
      subject: "Welcome to ABC Company",
      text: `Welcome to ABC Company website. Your account has been created with email id: ${email}`,
    };

    await transporter.sendMail(mailOptions);

    return res.status(201).json({
      success: true,
      message: "User Registered successfully",
   
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

//login

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Email and Password are required" });
  }

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const isMatch = await brcypt.compare(password, user.password);

    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid Password" });
    }

    const secretKey = process.env.JWT_SECTRET;

    const token = jwt.sign({ id: user._id }, secretKey, { expiresIn: "7d" });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res
      .status(201)
      .json({ success: true, message: "User Logged-in successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

//logout

const logout = async (req, res) => {
  try {
    res.cookie("token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      expires: new Date(0),
    });

    return res.json({ success: true, message: "User Logged Out" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Send Verified Otp here

const sendVerifyOtp = async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res
        .status(400)
        .json({ success: false, message: "User ID is missing" });
    }

    const user = await userModel.findById(userId);
    if (user.isAccountVerified) {
      return res.json({ success: false, message: "Account Already Verified" });
    }

    // generate otp

    const otp = String(Math.floor(100000 + Math.random() * 900000));
    user.verifyOtp = otp;
    user.verifyOtpExpiredAt = Date.now() + 24 * 60 * 60 * 1000;

    await user.save();
    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: user.email,
      subject: "Account Verification OTP",
      text: `Your OTP is ${otp}. Verify your account using this OTP.`,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: "Verification OTP Sent on Email" });
  } catch (error) {
    return res.json({
      success: false,
      message: `server error ${error.message}`,
    });
  }
};

//verify email

 const verifyEmail = async (req, res) => {
  const { userId, otp } = req.body;

  if (!userId || !otp) {
    return res.json({ success: false, message: "Missing Details" });
  }

  try {
    const user = await userModel.findById(userId);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "user not found" });
    }
    if ((user.verifyOtp = "" || user.verifyOtp !== otp)) {
      return res.status(404).json({ success: false, message: "Invalid OTP" });
    }
    if (user.verifyOtpExpiredAt < Date.now()) {
      return res.json({ success: false, message: "OTP Expired" });
    }
    user.isAccountVerified = true;
    (user.verifyOtp = ""), (user.verifyOtpExpiredAt = 0);

    await user.save();
    return res.json({ success: true, message: "Email Verified Successfully" });
  } catch (error) {
    return res.json({
      success: false,
      message: `server error ${error.message}`,
    });
  }
};

// isAuthenticated or not checking


 const isAuthenticated = async (req, res) => {
    try {
      return res.json({
        success: true,
        message: "User is already authenticated",
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };


// Send Password Reset OTP

const sendResetOtp = async (req, res) => {

    const {email} = req.body;

    if(!email){
        return res.status(404).json({success:false,message:"Email is required!"})
    }

    try {
        const user = await userModel.findOne({email})

        if (!user) {
            return res.json({ success: false, message: "User not found" });
          }
          const otp = String(Math.floor(100000 + Math.random() * 900000));

          user.resetOtp = otp;
          user.resetOtpExpiredAt = Date.now() + 15 * 60 * 60 * 1000;
          await user.save();
          const mailOption = {
            from: process.env.SENDER_EMAIL,
            to: user.email,
            subject: "Password Reset OTP",
            text: `Your OTP for resetting your password is ${otp}.Use this otp to proceed with resetting your password.`,
          };
      
          await transporter.sendMail(mailOption);
          res.json({ success: true, message: "Reset Otp sent On youe email." });


        
    } catch (error) {
        return res.json({
            success: false,
            message: `server error ${error.message}`,
          });
        
    }

}

/// Reset Password

const resetPassword = async (req, res) => { 

    const { email, otp, newPassword } = req.body;

  if (!email || !otp || !newPassword) {
    return res.json({
      success: false,
      message: "Email otp and new password are require",
    });
  }
  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    if (user.resetOtp === "" || user.resetOtp !== otp) {
      return res.json({ success: false, message: "Invalid OTP!" });
    }

    if (user.resetOtpExpiredAt < Date.now()) {
      return res.json({ success: false, message: "OTP expired" });
    }

    const hashedPassword = await brcypt.hash(newPassword, 10);

    user.password = hashedPassword;
    (user.resetOtp = ""), (user.resetOtpExpiredAt = 0);

    await user.save();

    res.json({
      success: true,
      message: "Password has been updated successfully.",
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}


module.exports = { register, login, logout, sendVerifyOtp,verifyEmail,isAuthenticated,sendResetOtp,resetPassword };
