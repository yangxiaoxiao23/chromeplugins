var a = $('#BJ');
a.bind('click', function(){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	  chrome.tabs.sendMessage(tabs[0].id, {greeting: "您好"}, function(response) {
		 //console.log(response.farewell);
	  });
	});

});
