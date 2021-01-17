const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    
    const token = req.headers.cookie

    if (!token)
    return res.status(401).render('error', {
        title: 'Something went wrong'
        
    })
    
    const newToken = token.slice(10)

    try {
        const verified = jwt.verify(newToken, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).json({ 
            error: 'You must be logged in to enter this site',

        });
    }
};

module.exports = verifyToken