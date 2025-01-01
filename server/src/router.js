const express = require('express');

const router = express.Router();

router.post('/login', require('./routes/loginRoute'));

router.get('/todo', require('./routes/todoRoute'));

module.exports = router;

// https://www.youtube.com/watch?v=oJBu2k7OEk8&t=1773s
// 35:00
// you are now putting the middleware so auth will be applicable to pages