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
	console.log(obj);
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
	formalityIndicator(formalityScore, wordSuggestions);
}

function formalityIndicator(formalityScore, wordSuggestions){

	formalityHTML = "<h3>"+ formalityScore + "% <small>Formality Score</small></h3>";

	$("#formality-score").append(formalityHTML);

}

