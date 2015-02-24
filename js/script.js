/*
*  DON'T MODIFY THIS FILE UNLESS YOU KNOW WHAT YOU ARE DOING!
*  This file is important for the script to work.
*
*  @author: iKlem <iklem.d@gmail.com>
*  @version: 1.0
*/


//Array of gamemodes names, "shorts" names will be changed into respective "Title" names.
var gamemodesShorts = ["terrortown", "prop_hunt", "elevator", "murder", "cinema"];
var gamemodesTitle = ["Trouble in Terrorist Town", "Prop Hunt", "Elevator: Source", "Murder", "Cinema"];

/* DEBUG VALUES */
/* --- */

// Called when the number of files to download changes. - This function is needed to avoid error in console and to execute others functions
function SetFilesNeeded(needed) {
}
// Called at the start, tells us how many files need to be downloaded in total. - This function is needed to avoid error in console and to execute others functions
function SetFilesTotal(total) {
}
//Animation when page is loaded.
$("body").ready(function() {
  $("body").animate({opacity: 1}, 500);
});
// Called when a file starts downloading. The filename includes the entire path of the file;
// for example "materials/models/bobsModels/car.mdl".
function DownloadingFile(fileName) {
  $("#stateLoad").html("Downloading " + fileName);
}
// Called when the load status changes. This might be "Initializing Game Data", "Sending Client Info", etc.
function SetStatusChanged(status) {
  $("#stateLoad").html(status);
}
// Called when the loading screen finishes loading all assets.
function GameDetails(servername, serverurl, mapname, maxplayers, steamid, gamemode) {
  $("#servName").html(servername);
  for(index = 0; index < gamemodesShorts.length; index++) {
    if(gamemode == gamemodesShorts[index]) {
      $("#gameMode").html(gamemodesTitle[index]);
      $("#gmodIMG").attr("src", "/img/gamemodesIcons/" + gamemode + ".svg");
      break;
    } else {
      $("#gameMode").html(gamemode);
    }
  }
  $("#map").html(mapname);
}
