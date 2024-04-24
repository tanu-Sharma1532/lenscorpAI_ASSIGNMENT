const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
require("dotenv").config();
const User = require('../models/Signup')

exports.signup = async (req, res) => {
    try {
      const {name,email,password,role} = req.body;
      console.log(name,email,password,role);
      const existinguser = await User.findOne({email});
      if(existinguser){
        return res.status(400).json({
            success:false,
            message:'User Already Exist',
        });
      }
      let hashedpassword;
      try{
        hashedpassword = await bcrypt.hash(password,10);
      }catch(err){
        return res.status(500).json({
            success:false,
            message:'Error in hashing password',
        });
      }
      const user = await User.create({name,email,password:hashedpassword,role})
       return res.status(200).json({
        success:true,
        message:'Entry created successfully',
    });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success:false,
            message:'User cant be registered . Please try again later',
        });
    }
}

exports.login = async (req, res) => {
    try {
        const {email,password} = req.body;
        console.log(email , password);
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:'Please fill all the details successfully',
            });
        }
        let user = await User.findOne({email});
        console.log(user,email,password);
        if(!user){
            return res.status(401).json({
                success:false,
                message:'User doesnt exist',
            });
        }
        const payload = {
            email:user.email,
            id:user._id,
            role:user.role,
        }
    
        if(await bcrypt.compare(password,user.password)){
            let token = jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"1h"});
            user.token = token;
            user.password=undefined;
            res.status(200).json({
                success:true,
                token , user ,
                message:'User logged in successfully',
            })
        }
        else{
             return res.status(500).json({
                success:false,
                message:'Password doesnt match',
            });
        }
    } catch (error) {
        console.log(error)
         return res.status(500).json({
            success:false,
            message:'Login Error',
        });
    }
}
