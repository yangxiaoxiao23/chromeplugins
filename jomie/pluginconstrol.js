$(function(){
	var userinfo = window.userinfo;
	
	var chromeFun = function(cfg){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		  chrome.tabs.sendMessage(tabs[0].id, cfg, function(response) {
			 console.log($);
		  });
		});
	}
	
	$('#BEJ,#SHG,#GUZ,#CHE,#SNY').bind('click', function(){
		var val = $(this).attr('id');
		chromeFun({
			addr: val
		});
	});
	
	$('#dianma').bind('click', function(){
		chromeFun({
			dianma: true
		});
	});
	
	
	
	$('#username').bind('click', function(){
		chromeFun({
			username:　{
				xing: userinfo.enname.split(' ')[0],
				ming: userinfo.enname.split(' ')[1],
				chname: userinfo.username,
				gender: userinfo.gender,
				country: userinfo.country,
				birthday: userinfo.birthday,
				birthcountry: userinfo.birthcountry,
				birthprovince: userinfo.birthprovince,
				birthcity: userinfo.birthcity,
				maritalstatus: userinfo.maritalstatus,
			}
		});
	});
	
	if(userinfo['username2'] || userinfo['username3']){
		$('#dianma').after($('<button id="username2">填写曾用名</button>'));
		$('#username2') && $('#username2').bind('click', function(){
			chromeFun({
				  cengyongming: {
				  	one: userinfo.username2,
				  	two: userinfo.username3
			  	  }
			});
		});
	}
	
	
	$('#start').bind('click', function(){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		  chrome.tabs.sendMessage(tabs[0].id, {
			  addr : val
		  }, function(response) {
			 console.log($);
		  });
		});
	});
	
	$('#start').bind('click', function(){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {
				addr : val
			}, function(response) {
				console.log($);
			});
		});
	});
	
	$('#start').bind('click', function(){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {
				addr : val
			}, function(response) {
				console.log($);
			});
		});
	});
	
	$('#start').bind('click', function(){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {
				addr : val
			}, function(response) {
				console.log($);
			});
		});
	});
	
	$('#start').bind('click', function(){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {
				addr : val
			}, function(response) {
				console.log($);
			});
		});
	});
	
	$('#start').bind('click', function(){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {
				addr : val
			}, function(response) {
				console.log($);
			});
		});
	});
	
	$('#start').bind('click', function(){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {
				addr : val
			}, function(response) {
				console.log($);
			});
		});
	});
	
	$('#start').bind('click', function(){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {
				addr : val
			}, function(response) {
				console.log($);
			});
		});
	});
	
	$('#start').bind('click', function(){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {
				addr : val
			}, function(response) {
				console.log($);
			});
		});
	});
	
	$('#start').bind('click', function(){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {
				addr : val
			}, function(response) {
				console.log($);
			});
		});
	});
	
	$('#start').bind('click', function(){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {
				addr : val
			}, function(response) {
				console.log($);
			});
		});
	});
	
	$('#start').bind('click', function(){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {
				addr : val
			}, function(response) {
				console.log($);
			});
		});
	});
	
	$('#start').bind('click', function(){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {
				addr : val
			}, function(response) {
				console.log($);
			});
		});
	});
	
	$('#start').bind('click', function(){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {
				addr : val
			}, function(response) {
				console.log($);
			});
		});
	});
	
	$('#start').bind('click', function(){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {
				addr : val
			}, function(response) {
				console.log($);
			});
		});
	});
	
	$('#start').bind('click', function(){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {
				addr : val
			}, function(response) {
				console.log($);
			});
		});
	});
	
	$('#start').bind('click', function(){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {
				addr : val
			}, function(response) {
				console.log($);
			});
		});
	});
	
	$('#start').bind('click', function(){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {
				addr : val
			}, function(response) {
				console.log($);
			});
		});
	});
	
	$('#start').bind('click', function(){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {
				addr : val
			}, function(response) {
				console.log($);
			});
		});
	});
	
	$('#start').bind('click', function(){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {
				addr : val
			}, function(response) {
				console.log($);
			});
		});
	});
	
	$('#start').bind('click', function(){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {
				addr : val
			}, function(response) {
				console.log($);
			});
		});
	});
	
	$('#start').bind('click', function(){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {
				addr : val
			}, function(response) {
				console.log($);
			});
		});
	});
	
	$('#start').bind('click', function(){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {
				addr : val
			}, function(response) {
				console.log($);
			});
		});
	});
	
	$('#start').bind('click', function(){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {
				addr : val
			}, function(response) {
				console.log($);
			});
		});
	});
	
	$('#start').bind('click', function(){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {
				addr : val
			}, function(response) {
				console.log($);
			});
		});
	});
	
	$('#start').bind('click', function(){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {
				addr : val
			}, function(response) {
				console.log($);
			});
		});
	});
	
	$('#start').bind('click', function(){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {
				addr : val
			}, function(response) {
				console.log($);
			});
		});
	});
	
	$('#start').bind('click', function(){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {
				addr : val
			}, function(response) {
				console.log($);
			});
		});
	});
	
	$('#start').bind('click', function(){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {
				addr : val
			}, function(response) {
				console.log($);
			});
		});
	});
	
	$('#start').bind('click', function(){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {
				addr : val
			}, function(response) {
				console.log($);
			});
		});
	});
	
	$('#start').bind('click', function(){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {
				addr : val
			}, function(response) {
				console.log($);
			});
		});
	});
	
	$('#start').bind('click', function(){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {
				addr : val
			}, function(response) {
				console.log($);
			});
		});
	});
	
	$('#start').bind('click', function(){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {
				addr : val
			}, function(response) {
				console.log($);
			});
		});
	});
	
	$('#start').bind('click', function(){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {
				addr : val
			}, function(response) {
				console.log($);
			});
		});
	});
	
	$('#start').bind('click', function(){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {
				addr : val
			}, function(response) {
				console.log($);
			});
		});
	});
	
	$('#start').bind('click', function(){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {
				addr : val
			}, function(response) {
				console.log($);
			});
		});
	});
	
	$('#start').bind('click', function(){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {
				addr : val
			}, function(response) {
				console.log($);
			});
		});
	});
	
	$('#start').bind('click', function(){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {
				addr : val
			}, function(response) {
				console.log($);
			});
		});
	});
	
	$('#start').bind('click', function(){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {
				addr : val
			}, function(response) {
				console.log($);
			});
		});
	});
	
	$('#start').bind('click', function(){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {
				addr : val
			}, function(response) {
				console.log($);
			});
		});
	});
	
	$('#start').bind('click', function(){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {
				addr : val
			}, function(response) {
				console.log($);
			});
		});
	});
});


