chrome.pageAction.onClicked.addListener(function(tab) {
});

// When the extension is installed or upgraded ...
chrome.runtime.onInstalled.addListener(function() {
	// Replace all rules ...
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
	    // With a new rule ...
	    chrome.declarativeContent.onPageChanged.addRules([
	      {
	        conditions: [
	          new chrome.declarativeContent.PageStateMatcher({
				  pageUrl: { hostEquals: 'www.xuetangx.com', pathContains: 'courseware' },
	          })
	        ],
	        // And shows the extension's page action.
	        actions: [ new chrome.declarativeContent.ShowPageAction(), ]
						//new chrome.declarativeContent.RequestContentScript({
						//	js : ['play.js']}) ]
	      }
	    ]);
	});
});

chrome.webNavigation.onCompleted.addListener(function(details) {
	chrome.tabs.executeScript(null, { file: 'play.js' });
});
