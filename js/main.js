$(document).ready(function(){
  $('#analyze').on('click', function(event){
    $( "#analyze" ).toggle(
      function() {
        $( this ).show("#sentiment");
      }, function() {
        $( this ).hide("#analyze");
      }
      );
    event.preventDefault();
    var body = document.getElementById('text-to-analyze').value
    wordCount(body);
    analyzeTone(body);
    timeToRead(body);
  })
})