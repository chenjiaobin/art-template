/*TMODJS:{"version":7,"md5":"44184b60e802802e355663adf5c844c2"}*/
template('header',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,menu1=$data.menu1,menu2=$data.menu2,menu3=$data.menu3,$out='';$out+='<ul> <li>';
$out+=$escape(menu1);
$out+='</li> <li>';
$out+=$escape(menu2);
$out+='</li> <li>';
$out+=$escape(menu3);
$out+='</li> </ul>';
return new String($out);
});