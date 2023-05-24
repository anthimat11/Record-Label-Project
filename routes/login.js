const express = require('express');
const router = express.Router();
const loginController = require("../controllers/login");

router.use((req, res, next) => {
    next();
});


router.get('/', async (req, res) => {
    // console.log(req.session)
    res.render('login', {
    style: "login.css", 
    title: "Log in", 
    login: "selected",
    username: req.session.loggedUsername,
    userType : req.session.UserType
    })
});

router.get('/login', loginController.doLogin);

router.get('/logout', loginController.doLogout);




module.exports = router;