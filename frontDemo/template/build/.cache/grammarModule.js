/*TMODJS:{"version":62,"md5":"9649968f8e2aa870dbaca2003a14fe6c"}*/
template('grammarModule',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,content=$data.content,$string=$utils.$string,person=$data.person,flag=$data.flag,index=$data.index,$each=$utils.$each,personList=$data.personList,include=function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);$out+=text;return $out;},s1=$data.s1,s2=$data.s2,$out='';$out+='<!DOCTYPE html> <html lang="utf-8"> <head> <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> <body>   <h2>1、取值语法</h2> <div style="border-bottom: 1px solid #CCC;"> ';
$out+=$escape(content);
$out+='<br/> ';
$out+=$string(content);
$out+='<br/> ';
$out+=$escape(person.name);
$out+='-';
$out+=$escape(person.age);
$out+='<br/> </div> <h2>2、逻辑语法</h2> <div style="border-bottom: 1px solid #CCC;">  ';
if(flag){
$out+=' 我是Flag <br/>';
}
$out+=' ';
if(!flag){
$out+=' 我不是Flag <br/>';
}
$out+=' ';
if(index == 0 ){
$out+=' index = 0 ';
}else if(index > 0 && index < 5){
$out+=' index 大于 0 并且 index 小于 5 ';
}else{
$out+=' index = ';
$out+=$escape(index);
$out+=' ';
}
$out+='<br/> </div> <h2>3、遍历语法（index，指下标）</h2> <div style="border-bottom: 1px solid #CCC;"> ';
$each(personList,function(person,index){
$out+=' <li>';
$out+=$escape(index);
$out+=' : ';
$out+=$escape(person.name);
$out+=' - ';
$out+=$escape(person.age);
$out+='</li> ';
});
$out+=' </div> <h2>4、子模板嵌套</h2> <div style="border-bottom: 1px solid #CCC;"> ';
include('./grammarSub');
$out+=' </div> <h2>5、辅助方法</h2> <div style="border-bottom: 1px solid #CCC;"> ';
$out+=$escape($helpers. append(s1 , s2));
$out+=' </div> <br/> <br/> <br/> <br/> </body> </html> ';
return new String($out);
});