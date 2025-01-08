const asyncHandler = require('express-async-handler');
const User = require("../models/auth/userModel");
const generateToken = require('../helpers/generateToken');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const registerUser = asyncHandler(async (req,res) => {
    const {name, email, password}= req.body;


    //validation
    if(!name || !email || !password) {
        res.status(400).json({message: "All fields are required"});
    }

    //check password length
    if(password.length < 6) {
        return res
        .status(400)
        .json({message: "Password must be at least 6 characters"}); 
    }
    //check if user already exist
    const userExists = await User.findOne({email});
    
    if(userExists){
        return res.status(400)
        .json({message: "User alreay exists"});
    }

    //create new user
    const user = await User.create({
        name,
        email,
        password,
    });

    //generate token with user id 
    const token = generateToken(user._id);
    
    //send back the user and token in the response to the client
    res.cookie("token", token, {
        path: "/",
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
        sameSite: true,
        secure: true,
    });


    if(user) {
        const {_id, name, email, role, photo, bio} = user;
        res.status(201).json({
            _id,
            name,
            email,
            role,
            photo,
            bio,
            token,
        });
    } else {
        res.status(400)
        .json({message: "Invalid user data"});
    }
});

//user login
const loginUser = asyncHandler(async (req,res) => {
    //get email and pass
    const {email, password} = req.body;
    //validation
    if(!email || !password) {
        return res.status(400)
        .json({message: "All fields are required"});
    }

    //check if user exists
    const userExists = await User.findOne({email});
    if(!userExists) {
        return res.status(404)
        .json({message: "User not found, please sign up first"});
    }

    //check id the pass match the hashed pass in the database
    const isMatch = await bcrypt.compare(password, userExists.password);

    if(!isMatch){
        return res.status(400)
        .json({message: "Invalid Password"});
    }
    //genertate token using user id
    const token = generateToken(userExists._id);

    if(userExists && isMatch) {
        const {_id, name, email, role, photo, bio} = userExists;

        //set the token in the cookie
        res.cookie("token", token, {
            path: "/",
            httpOnly: true,
            maxAge: 30 * 24 * 60 * 60 * 1000,
            sameSite: true,
            secure: true,
        });
        //send back th user ttoken in the response to the client 
        res.status(200).json({
            _id,
            name,
            email,
            role,
            photo,
            bio,
            token,
        });
    } else {
        res.status(400). json({message: "invalid email or password "});
    }

});

//logout user
const logoutUser = asyncHandler(async (req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        sameSite: "none",
        secure: true,
        path: "/",
    });

    res.status(200).json({message: "User logged out"});
});

//Get User
const getUser = asyncHandler(async (req,res) => {
    const user = await User.findById(req.user._id).select("-password");

    if(user){
        res.status(200).json(user);
    } else{
        res.status(404).json({message:"User not found!"});
    }
});


module.exports = { registerUser, loginUser, logoutUser} ;