const express = require('express');
const controller = require('../controllers/artistForm');

const router = express.Router();

router.use((req, res, next) => {
    next();
});




router.get('/', async (req, res) => {
    res.render('artistForm', {
    style: "artistForm.css", 
    title: "Add New Artist", 
    artists: "selected",
    username: req.session.loggedUsername,
    userType : req.session.UserType
    })
});

router.get('/submit', controller.submitArtist);




module.exports = router;