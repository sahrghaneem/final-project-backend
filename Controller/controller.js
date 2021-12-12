const userModel = require('../models/model').userModel
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const getUser = async (req, res) => {
    try {
        if (req.body && req.body.username && req.body.password) {
          userModel.find({ username: {$eq: req.body.username} }, (err, data) => {
            if (data.length > 0) {
              if (data[0].password === req.body.password) {
                checkUserAndGenerateToken(data[0], req, res);
              } else {

                res.status(400).json({
                  errorMessage: 'Username or password is incorrect!!',
                  status: false
                });
              }
    
            } else {
              res.status(400).json({
                errorMessage: 'Username or password is incorrect!',
                status: false
              });
            }
          })
        } else {
          res.status(400).json({
            errorMessage: 'Add proper parameter first!',
            status: false
          });
        }
      } catch (e) {
        res.status(400).json({
          errorMessage: 'Something went wrong!',
          status: false
        });
      }
} 

const saveCoins =async(req,res) => {
  userModel.updateOne(
    {username: req.body.username},
    {coins : req.body.coins }, function(err){
    //  console.log(err);
    }, 
    );  
  }

const upGradeCar =async(req,res)=>{

userModel.updateOne(
  {username:req.body.username},
  {upCar:req.body.upCar},function(err){
  //  console.log(err);
  })
}
  
const addNewUser =async (req, res) => {
    try {
        if (req.body && req.body.username && req.body.password) {
          userModel.find({ username: {$eq: req.body.username} }, (err, data) => {
            if (data.length===0) {
              let User = new userModel({
                username: req.body.username,
                password: req.body.password,
                coins:0

              });
              User.save((err, data) => {
                if (err) {
                  res.status(400).json({
                    errorMessage: err,
                    status: false
                  });
                } else {
                  res.status(200).json({
                    status: true,
                    title: 'Registered Successfully.'
                  });
                }
              });
    
            } else {
              res.status(400).json({
                errorMessage: `UserName ${req.body.username} Already Exist!`,
                status: false
              });
            }
    
          });
    
        } else {
          res.status(400).json({
            errorMessage: 'Add proper parameter first!',
            status: false
          });
        }
      } catch (e) {
        res.status(400).json({
          errorMessage: 'Something went wrong!',
          status: false
        });
      }
} 
 const checkUserAndGenerateToken=(data, req, res) =>{
    jwt.sign({ user: data.username, id: data._id }, 'shhhhh11111', { expiresIn: '1d' }, (err, token) => {
      if (err) {
        res.status(400).json({
          status: false,
          errorMessage: err,
        });
      } else {
        res.json({
          message: 'Login Successfully.',
          token: token,
          coins:data.coins,
          username:data.username,
          upCar: data.upCar,
          status: true
        });
      }
    });
  }


  module.exports = {
      getUser,
      addNewUser,
      saveCoins,
      upGradeCar
  }