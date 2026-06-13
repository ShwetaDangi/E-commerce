const User = require("../model/User")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const sendMail = require('../utils/sendMail')

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d'});
}

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({email});
        if (existingUser){
            return res.status(400).json({message: "User alredy exists"})
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // TODO: HASH PASSWORD , JWT token generation, OTP sending for email verification , Welcome mail
        const user = await User.create({ name, email, password: hashedPassword });
        if(User){
            const otp = Math.floor(100000 + Math.random() * 900000 ).toString();
            
            const message = `Welcome to our shop, your otp is ${otp}`

            await sendMail(email, 'Welcome to our shop - your otp for registration ', message);

            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                token: generateToken(user._id)
            })
        }else{
            res.status(400).json({mesage: "Invalid user"})
        }
    } catch (error) {
        res.status(500).json({message: "Server error"})
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({email});
        if (existingUser && await bcrypt.compare(password, existingUser.password)){
            res.json({
            _id: existingUser._id,
            name: existingUser.name,
            email: existingUser.email,
            role: existingUser.role,
            token: generateToken(existingUser._id)
        })
        } else {
            res.status(400).json({mesage: "Invalid user"})
        }
    } catch (error) {
        res.status(500).json({message: "Server error"})
    }
}

const getUsers = async (req, res) => {
    try {
        const users = await User.find({}).select('-password');
        res.json(users);
    } catch (error) {
        res.status(500).json({message: "Server error"});
    }
}

module.exports = {
    registerUser,
    loginUser,
    getUsers
}