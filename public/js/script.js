var clickFunc=function(e){
	alert(e.target.id);
}

document.getElementById("clickHere").addEventListener('click',clickFunc,false);