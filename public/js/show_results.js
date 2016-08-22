function showResults(){
  console.log("test");

  $(".result-wrapper").html("<h2>Results</h2><div class='row'><div class='col-md-6'><div class='panel panel-default'><div class='panel-heading'>Time to Read</div><div class='panel-body' id='time-to-read'></div></div></div><div class='col-md-6'><div class='panel panel-default'><div class='panel-heading'>Top 5 Words</div><div class='panel-body' id='top-words'></div></div></div></div><br><div class='panel panel-default'><div class='panel-heading'>Formality Indicator</div><div class='panel-body' id='formality-score'></div></div><br><div class='row'><div class='col-md-6'><div class='panel panel-default'><div class='panel-heading'>Emotions Analysis</div><div class='panel-body'><div id='donut-chart'></div></div></div></div><div class='col-md-6'><div class='panel panel-default'><div class='panel-heading'>Tone Analysis</div><div class='panel-body'><div id='tone'></div></div></div></div></div>");
}
