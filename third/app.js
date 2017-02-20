$(document).ready(function(){
	// Validation Form Function
	$("#name").on("click", function(){
		var name = $("#name1").val();
			$("#area").text(name);
	//If name = to nothing then have the alert; if else they did enter a name then put Hello + name entered
			if (name === "")
				alert("please put a name");
			else { alert("Hello " + name)
			}
	}); // End of var function

	




}); //<-- End of Jquery Code --> 