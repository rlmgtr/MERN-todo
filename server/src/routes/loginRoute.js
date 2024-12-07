const jwt = require('jsonwebtoken');

module.exports = (req, res) => {
if (req.body.password === process.env.PASSWORD) {
const token = jwt.sign({
    userID: 'user1',
}, process.env.SECRET); 

res.json({
token, 
});
} else {

    res.status(401).send('Test: Wrong password');
}
}