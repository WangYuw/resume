//Langue 
$("#lan").bind("click",function(event){
	var langue=event.target.getAttribute("data-langue");
	langue=parseInt(langue);
	$.each(langues,function(k,v){
		document.getElementsByClassName(k)[0].innerHTML=v[langue];
	});					
});

//chart
var data=[{value:80, color:"#E87E04"},{value:20, color:"#FFFFFF"},];
var myChart=new Chart(document.getElementById("htmlcss").getContext("2d")).Doughnut(data);

var data=[{value:50, color:"#E87E04"},{value:50, color:"#FFFFFF"},];
var myChart=new Chart(document.getElementById("javascript").getContext("2d")).Doughnut(data);

var data=[{value:40, color:"#E87E04"},{value:60, color:"#FFFFFF"},];
var myChart=new Chart(document.getElementById("jquery").getContext("2d")).Doughnut(data);

var data=[{value:60, color:"#E87E04"},{value:50, color:"#FFFFFF"},];
var myChart=new Chart(document.getElementById("javaee").getContext("2d")).Doughnut(data);

var data=[{value:70, color:"#E87E04"},{value:30, color:"#FFFFFF"},];
var myChart=new Chart(document.getElementById("java").getContext("2d")).Doughnut(data);

var data=[{value:80, color:"#E87E04"},{value:20, color:"#FFFFFF"},];
var myChart=new Chart(document.getElementById("bootstrap").getContext("2d")).Doughnut(data);

var data=[{value:95, color:"#E87E04"},{value:5, color:"#FFFFFF"},];
var myChart=new Chart(document.getElementById("office").getContext("2d")).Doughnut(data);

var data=[{value:90, color:"#E87E04"},{value:10, color:"#FFFFFF"},];
var myChart=new Chart(document.getElementById("git").getContext("2d")).Doughnut(data);

var data=[{value:50, color:"#E87E04"},{value:50, color:"#FFFFFF"},];
var myChart=new Chart(document.getElementById("french").getContext("2d")).Doughnut(data);

var data=[{value:67, color:"#E87E04"},{value:33, color:"#FFFFFF"},];
var myChart=new Chart(document.getElementById("english").getContext("2d")).Doughnut(data);

var data=[{value:100, color:"#E87E04"},{value:0, color:"#FFFFFF"},];
var myChart=new Chart(document.getElementById("chinese").getContext("2d")).Doughnut(data);