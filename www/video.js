var exec = require("cordova/exec");

var VideoPlayer = function () {};

/**
 * Starts the video player intent
 *
 * @param url           The url to play
 */
VideoPlayer.prototype.play = function(url) {
    exec(null, null, "VideoPlayer", "playVideo", [url]);
};

var videoPlayer = new VideoPlayer();
module.exports = videoPlayer;