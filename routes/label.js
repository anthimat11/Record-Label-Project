const express = require('express');

const router = express.Router();

router.use((req, res, next) => {
    next();
});


router.get('/', async (req, res) => {
    // console.log(req.session)
    res.render('label', {
    style: "label.css", 
    title: "Label Page", 
    label: "selected",
    username: req.session.loggedUsername,
    userType : req.session.UserType
    })
});





module.exports = router;