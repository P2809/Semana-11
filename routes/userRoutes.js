const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/usuarios', userController.getAllUsers);


router.post('/usuarios', userController.createUser);

module.exports = router;