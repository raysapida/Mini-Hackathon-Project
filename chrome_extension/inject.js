
(function() {

  // just place a div at top right
  var div = document.createElement('div');
  div.style.position = 'fixed';
  div.style.bottom = 0;
  div.style.right = 0;
  div.style.zIndex = 1000;
  div.id = "icon";
  var img = document.createElement("IMG");
  var imgURL = chrome.extension.getURL("icon.png");
  img.src = imgURL;
  div.appendChild(img);
  document.body.appendChild(div);

  alert('inserted self... giggity');

})();

$("img").click(function(){

    var imageSrc = $(this).attr("src");

    //Post to a background page in the Chrome Extension
    chrome.extension.sendMessage({ cmd: "postImage", data: { imgSrc: imageSrc } }, function (response) {
        return response;
    });
});
