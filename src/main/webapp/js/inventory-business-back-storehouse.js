window.onload=function(){
	// 点击查询显示领料单明细
	document.getElementById("find").onmousedown=function(){
		var a=document.getElementById("result");
		a.style.display="block";
	}
	// 点击批量操作取消领料单明细里的部分disabld
	document.getElementById("change").onmousedown=function(){
		var arr=document.getElementsByClassName("canChange");
		for(var i=0;i<arr.length;i++)
		arr[i].disabled=false;
	}	
}