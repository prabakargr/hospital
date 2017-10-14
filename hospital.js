$(document).ready(function(){
	$("#submit_data").click(function(){
		var patient={
			name:$("#name").val(),
			age:$("#age").val(),
			sex:$("#sex").val(),
			adhar:$("#adhar").val(),
			address:$("#address").val()
		}
		$.post("https://59e0f86c5142a10012463180.mockapi.io/hospital",patient)
	});
});