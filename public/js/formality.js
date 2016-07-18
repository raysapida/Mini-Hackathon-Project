// Takes in string of words and splits to array of words.

function analyzeFormality(str){
  var strArray = str.replace(/(\r\n|\n|\r)/gm," ").split(' ');
  var wordMap = groupByOccurence(strArray);
  formalityCounter(wordMap);
  return wordMap;
}

var formalityLibrary = [

{
  word: "Respectfully,",
  type: "Formal",
  comment: ""
},

{
  word: "got",
  type: "Informal",
  comment: "Consider using have."
},

{
  word: "cheers",
  type: "Informal",
  comment: "Consider changing to 'respectfully'."
},

{
  word: "prior",
  type: "Formal",
  comment: ""
},

{
  word: "researching",
  type: "Formal",
  comment: ""
},

{
  word: "&",
  type: "Informal",
  comment: "Consider changing to 'and'."
},

{
  word: "Mr.",
  type: "Formal",
  comment: ""
}	

];

function formalityCounter(obj){
  var wordSuggestions = [];
  var informalCount = 0;
  var formalCount = 0;

  for (var term in obj){
    for (var i = 0; i < formalityLibrary.length; i++){
      if (term.toLowerCase() === formalityLibrary[i].word.toLowerCase()){
        if (formalityLibrary[i].type === "Informal"){
          informalCount += 1;
          wordSuggestions.push(formalityLibrary[i]);
        }else{
          formalCount += 1;
        }
      }
    }
  }
  var formalityScore = ((formalCount/(formalCount+informalCount)) * 100 );
  appendFormalityIndicator(formalityScore);
  appendFormalitySuggestions(wordSuggestions);
  return formalityScore;
}

function appendFormalityIndicator(formalityScore){
  if (isNaN(formalityScore)){
    formalityHTML = "<h6>We don't have enough data to analyze your formality score.<br>Please provide a longer text.</h6>";
  }else{
    formalityHTML = "<h3>"+ formalityScore + "% <small>Formality Score</small></h3>";
  }
  $("#formality-score").append(formalityHTML);

}

function appendFormalitySuggestions(wordSuggestions){
  var suggestionHTML = ""
  suggestionHTML = suggestionHTML.concat("<hr>");
  if(wordSuggestions != ""){
    suggestionHTML = suggestionHTML.concat("<h4>How you can improve:</h4>");
    for (var i = 0; i < wordSuggestions.length; i++){
      var item = "<dl class='dl-horizontal'>" + "<dt>" + wordSuggestions[i].word + "</dt>" + "<dd>" + wordSuggestions[i].comment + "</dd>";
      suggestionHTML = suggestionHTML.concat(item);
    }
    suggestionHTML = suggestionHTML.concat("</dl>");
  } else {
    suggestionHTML = suggestionHTML.concat("<h6>We don't have enough data to provide suggestions on improving your formality score.</h6>");
  }

  $("#formality-score").append(suggestionHTML);
}

