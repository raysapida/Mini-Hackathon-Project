// background.js

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function (tab) {
  // for the current tab, inject the "inject.js" file & execute it
  chrome.tabs.executeScript(tab.ib, {
    file: 'inject.js'
  });
});


chrome.extension.onMessage.addListener(
function (request, sender, sendResponse) {
    if (request.cmd == "postImage") {
        var imageSrc = request.data.imgSrc;
    }
});
