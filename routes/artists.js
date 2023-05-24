const express = require('express');
const controller = require("../controllers/artists");

const router = express.Router();

router.use((req, res, next) => {
    next();
});

router.get('/', controller.getArtists);
router.get('/delete/:removeArtistId', controller.removeArtist);





module.exports = router;