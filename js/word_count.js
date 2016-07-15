var toRemoveArray = ['and', 'I', 'the' , 'have', 'to', 'will'];


function wordCount(str){
  var strArray = str.split(' ');
  var cleanStrArray = removeKeyWords(strArray,toRemoveArray);
  var wordMap = groupByOccurence(cleanStrArray);
  var sortedWords = sortByOccurence(wordMap);
  var topWords = selectTopWords(sortedWords, 5);
  var topWordsHTML = appendTopWords(topWords);
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
  for(var i = 0 ; i < n; i++){
    topWords.push(arr[i])
  }
  return topWords
}

function appendTopWords(topWords){
  topWordsHTML = ""

  for(var i = 0; i < topWords.length; i++){
    topWordsHTML = topWordsHTML.concat("<span class='label label-primary'>" + topWords[i][0] + "</span>" + "<span class='label label-danger'>" + topWords[i][1] + "</span>" + "&nbsp;");
  }

  $("#top-words").append(topWordsHTML);
}