const jwt = require('jsonwebtoken');

//use user id to generate token
const generateToken = (id) => {
    //token must be returned to the user
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};

module.exports = generateToken;