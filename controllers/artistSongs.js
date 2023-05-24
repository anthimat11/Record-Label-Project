const model = require("../model/model");


exports.getPage = function(req,res){
    console.log(req.query.id);
    const artistInfo = model.getArtistById(req.query.id);
    const songs =  model.getSongsByArtistId(req.query.id);
    //console.log(artistInfo);
    //console.log(songs);
    console.log(req.session.UserType);
    res.render('artistSongs', {
        style: "artistSongs.css", 
        title: "Artist Page", 
        artists_page: "selected",
        artist : artistInfo.name,
        id: artistInfo.artist_id,
        img : artistInfo.image,
        description: artistInfo.descr,
        songs: songs,
        username: req.session.loggedUsername,
        userType : req.session.UserType
        });

}

exports.removeSong = function(req, res){
    model.removeSong(req.params.removeSongId);
    const artist = model.getArtistById(req.params.artistId);
    const songs = model.getSongsByArtistId(req.params.artistId);
    console.log(artist);
    res.redirect("/artistSongs/?id="+ req.params.artistId);

    
}
 

exports.submitSong = function(req,res){
    try{
        //console.log(req.params.id);
        model.addSong(req.query.newSong,req.params.id);
        res.redirect("/artistSongs/?id="+req.params.id);
    }
    catch (error){
       res.send(error);
    }
}

exports.addToMyPlaylist = function(req,res){
    console.log(req.session);
    let songToBeAdded = model.addToMyPlaylist(req.session.loggedUserId,req.params.artistId,req.params.songId,req.params.name);
    console.log(songToBeAdded);
    res.redirect("/artistSongs/?id="+req.params.artistId);

}





