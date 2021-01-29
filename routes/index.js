const express = require('express');
const router = express.Router();

const HomeController = require('../controllers/HomeController');
const VideoController = require('../controllers/VideoController');
const WatchtingController = require('../controllers/WatchingController');
const LoginController = require('../controllers/LoginController');

router.get('/', HomeController.home);
router.get('/watch', WatchtingController.watch);
router.get('/video', VideoController.video);
router.get('/cda/:videoId', WatchtingController.cda);

router.post('/login', LoginController.login);

module.exports = router;