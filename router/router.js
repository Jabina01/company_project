const express=require('express')
const router=express.Router()
const {signup,login}=require('../controller/signup.js')
const {user_communication, get_data}=require('../controller/post')

router.post('/signup',signup)
router.post('/login',login)
router.post('/user/communication',user_communication)
router.get('/get_data',get_data)

module.exports=router