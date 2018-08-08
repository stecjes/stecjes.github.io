$('<link />',{type:'text/css',rel:'stylesheet',href:'http://archief.sint-teresiacollege.be/vlot-stc/hb/halkaBox.min.css'}).appendTo('head');
$('<link />',{type:'text/css',rel:'stylesheet',href:'http://archief.sint-teresiacollege.be/vlot-stc/artikel.css'}).appendTo('head');
$('<script />',{type:'text/javascript',src:'http://archief.sint-teresiacollege.be/vlot-stc/hb/halkaBox.min.js'}).appendTo('head');
function _cp(cp,np){document.getElementById(cp).style.display='none';document.getElementById(np).style.display='inline';}
$(window).on("load",function(){
 var gs_script=document.getElementById("gs_stc_art");
 var gs_page=gs_script.src;
 halkaBox.options({animation: 'fade',theme: 'dark',hideButtons: true, preload: 2});
 halkaBox.run("_a"+gs_page.split('?')[1]);
 halkaBox.run("hb-single");
});
