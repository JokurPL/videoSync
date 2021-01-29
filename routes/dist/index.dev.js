"use strict";

var express = require('express');

var router = express.Router();

var HomeController = require('../controllers/HomeController');

var VideoController = require('../controllers/VideoController');

var WatchtingController = require('../controllers/WatchingController');

var LoginController = require('../controllers/LoginController');

var UploadController = require('../controllers/UploadController');

router.get('/', HomeController.home);
router.get('/watch', WatchtingController.watch);
router.get('/video', VideoController.video);
router.post('/login', LoginController.login);
router.get('/upload', UploadController.main);
router.get('/upload/save', UploadController.save);
module.exports = router;