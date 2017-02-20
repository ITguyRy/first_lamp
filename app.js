$(document).ready(function(){
	//alert("its working")
// DOM OF THE WEBSITE 
	$("h1").html("Ask the magic 8-ball");

//Hides Navigation bar till clicked on button
	$(".nav").hide()
		$("#show").on("click", function(){
			$(".nav").show()
			$("#show").hide()
		});
	

}); //<-- End of Jquery Code --> 
