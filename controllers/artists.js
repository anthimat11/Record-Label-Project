const model = require(`../model/model.js`);

exports.getArtists = function(req,res){
        const artists =  model.getAllArtists();
        console.log(req.session.Admin);
        res.render('artists', {
            style: "artists.css", 
            title: "Artists List", 
            artists_page: "selected",
            artists : artists,
            username: req.session.loggedUsername,
            userType: req.session.UserType
            });
    
   
    }

exports.removeArtist = function(req, res){
        model.removeArtist(req.params.removeArtistId);
        const allArtists = model.getAllArtists();
        res.redirect("/artists");
    
        
    }
     

