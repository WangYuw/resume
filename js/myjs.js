$(".lan").bind("click",function(event){
	var langue=event.target.getAttribute("data-langue");
	langue=parseInt(langue);
	$.each(langues,function(k,v){
	document.getElementsByClassName(k)[0].innerHTML=v[langue];
	});					
});