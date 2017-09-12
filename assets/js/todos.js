//Check off specific Todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation(); //to stop bubbling up the parent elements
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13)  { // 13 is charCode for "enter" key
		//grabbing new todoText from input
		var todoText = $(this).val();
		$(this).val(""); //to clear the input
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});