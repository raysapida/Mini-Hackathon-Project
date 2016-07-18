function timeToRead(str){
  var wordsPerMinute = 225;
  var wordArray = str.split(' ');
  var timeInSeconds = (wordArray.length / wordsPerMinute) * 60;
  appendTimeToRead(Math.floor(timeInSeconds));
  return Math.floor(timeInSeconds);
}


function appendTimeToRead(seconds){
  timeToReadHTML = "<h5>It will taken an average person <span class='lead'>" + seconds + " seconds</span> to read this text.</h5>"

  $("#time-to-read").append(timeToReadHTML).css({"height": "120px"});;
}
