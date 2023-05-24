'use strict';

const db = require('better-sqlite3');
const sql = new db('model/database.db', { fileMustExist: true });
const bcrypt = require('bcrypt');
//Show list of Artist
exports.getAllArtists = function(){
    const stmt = sql.prepare("SELECT * FROM artist");
    let artists;
    try {
        artists = stmt.all();
        return artists;
    } catch (err) {
        throw err;
    }
}

//Remove artist from db
exports.removeArtist = (artistId) => {
    const stmt = sql.prepare('delete from artist where artist_id = ?');
    let info;
    try {
        info = stmt.run(artistId);
        return true;
    }
    catch (err) {
        throw err;
    }
}

exports.addArtist = (form) => {
    var sm_description = form.description.split(" ").slice(0, 20).join(" ") + "...";  
    let stmt = sql.prepare("INSERT INTO artist VALUES(?,?,?,?,?)");
    try {
        stmt.run(
            null,
            form.name,
            form.image,
            form.description,
            sm_description
        );
    } catch (err) {
        throw err;
    }
    
}

exports.getArtistById = (artistId)=>{
    var stmt = sql.prepare("select * from artist where artist_id = ?")
    let artist_info;
    try{
        artist_info = stmt.get(artistId);
        return artist_info;
    }
    catch (err){
        throw err;
    }
}


exports.getSongsByArtistId = (artistId) =>{
    var stmt = sql.prepare("select * from song where artist_id = ?");
    let songs;
    
    try{
        songs = stmt.all(artistId);
        console.log(songs);
        return songs;
    }
    catch (err){
        throw err;
    }
}

exports.removeSong = (songId)=>{
    var stmt = sql.prepare("delete from song where song_id = ? ");
    let song;
    try{
        song = stmt.run(songId);
        return true;
    }
    catch(err){
        throw err;
    }
}

exports.addSong = (name,artistId) =>{
    var stmt = sql.prepare("insert into song values (?,?,?)");
    try{
        stmt.run(artistId,null,name);
    }
    catch(err){
        throw err;
    }
}


exports.getSongsByUserId = (userId) =>{
    var stmt = sql.prepare("select * from liked where user_id = ?");
    let likedSongs;
    try{
        likedSongs = stmt.all(userId);
        return likedSongs;
    }
    catch (err){
        throw err;
    }
}

exports.getUsernameByUserId = (userId) =>{
    var stmt = sql.prepare("select username from user where user_id = ?");
    let username;
    try{
        username = stmt.get(userId);
        //console.log(username);
        return username;
    }
    catch(err){
        throw err;
    }
}

exports.removeSongByUserId = (songId,userId)=>{
    var stmt = sql.prepare("delete from liked where song_id = ? and user_id = ?");
    try{
        stmt.run(songId,userId);
    }
    catch (err){
        throw err;
    }
}

exports.addToMyPlaylist = (userId,artistId,songId,name)=>{
    var stmt = sql.prepare("insert into liked values (?,?,?,?)");
    let song;
    try{
        song = stmt.run(userId,artistId,songId,name)
    }
    catch (err){
        throw err;
    }
}

exports.checkUsername = (username)=>{
    var stmt = sql.prepare("select * from user where username = ?");
    let user;
    try{
        user = stmt.get(username);
        return user;
    }
    catch (err){
        throw err;
    }
}

exports.RegisterUser = (username,password) =>{
   // console.log(password);
    var stmt = sql.prepare("insert into user values(?,?,?)");
    try{
        let hashedPassword = bcrypt.hashSync(password, 10);
        stmt.run(null,username,hashedPassword);
    }
    catch (err){
        throw err;
    }
}


exports.doLoginUser = (username) => {
    var stmt = sql.prepare("select * from user where username = ?");
    console.log(username);
    let userTable;
    try{
        userTable = stmt.get(username);
        console.log(userTable);
        return userTable;
    }
    catch (err){
        throw err;
    }
}

exports.doLoginAdmin = (username) => {
    var stmt = sql.prepare("select * from admin where username = ?");
    let adminTable;
    try{
        adminTable = stmt.get(username);
        return adminTable;
    }
    catch (err){
        throw err;
    }
}