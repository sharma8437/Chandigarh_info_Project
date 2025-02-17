const  express  = require('express') 
const {getUserData} = require('../controller/userController.js')
const userAuth = require('../middleware/userAuth.js')

const userRouter = express.Router()


userRouter.get('/data', userAuth,getUserData)

module.exports = userRouter;