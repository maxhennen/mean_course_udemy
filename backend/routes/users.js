const express = require('express');

const router = express.Router();

const UserController = require('../controller/users');

router.post('/signup', UserController.createUser);

router.post("/login", UserController.login);

module.exports = router;
