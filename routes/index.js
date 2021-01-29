const express = require('express');
const router = express.Router();

const HomeController = require('../controllers/HomeController');
const VideoController = require('../controllers/VideoController');
const WatchtingController = require('../controllers/WatchingController');
const LoginController = require('../controllers/LoginController');
const UploadController = require('../controllers/UploadController');

router.get('/', HomeController.home);
router.get('/watch', WatchtingController.watch);
router.get('/video', VideoController.video);

router.post('/login', LoginController.login);

router.get('/upload', UploadController.main);
router.post('/upload/save', UploadController.save);

module.exports = router;