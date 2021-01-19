const express = require('express');
const {Router} = require('express');
const controllers = require('../controllers/users');

const router = Router();

router.get('/', controllers.getUser);

router.get('/:id', controllers.getUserById);

router.delete('/:id', controllers.deleteUser)

router.put('/:id', controllers.updateUser); 

router.post('/', controllers.postUser);

module.exports = router;