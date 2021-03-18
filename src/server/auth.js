const jwt = require("jsonwebtoken");

const accessTokenSecret = 'angrypizzaaccesstokensecret';

module.exports = (req, res, next) => {
    const token = req.header('Auth-token');

    // Check for token
    if (!token)
        return res.status(401).json({ msg: 'No token, authorization denied' });

    try {
        // Verify token
        const decoded = jwt.verify(token, accessTokenSecret);
        // Add user from payload
        req.user = decoded;
        next();
    } catch (e) {
        res.status(400).json({ msg: 'Token is not valid' });
    }
};
