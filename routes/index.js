var express = require('express');
const req = require('express/lib/request');
var router = express.Router();



const loginRouter = require('./login.js');
const signupRouter = require('./signup.js');
const labelRouter = require('./label.js');
const aboutRouter = require('./about.js');
const artistsRouter = require('./artists.js');
const artistFormRouter = require('./artistForm.js');
const artistSongsRouter = require('./artistSongs.js');
const myPlaylistRouter = require('./myPlaylist.js');
const contactRouter = require('./contact.js');

router.use((req, res, next) => {
  next();
});



//Rest Routes
router.use('/login', loginRouter);
router.use('/signup', signupRouter);
router.use('/label', labelRouter);
router.use('/', labelRouter);
router.use('/about', aboutRouter);
router.use('/artists', artistsRouter);
router.use('/artistForm', artistFormRouter);
router.use('/artistSongs', artistSongsRouter);
router.use('/myPlaylist', myPlaylistRouter);
router.use('/contact', contactRouter);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('label');
});

router.get('*', function (req, res) {
  res.send('Sorry, this is an invalid URL.');
});


module.exports = router;
