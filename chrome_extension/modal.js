$(document).ready(function() {   // Load the function after DOM ready.

var link1=chrome.extension.getURL("icon.png");     //Get absolute path of the file residing your extension.
var t1='<div id="pop"><a href=""><img id="mgt" src="'+link1+'"width="25" height="24"></a></div>'    //now set the src to absolute path.
$(".gb_Lb").prepend(t1);     //Insert MailGet icon into top-right corner of Gmail home.

var link2=chrome.extension.getURL("button_cancel.png");
var t2='<div id="pop_bg" style="height: 100%; width: 100%;"></div><div id="mgt_popup"><span class="popup_close"></span><div id="pop_inner"><label id="user"></label><input type="button" id="mailgett" value="Go To MailGet"/></div></div>'
$("body").append(t2);

$("#pop").click(function() {//click on injected mailget icon.
event.preventDefault();//first stop default behaviour of anchor.
$("#pop_bg").css("display", "block");//Show pop-up background.
$("#mgt_popup").css("display", "block");//Show pop-up div.
//Inject dynamically generated html from here( However i've used a string only).
$("#user").html("MailGet is an online Email Management Service which allow you to Send Bulk and Drip Emails<br><br>");
});

$(".popup_close").click(function(){//click close symbol hides popup
  $("#pop_bg").css("display", "none");
  $("#mgt_popup").css("display", "none");
});

$("#mailgett").click(function() { // click on "Go To Mailget" button hides popup and opens provided url in new tab.
  $("#pop_bg").css("display", "none");
  $("#mgt_popup").css("display", "none");
  window.open("https://www.formget.com/mailget/" , '_blank');
});
});
