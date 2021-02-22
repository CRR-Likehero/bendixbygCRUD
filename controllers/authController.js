const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.registerUser = async (req, res) => {

    const isEmailExist = await User.findOne({ email: req.body.email });
    
    if (isEmailExist) {
        return res.status(400).json({
            error: 'Email already exists'
        });
    }
    
    //encrypting the password
    
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);
    
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password
    });
    
    try {
        const savedUser = await user.save();
        res.json ({
            data: savedUser
        });
    } catch (err) {
        res.status(400).json({
            err
        });
    }
    
};

exports.loginUser = async (req, res) => {

    const user = await User.findOne({
        email: req.body.email
    });

    //Check for the email is correct

    if (!user)
    return res.status(400).json({
        error: 'Email or password is wrong'
    });

    // check for the password is correct
    
    const validatePassword = await bcrypt.compare(req.body.password, user.password);

    if (!validatePassword)
    return res.status(400).json({
        error: 'Email or password is wrong'
    });

    //Making a json webtoken

    const token = jwt.sign({
        name: user.name,
        id: user._id
    },
     process.env.JWT_SECRET,
     {
         expiresIn: "30min"
     }
    );

     
    //assigning a cookie with the token

    res.cookie('authtoken', token).json({
        data: {
            token,
            status: 'succes'
        },
        httpOnly: true
    });
};

exports.logout = (req, res) => {
    res.cookie('authtoken', 'loggedout', {
        expires: new Date(Date.now() + 10 * 1000),
        httpOnly: true
    });
    res.status(200).json({
        status: 'succes'
    })
}