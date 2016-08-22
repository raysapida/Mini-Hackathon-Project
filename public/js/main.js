$(document).ready(function(){
  $('#text-to-analyze').on('input', function(e){
      console.log(" text has been changed!");
    })

  $('#analyze').on('click', function(event){
    event.preventDefault();
      showResults();
      var body = document.getElementById('text-to-analyze').value
      wordCount(body);
      analyzeTone(body);
      timeToRead(body);
      analyzeFormality(body);
  })
})
