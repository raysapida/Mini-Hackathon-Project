// Takes in string of words and splits to array of words.

function analyzeFormality(str){
	
	var strArray = str.replace(/(\r\n|\n|\r)/gm," ").split(' ');
	var wordMap = groupByOccurence(strArray);
	formalityCounter(wordMap);
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
	comment: "Consider using have"
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
	type: "formal",
	comment: ""
}	

];

function formalityCounter(obj){
	var wordSuggestions = [];
	var informalCount = 0;
	var formalCount = 0;
	for (var term in obj){
		// console.log(term);
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
}

function appendFormalityIndicator(formalityScore){

	formalityHTML = "<h3>"+ formalityScore + "% <small>Formality Score</small></h3>";

	$("#formality-score").append(formalityHTML);

}

function appendFormalitySuggestions(wordSuggestions){
	var suggestionHTML = "<hr><h4>How you can improve:</h4><dl class='dl-horizontal'>"
	
	for (var i = 0; i < wordSuggestions.length; i++){
		suggestionHTML = suggestionHTML.concat("<dt>" + wordSuggestions[i].word + "</dt>" + "<dd>" + wordSuggestions[i].comment + "</dd>")
	}

	suggestionHTML = suggestionHTML.concat("</dl>");

	$("#formality-score").append(suggestionHTML);
}

