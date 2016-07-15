function timeToRead(str){
  var wordsPerMinute = 225;
  var wordArray = str.split(' ');
  var timeInSeconds = (wordArray.length / wordsPerMinute) * 60;
  appendTimeToRead(Math.floor(timeInSeconds));
}



function appendTimeToRead(seconds){
  timeToReadHTML = "<h3>" + seconds + "<small> Seconds</small></h3>"

  $("#time-to-read").append(timeToReadHTML);
}