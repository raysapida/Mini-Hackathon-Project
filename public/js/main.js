$(document).ready(function(){
  $('#analyze').on('click', function(event){
    $( this ).css({'background-color': 'grey'});
    $( this ).prop('disabled', true);
    event.preventDefault();
    if ($(this).disabled !== true) {
      showResults();
      var body = document.getElementById('text-to-analyze').value
      wordCount(body);
      analyzeTone(body);
      timeToRead(body);
      analyzeFormality(body);
    }

  })
})
