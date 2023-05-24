const model = require('../model/model');

exports.submitArtist = function (req, res) {
    form = {
        name: req.query.artistName,
        image: req.query.artistPic,
        description: req.query.artistInfo,
        id:req.query.artistId
    }
    try{
        //console.log(form);
        model.addArtist(form);
        res.redirect("/artists");
    }
    catch (error){
        res.send(error);
    }
}
