
/**
 * 将系统使用的js放在这个文件中，避免了将js的代码写到HTML中
 */
jQuery(document).ready(function($){ //页面加载完成，自动执行
	
	var data = { //参考 grammarModule.html中语法
			//取值语法
			"content":"<font color=\"red\">hello world</font>",
			"person":{"name":"王阳明","age":21},
			
			//逻辑语法
			"index":4,
			
			//遍历语法
			"personList":[
			              {"name":"王阳明","age":21},
			              {"name":"朱熹","age":30},
			              {"name":"程颢","age":50}
			              ],
			              
			//子模板嵌套
			"subData":{
				"content":"<font color=\"red\">hello world</font>",
				"person":{"name":"王阳明","age":21},
			},
			
			//辅助方法
			"s1":'hello ',
			"s2":"world"
	};
	
	//辅助方法
	template.helper('append', function (str1, str2) {
	    return str1 + str2;
	});
	
	var gmHTML = template('grammarModule',data); //动态获取的
	$('#grammarModuleDIV').html(gmHTML);
	
});

