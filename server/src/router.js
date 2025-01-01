const express = require('express');

const isLoggedIn = require ('./middleware/isLoggedIn.js')

const router = express.Router();

router.post('/login', require('./routes/loginRoute'));

router.get('/todo', isLoggedIn, require('./routes/todoRoute'));

module.exports = router;






// https://www.youtube.com/watch?v=oJBu2k7OEk8&t=1773s
// 41:00
// now we are setting up mdb