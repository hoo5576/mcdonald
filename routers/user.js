const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const refresh = require('./refresh');
// const { Product, ProductDetail, ProductSubImage } = require('./models');

router.post('/join', UserController.addUser);
router.post('/login', UserController.loginUser);
router.get('/one', refresh, UserController.detailUser);
// router.get('/one', UserController.detailUser);
router.patch('/update', refresh, UserController.putUser);
// router.patch('/update', UserController.putUser);
router.delete('/delete', refresh, UserController.deleteUser);
// router.get('/mypage', authJWT, UserController.)

module.exports = router;
