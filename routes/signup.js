const express = require('express');
const router = express.Router();
const loginController = require("../controllers/login");


router.use((req, res, next) => {
    next();
});


router.get('/', async (req, res) => {
    // console.log(req.session)
    res.render('signup', {
    style: "login.css", 
    title: "Sign Up", 
    signup: "selected",
    username: req.session.loggedUsername,
    userType : req.session.UserType
    })
});

router.get('/signup',loginController.checkUsername, loginController.RegisterUser);





module.exports = router;