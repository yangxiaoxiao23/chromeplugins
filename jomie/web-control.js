(function() {
	var $ = jQuery;
	var selectEl = $('div.location select');
	
	selectEl.change(function() {
		var s = document.createElement('script')
		s.innerText = "var ch = document.getElementsByTagName('select')[1].getAttribute('onchange');eval(ch)";
		document.body.appendChild(s);
	});

	var fun = function(value) {
		var os = selectEl.find('option');
		os.each(function() {
			$(this).attr('selected', false);
		});
		for ( var i = 0; i < os.length; i++) {
			var val = $(os[i]).attr('value');
			if (val === value) {
				$(os[i]).attr('selected', true);
				break;
			}
		}
		selectEl.trigger("change");
	}

	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
		console.log(sender.tab ? "来自内容脚本：" + sender.tab.url : "来自扩展程序");
		for (var p in request){
			var value = request[p];
			if(p == 'addr'){
				fun(value);
			} else if(p == 'dianma'){
				//电码
				$('#ctl00_SiteContentPlaceHolder_FormView1_rblTelecodeQuestion_0').click().trigger("change");
				
			} else if(p == 'username'){
				$('#ctl00_SiteContentPlaceHolder_FormView1_tbxAPP_SURNAME').val(value['xing']);
				$('#ctl00_SiteContentPlaceHolder_FormView1_tbxAPP_GIVEN_NAME').val(value['ming']);
				$('#ctl00_SiteContentPlaceHolder_FormView1_tbxAPP_FULL_NAME_NATIVE').val(value['chname']);
				
				var genderM = $('#ctl00_SiteContentPlaceHolder_FormView1_rblAPP_GENDER_0');
				var genderF = $('#ctl00_SiteContentPlaceHolder_FormView1_rblAPP_GENDER_1');
				genderM.attr('checked', false);
				genderF.attr('checked', false);
				if(value['gender'] == 'M'){
					genderM.attr('checked', true);
				} else {
					genderF.attr('checked', true);
				}
				$('#ctl00_SiteContentPlaceHolder_FormView1_ddlAPP_MARITAL_STATUS').val(value.maritalstatus);
				var day = value.birthday.split('-')[2];
				var month = value.birthday.split('-')[1];
				var year = value.birthday.split('-')[0];
				if(month == 1){
					month = 'JAN';
				} else if(month == 2){
					month = 'FEB';
				} else if(month == 3){
					month = 'MAR';
				} else if(month == 4){
					month = 'APR';
				} else if(month == 5){
					month = 'MAY';
				} else if(month == 6){
					month = 'JUN';
				} else if(month == 7){
					month = 'JUL';
				} else if(month == 8){
					month = 'AUG';
				} else if(month == 9){
					month = 'SEP';
				} else if(month == 10){
					month = 'OCT';
				} else if(month == 11){
					month = 'NOV';
				} else {
					month = 'DEC';
				}
				$('#ctl00_SiteContentPlaceHolder_FormView1_ddlDOBDay').val(day);
				$('#ctl00_SiteContentPlaceHolder_FormView1_ddlDOBMonth').val(month);
				$('#ctl00_SiteContentPlaceHolder_FormView1_tbxDOBYear').val(year);
			} else if(p == 'cengyongming'){ //曾用名
				if(value['one'] || value['two']) {
					$('#ctl00_SiteContentPlaceHolder_FormView1_rblOtherNames_0').click().trigger("change");
				} else {
					$('#ctl00_SiteContentPlaceHolder_FormView1_rblOtherNames_1').attr('checked', true);
				}
			}
		}
	});
})();