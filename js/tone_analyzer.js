function analyzeTone(str){
  var ajaxRequest = $.ajax({
      url: "http://sentimail-api.herokuapp.com/tone",
      method: "POST",
      data: {content: str},
      });

    ajaxRequest.done(createToneChart);
    ajaxRequest.done(createStackedBarChart);
    ajaxRequest.fail(function(){
      console.log("Ajax call failed");
    });
}
