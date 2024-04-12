const express = require('express');
const passport = require('passport');

const { join, login, logout } = require('../controller/auth');
const { isNotLoggedIn, isLoggedIn } = require('../middlewares');

const router = express.Router();

router.post('/join', isNotLoggedIn, join);
router.post('/login', isNotLoggedIn, login);
router.post('/join', isLoggedIn, logout);

module.exports = router;
