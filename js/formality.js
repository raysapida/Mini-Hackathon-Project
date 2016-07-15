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
	console.log("Informal words count:");
	console.log(informalCount);
	console.log("Formal words count:");
	console.log(formalCount);
	console.log(wordSuggestions);

}

  //if word in obj is present in formalityLibrary,
  /// increment depending on type
  //// if type is Informal,
  ///// push suggestion to wordSuggestions


// FOR each word in the array, compare the word to formality library.


	// check if it's included
	// if it included, increment style type
		// push the word and the comments from the library to separate array.

//print out the separate array of suggestions.


