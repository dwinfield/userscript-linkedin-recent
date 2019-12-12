// ==UserScript==
// @name        LinkedIn Recent Feed 
// @match       *://*linkedin.com/feed/*
// @grant       none
// @version     1.0.0
// @author      Dave Winfield
// @description Switches your LinkedIn feed from "Top" to "Recent".
// @require     https://code.jquery.com/jquery-3.4.1.slim.min.js
// @downloadURL https://raw.githubusercontent.com/dwinfield/userscript-linkedin-recent/master/linkedin.js
// @supportURL  https://github.com/dwinfield/userscript-linkedin-recent
// @homepageURL https://github.com/dwinfield/userscript-linkedin-recent
// ==/UserScript==

$(function() {  
  //wait a couple of seconds before doing this.  LinkedIn doesn't get the newsfeed until after load.
  setTimeout(function(){
    
    //first search for the <artdeco-dropdown class=ember-view> that will contain the "Sort by" text
    var $correctParent = $('artdeco-dropdown.ember-view:contains(Sort by)').first();
    //search for the 'Sort by' text node and get the next sibling element and check it's contents
    var currentSelection = $correctParent.find('span:contains(Sort by)').next().text();
    if( currentSelection && currentSelection.indexOf("Recent") < 0 ) {
      //then search for the child element that has the word Recent in it, and click it.
      console.log("Changing Newsfeed to Recent");
      $correctParent.find('li :contains(Recent)').click();      
    } else {
      console.log('Newsfeed already set to Recent');
    }
  },2000); 
  
});
