var express = require('express');
var router = express.Router();

var usersService = require('../../services/users/users.service');

router.get('/', usersService.getUsers);

module.exports = router;