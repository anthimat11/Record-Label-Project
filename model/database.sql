CREATE TABLE "Admin" (
	"admin_id"	TEXT NOT NULL UNIQUE,
	"username"	TEXT NOT NULL,
	"password"	TEXT NOT NULL,
	PRIMARY KEY("admin_id")
)

CREATE TABLE "Artist" (
	"artist_id"	INTEGER NOT NULL UNIQUE,
	"name"	TEXT NOT NULL,
	"image"	TEXT NOT NULL,
	"descr"	TEXT,
	"sm_description" TEXT NOT NULL,
	PRIMARY KEY("artist_id")
)

CREATE TABLE "Liked" (
	"song_id"	TEXT NOT NULL,
	"user_id"	TEXT NOT NULL,
	"name"	TEXT NOT NULL
)

CREATE TABLE "Song" (
	"artist_id"	INTEGER NOT NULL,
	"song_id"	INTEGER NOT NULL UNIQUE,
	"name"	TEXT NOT NULL,
	PRIMARY KEY("song_id")
)

CREATE TABLE "User" (
	"user_id"	TEXT NOT NULL,
	"username"	TEXT NOT NULL,
	"password"	TEXT NOT NULL,
	PRIMARY KEY("user_id")
)