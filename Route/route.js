const express = require('express');
const UserController=require('../Controller/controller');
const router = express.Router()

router.post('/loginUser',(req,res)=>{
    UserController.getUser(req,res)
}).post('/registerUser',(req,res)=>{
    UserController.addNewUser(req,res)
}).post("/savecoin",(req,res)=>{
    UserController.saveCoins(req,res)
}).post('/upGradeCar',(req,res)=>{
UserController.upGradeCar(req,res)
})
module.exports=router;