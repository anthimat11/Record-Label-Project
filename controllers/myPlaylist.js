const model = require("../model/model");
//artlet userId = req.session.loggedUserId;


exports.getSongsByUserId = function(req,res){
    const likedSongs = model.getSongsByUserId(req.session.loggedUserId);
    const username = model.getUsernameByUserId(req.session.loggedUserId);
    let artistNames = [];
    for(let i=0;i<likedSongs.length;i++){
        //console.log(likedSongs[i].artist_id);
        let artistName = model.getArtistById(likedSongs[i].artist_id);
        artistNames.push(artistName.name);
        //console.log(artistNames);
    }
    for(let i=0;i<likedSongs.length;i++){
        likedSongs[i].artistName = artistNames[i] ;
       }

    //console.log(userId);
    //console.log(likedSongs);
    //console.log(username);
    res.render('myPlaylist', {
        style: "myPlaylist.css", 
        title: "My Playlist", 
        myPlaylist: "selected",
        userId: req.session.loggedUserId,
        songs: likedSongs,
        username: req.session.loggedUsername,
        userType : req.session.UserType
        });
    
}

exports.removeSongByUserId = function(req,res){
    const toBeRemoved = model.removeSongByUserId(req.params.songId,req.params.userId);
    console.log(toBeRemoved);
    res.redirect('/myPlaylist');
}