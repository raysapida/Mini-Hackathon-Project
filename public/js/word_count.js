
// var body = "Mr. Jones,\nI have been researching our choices for internet providers over the past week, and I wanted to update you on my progress. We have two options: H.C. Cable and Toll South. Both offer business plans, and I will go over the business pricing of each plan at the meeting on Tuesday. Both of the business options I listed have comparable speed and data usage offerings as well. I called your personal provider, GoGo Satellite, but they did not have any business offerings. They primarily do residential internet service.\n I will talk with Joe and Susan in IT about these options and get their suggestions. I will also send out meeting requests to everyone, including Mr. Morris in operations. If you have any questions prior to the meeting, please let me know.\n Respectfully,\nTina McAden\nAdministrative Assistant\nJones Office Solutions\nhttp://www.jonesofficesolutions.com\n(555) 124-5678"


var toRemoveArray = ['&', 'and', 'I', 'the' , 'have', 'to', 'will', 'am', 'are', 'i'];


function wordCount(str){
  var strArray = str.toLowerCase().split(' ');
  var cleanStrArray = removeKeyWords(strArray,toRemoveArray);
  var wordMap = groupByOccurence(cleanStrArray);
  var sortedWords = sortByOccurence(wordMap);
  var topWords = selectTopWords(sortedWords, 5);
  var topWordsHTML = appendTopWords(topWords);
  return topWords;
}

function removeKeyWords(keepArray,toRemoveArray){
  keepArray = keepArray.filter( function( el ) {
    return toRemoveArray.indexOf( el ) < 0;
  } );
  return keepArray;
}

function groupByOccurence(arr){
    if(arr.length == 0)
    return null;
  var modeMap = {};
  var maxEl = arr[0], maxCount = 1;
  for(var i = 0; i < arr.length; i++)
  {
    var el = arr[i];
    if(modeMap[el] == null)
      modeMap[el] = 1;
    else
      modeMap[el]++;  
  }
    return modeMap;
}

function sortByOccurence(obj){
  var sortable = [];
  for (var word in obj)
    sortable.push([word, obj[word]])
    sortable.sort(function(a, b) {
      return b[1] - a[1];
    })
  return sortable;
}

function selectTopWords(arr, n){
  var topWords = [];
  if(arr.length < n){
    for(var i = 0 ; i < arr.length; i++){
      topWords.push(arr[i])
    }
  } else {
    for(var i = 0 ; i < n; i++){
      topWords.push(arr[i])
    }
  }
  return topWords
}

function appendTopWords(topWords){
  topWordsHTML = ""

  for(var i = 0; i < topWords.length; i++){
    topWordsHTML = topWordsHTML.concat("<span class='word-count'><span class='label label-primary'>" + topWords[i][0] + "</span>" + "<span class='label label-danger'>" + topWords[i][1] + "</span>" + "&nbsp;" + "</span>");
  }

  $("#top-words").append(topWordsHTML).css({"font-size": "1.5em", "height": "120px"});
}
