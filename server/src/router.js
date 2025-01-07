const express = require('express');
const isLoggedIn = require ('./middleware/isLoggedIn.js')

const createToDoRoute = require('./routes/createToDoRoute.js');
const readToDoRoute = require('./routes/readToDoRoute.js');
const updateToDoRoute = require('./routes/updateToDoRoute.js');
const deleteToDoRoute = require('./routes/deleteToDoRoute.js');

const router = express.Router();

router.post('/login', require('./routes/loginRoute'));

router.post('/todo', isLoggedIn, createToDoRoute );
router.get('/todo', isLoggedIn, readToDoRoute);
router.put('/todo/:id', isLoggedIn, updateToDoRoute);
router.delete('/todo/:id', isLoggedIn, deleteToDoRoute);

module.exports = router;






// https://www.youtube.com/watch?v=oJBu2k7OEk8&t=1773s
// 1:03 - now in client interface

