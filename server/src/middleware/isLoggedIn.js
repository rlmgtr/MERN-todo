const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
const authHEader = req.headers.authorization;
if (!authHEader) {
    res.status(401).send('Please log in to continue');
} else {
    const token = authHEader.split(' ')[1];
    console.log(token);
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) {
            res.status(403).send('invalid log in');
        } else {
            next();
        } 
    });
}
}