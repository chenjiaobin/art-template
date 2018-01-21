/*TMODJS:{"version":15,"md5":"03bc9ad078821aba75ee4d097d987291"}*/
template('grammarModuleInclude',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,subVar=$data.subVar,$string=$utils.$string,$out='';$out+=' <div style="border-bottom: 1px solid #CCC;"> ';
$out+=$escape(subVar.content);
$out+='<br/> ';
$out+=$string(subVar.content);
$out+='<br/> ';
$out+=$escape(subVar.person.name);
$out+='-';
$out+=$escape(subVar.person.age);
$out+='<br/> </div> ';
return new String($out);
});