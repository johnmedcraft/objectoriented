//PLAYLIST
function Playlist() {
	this.songs = [];
	this.nowPlayingIndex = 0;
}
Playlist.prototype.add = function(song) {
	this.songs.push(song);
};
Playlist.prototype.play = function() {
	var currentSong = this.songs[this.nowPlayingIndex];
	currentSong.play();
};
Playlist.prototype.stop = function(){
	var currentSong = this.songs[this.nowPlayingIndex];
	currentSong.stop();
};
Playlist.prototype.next = function() {
	this.stop();
	this.nowPlayingIndex++;
	if(this.nowPlayingIndex === this.songs.length){
		this.nowPlayingIndex = 0;
	}
	this.play();
};
Playlist.prototype.renderInElement = function(list) {
	list.innerHTML = "";
	for(var i = 0; i < this.songs.length; i++){
		list.innerHTML += this.songs[i].toHTML();
	}
};
//SONG
function Song(title, artist, duration) {
	this.title = title;
	this.artist = artist;
	this.duration = duration;
	this.isPlaying = false;
}
Song.prototype.play = function() {
	this.isPlaying = true;
};
Song.prototype.stop = function() {
	this.isPlaying = false;
};
Song.prototype.toHTML = function() {
	var htmlString = '<li id="song"';
	if(this.isPlaying){
		htmlString += ' class="current"';
	}
	htmlString += '>';
	htmlString += this.title;
	htmlString += ' - ';
	htmlString += this.artist;
	htmlString += '<span class="duration"> ';
	htmlString += this.duration;
	htmlString += '</span></li>';
	return htmlString;
};
//APP
var playlist = new Playlist();
var wutangClanAintNuthinTaFWit = new Song("Wu-Tang Clan Aint Nuthing ta F' Wit", "Wu-Tang CLan", "3:36");
var loveDontLiveHereNoMore = new Song("Love Don't Live Here No More", "Ghostface Killah", "3:48");
var straightGutta = new Song("Straight Gutta", "Method Man", "3:59");
var gotYourMoney = new Song("Got Your Money", "Ol' Dirty Bastard", "3:59");
var grits = new Song("Grits", "RZA", "4:17");
var shadowBoxin = new Song("Shadowboxin'", "GZA", "3:29");
playlist.add(wutangClanAintNuthinTaFWit);
playlist.add(loveDontLiveHereNoMore);
playlist.add(straightGutta);
playlist.add(gotYourMoney);
playlist.add(grits);
playlist.add(shadowBoxin);
var playlistElement = document.getElementById("playlist");
playlist.renderInElement(playlistElement);
var playButton = document.getElementById("play");
playButton.onclick = function () {
	 playlist.play();
	 playlist.renderInElement(playlistElement);
}
var nextButton = document.getElementById("next");
nextButton.onclick = function () {
	 playlist.next(); 
	 playlist.renderInElement(playlistElement);
}
var stopButton = document.getElementById("stop");
stopButton.onclick = function () {
	 playlist.stop(); 
	 playlist.renderInElement(playlistElement);
}
// var songElement = document.getElementById("song");
// songElement.onclick = function (){
// 	playlist.stop();
// 	console.log(songElement);
// }
