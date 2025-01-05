const express = require('express');

const isLoggedIn = require ('./middleware/isLoggedIn.js')

const router = express.Router();

router.post('/login', require('./routes/loginRoute'));

router.post('/todo', isLoggedIn, require('./routes/createToDoRoute.js'));
router.get('/todo', isLoggedIn, require('./routes/readToDoRoute.js'));


module.exports = router;






// https://www.youtube.com/watch?v=oJBu2k7OEk8&t=1773s
// 51:00
// creating CRUD routes