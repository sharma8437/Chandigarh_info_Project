const express = require('express')
const {register,login,logout,sendVerifyOtp,verifyEmail,isAuthenticated,resetPassword,sendResetOtp} = require("../controller/authController.js")
const userAuth = require('../middleware/userAuth.js')


const userRoutes = express.Router()

//register
userRoutes.post('/register', register)
userRoutes.post('/login',login)
userRoutes.post('/logout',logout)
userRoutes.post('/send-verify-otp',userAuth,sendVerifyOtp );
userRoutes.post('/verify-account', userAuth,verifyEmail );
userRoutes.get('/is-auth', userAuth,isAuthenticated );
userRoutes.post('/send-reset-otp',sendResetOtp );
userRoutes.post('/reset-password',resetPassword );



module.exports = userRoutes;