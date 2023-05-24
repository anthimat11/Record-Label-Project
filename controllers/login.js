const model = require("../model/model");
const bcrypt = require('bcrypt');

exports.checkUsername = function(req,res,next){
   const username =  model.checkUsername(req.query.usernameSignUp);
   //console.log(username);
   if(username != undefined){
        res.render('signup', {
            style: "login.css", 
            title: "Sign Up", 
            signup: "selected",
            loginError: { message: "Username already in use, pick a different one!" }
            });
    }
    else{
        next();
    }
}

exports.RegisterUser = function(req,res){
    model.RegisterUser(req.query.usernameSignUp,req.query.passwordSignUp);
    res.redirect('/');
}

exports.doLogin = function(req,res){
    user = model.doLoginUser(req.query.usernameLogin);
    admin = model.doLoginAdmin(req.query.usernameLogin);
    console.log(user);
    //console.log(admin);
    if(user == undefined && admin == undefined){
        res.render('login',{
            style: "login.css",
            title: "Log In",
            login: "selected",
            loginError: {message: "Username does not exist, try a different one"} 
        }
        )
    }
    else if(user != undefined && admin == undefined){
        const match = bcrypt.compareSync(req.query.passwordLogin, user.password);
        if(match){
            req.session.loggedUsername = user.username;
            req.session.loggedUserId= user.user_id;
            req.session.UserType = "user";
            //console.log(req.session);
            res.render('label',{
                style: "label.css",
                title: "Label Page",
                label: "selected",
                username: req.session.loggedUsername,
                userType : req.session.UserType
            }
            )
        }
        else{
            res.render('login',{
                style: "login.css",
                title: "Log In",
                login: "selected",
                loginError: {message: "Wrong password, try again!"} 
            }
            )

    }
    }
    else if(user == undefined && admin != undefined){
        const match = bcrypt.compareSync(req.query.passwordLogin, admin.password);
        if(match){
            req.session.loggedUsername = admin.username;
            req.session.loggedUserId= admin.admin_id;
            req.session.UserType = "admin";
            res.render('label',{
                style: "label.css",
                title: "Label Page",
                label: "selected",
                username: admin.username,
                userType: req.session.UserType
            }
            )
        }
        else{
            res.render('login',{
                style: "login.css",
                title: "Log In",
                login: "selected",
                loginError: {message: "Wrong password, try again!"} 
            }
            )

    }
    }
}

exports.doLogout = function(req,res){
    //console.log(req.session);
    req.session.destroy();
    //console.log(req.session);
    res.redirect('/');
}


exports.checkAdmin = function(req,res,next){
    console.log(req.session);
    if(req.session.UserType == undefined){
        res.render('login',{
            style: "login.css",
            title: "Log In",
            login: "selected",
            loginError: {message: "Log in as user to add to your playlist"} 
        })
    }
    else if(req.session.UserType == "admin"){
            req.session.destroy();
            res.render('login',{
                style: "login.css",
                title: "Log In",
                login: "selected",
                loginError: {message: "Must be user to add to your playlist"} 
            }) 
        }
    
    else if(req.session.UserType == "user"){
        next();
    }
}