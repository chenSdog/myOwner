window.onload = function(){
	var divs = document.querySelectorAll("div");
	divs.forEach(function(element,index){
		console.log(divs[index].innerHTML + "--" + element);	
	});
	
}
