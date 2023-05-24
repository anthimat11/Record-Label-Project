const express = require('express');
const controller = require("../controllers/artistSongs");

const router = express.Router();

router.use((req, res, next) => {
    next();
});

router.get('/', controller.getPage);
router.get('/:id/submit', controller.submitSong);
router.get('/delete/:artistId/:removeSongId', controller.removeSong);
router.get('/addToMyPlaylist/:artistId/:songId/:name', controller.addToMyPlaylist);





module.exports = router;