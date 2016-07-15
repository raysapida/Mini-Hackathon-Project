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
    // createGraph();
    var body = document.getElementById('text-to-analyze').value
    wordCount(body);
    analyzeTone(body);
  })
})

function analyzeTone(str){
  var ajaxRequest = $.ajax({
      url: "http://sentimail-api.herokuapp.com/tone",
      method: "POST",
      data: {content: str},
      });

    ajaxRequest.done(createToneChart);

    ajaxRequest.fail(function(){
      console.log("Ajax call failed");
    });
}

function createToneChart(responseData) {
  console.log(responseData);
}