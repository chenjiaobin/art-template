
/**
 * 将系统使用的js放在这个文件中，避免了将js的代码写到HTML中
 */
jQuery(document).ready(function($){ //页面加载完成，自动执行
	
	//跨域参数要加：?callback=?
	var url = "http://localhost:8080/restDemo/getDataCross.html?callback=?";
	$.jsonp({
		"url":url,
		"success":function(data){
			
			//辅助方法
			template.helper('append', function (str1, str2) {
			    return str1 + str2;
			});
			
			var gmHTML = template('grammarModule',data); //动态获取的
			$('#grammarModuleDIV').html(gmHTML);
		},
		
		"error":function(d,msg){
			alert('error');
		}
	});
	
});

