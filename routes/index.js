/* const router = require('express').Router();

router.get('/', (req, res) => {res.send('Hello, world!');});

router.use('/user', require('./user'));

module.exports = router; */

/* const express = require('express');
const router = express.Router();

// Define a route for the root path
router.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Use the user router for '/user' path
router.use('/', require('/Users'));

// Export the router
module.exports = router; */

const router = require('express').Router();

router.get('/', (req, res) => { res.send('Hello, world!')});

router.use('/users',require('./users') )

module.exports = router;