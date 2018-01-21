/*TMODJS:{"version":14,"md5":"0c304413e189ea395c3dc90131a061ea"}*/
template('grammarSub',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,subData=$data.subData,$escape=$utils.$escape,$string=$utils.$string,$out='';$out+=' ';
if(subData){
$out+=' ';
$out+=$escape(subData.content);
$out+='<br/> ';
$out+=$string(subData.content);
$out+='<br/> ';
$out+=$escape(subData.person.name);
$out+='-';
$out+=$escape(subData.person.age);
$out+='<br/> ';
}
$out+=' ';
return new String($out);
});