var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  var playlistsInLibrary = library["playlists"];
  var playlistNames = Object.keys(playlistsInLibrary);

  for (var playlist of playlistNames) {
    console.log(playlistsInLibrary[playlist].id + ": " + playlistsInLibrary[playlist].name + " - " + playlistsInLibrary[playlist].tracks.length + " tracks");
  }
}


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  var tracksInLibrary = library["tracks"];
  var trackNames = Object.keys(tracksInLibrary);

  for (var track of trackNames) {
    console.log(tracksInLibrary[track].id + ": " + tracksInLibrary[track].name + " by " + tracksInLibrary[track].artist + " (" + tracksInLibrary[track].album + ")");
  }
}


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  var playlistsInLibrary = library["playlists"];
  var tracksInLibrary = library["tracks"];

  console.log(playlistsInLibrary[playlistId].id + ": " + playlistsInLibrary[playlistId].name + " - " + playlistsInLibrary[playlistId].tracks.length + " tracks");

  var trackNames = playlistsInLibrary[playlistId].tracks;

  for (var track of trackNames) {
    console.log(tracksInLibrary[track].id + ": " + tracksInLibrary[track].name + " by " + tracksInLibrary[track].artist + " (" + tracksInLibrary[track].album + ")");
  }
}


// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  var playlistsInLibrary = library["playlists"];
  var tracksInLibrary = library["tracks"];

  if (playlistsInLibrary[playlistId] && tracksInLibrary[trackId]) {
    playlistsInLibrary[playlistId].tracks.push(trackId);
    console.log("Track added successfully.");
  }
  else {
    console.log("Please enter an existing track and an existing playlist.");
  }
}


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {
  var tracksInLibrary = library["tracks"];
  var newId = uid();

  tracksInLibrary["t" + newId] = {
    "id" : "t" + newId,
    "name" : name,
    "artist" : artist,
    "album" : album
  };
  console.log("Track added successfully.");
}


// adds a playlist to the library

var addPlaylist = function (name) {
  var playlistsInLibrary = library["playlists"];
  var newId = uid();

  playlistsInLibrary["p" + newId] = {
    "id" : "p" + newId,
    "name" : name,
    "tracks" : []
  };
  console.log("Playlist added successfully.");
}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}