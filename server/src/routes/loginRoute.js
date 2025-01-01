const jwt = require('jsonwebtoken');

module.exports = (req, res) => {
    if (req.body.password === process.env.PASSWORD && req.body.user === process.env.USER) {
    const token = jwt.sign({
      userID: 1, 
    }, process.env.SECRET);
res.json({
  token,
});
    } else {
      return res.status(401).send("Invalid credentials");
    }
  };
  






  // https://www.youtube.com/watch?v=oJBu2k7OEk8
  // continue at 28:00