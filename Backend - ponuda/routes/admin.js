const express = require('express');
const router = express.Router();

router.get('/dashboard', isAdmin, (req, res) => {
    res.send('Welcome to the Admin Dashboard');
});

module.exports = router;