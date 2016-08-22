function timeToRead(str){
  var wordsPerMinute = 225;
  var wordArray = str.split(' ');
  var timeInSeconds = (wordArray.length / wordsPerMinute) * 60;
  appendTimeToRead(Math.floor(timeInSeconds));
}


function appendTimeToRead(time){
  var timeToReadHTML = '';
  if(time <= 60){
    timeToReadHTML = "<h5>It will take an average person <span class='lead'> less than a minute </span> to read this text.</h5>"
  } else {
      var minutes = Math.round(time/60);
      if (minutes > 1) {
        timeToReadHTML = "<h5>It will take an average person <span class='lead'>" + minutes + " mins </span> to read this text.</h5>";
      } else {
          timeToReadHTML = "<h5>It will take an average person <span class='lead'>" + minutes + " min </span> to read this text.</h5>";
      }
    }

  $("#time-to-read").append(timeToReadHTML).css({"height": "120px"});
}
