$(document).ready(function(){
	$.ajax({
		type:"GET",
		url:"https://59e0f86c5142a10012463180.mockapi.io/hospital",
		DataType:"json",
		success:function(result){
			var text="";
			for (i = 0; i < result.length; i++) {
				text +="<tr><td>"+result[i].id+"</td><td>"+result[i].name
				+"</td><td>"+result[i].age+"</td><td>"+result[i].sex+"</td><td>"+
				result[i].adhar+"</td><td>"+result[i].address+"</td></tr>"
			}
			$("#tbody").html(text)
		}
	});
});