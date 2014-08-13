(function(){
	var $ = jQuery;
	
	var selectEl = $('div.location select');
	
	selectEl.change(function(){
		var s = document.createElement('script')
		s.innerText = "var ch = document.getElementsByTagName('select')[1].getAttribute('onchange');eval(ch)";
		document.body.appendChild(s);
	});
	
	var fun = function(){
	
		var os = selectEl.find('option');
		
		os.each(function(){
			$(this).attr('selected', false);
		});
		
		for(var i=0;i<os.length;i++){
			if($(os[i]).attr('value') === 'BEJ'){
				$(os[i]).attr('selected', true);
				break;
			}
		}
		
		selectEl.trigger("change");
	}
	
	
	
	chrome.runtime.onMessage.addListener(
	  function(request, sender, sendResponse) {
		console.log(sender.tab ?
					"来自内容脚本：" + sender.tab.url :
					"来自扩展程序");
		if (request.greeting == "您好")
		  sendResponse({farewell: "再见"});
		  fun();
	  });
})();