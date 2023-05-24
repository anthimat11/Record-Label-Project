const express = require('express');
const controller = require("../controllers/myPlaylist");
const loginController = require('../controllers/login');

const router = express.Router();

router.use((req, res, next) => {
    next();
});

router.get('/', loginController.checkAdmin, controller.getSongsByUserId);
router.get('/remove/:userId/:songId', controller.removeSongByUserId);



module.exports = router;