$(document).ready(function() {
	$("#rateL").click(function() {
		var log = $("#log").val();
		var logC = $("#logC").val();
		var x;
		if ((log == ""|| log == null) && (logC == "" || logC == null)){
			$("#c").html("<span style='color: red'>Invalid log.</span>");
			alert("Your log is Blank!");
		}else if (log=="" || log == null) {
			log = "Untitled."
			var x = window.confirm("Are you sure you want to log: " + logC + "?");
		}else if (logC === "" || logC === null) {
			logC = "-"
			var x = window.confirm("Are you sure you want to log: " + logC + "?");
		}else {var x = window.confirm("Are you sure you want to log: " + logC + "?");}
		
		if (x === true){
		    $(".logs").append("<li style='color: black; word-wrap: break-word; list-style: inside;'>" + "<span style='font-weight: bold; color: rgb(90, 90, 90); font-size: 20px'>" + log + "</span>" + "<br>" + logC + "</li>")
			$("#c").html("<span style='color: green'>" + "text was logged." + "</span>")
			$("#st").remove()
		}else if (x === false) {
		    $("#c").html("<span style='color: red'>" + "request denied." + "</span>")
		}
	});
});
$(document).ready(function() {
	$("#rateIm").click(function(){
		var log = $("#log").val();
		var logC = $("#logC").val();
		if ((log == ""|| log == null) && (logC == "" || logC == null)){
			$("#c").html("<span style='color: purple'>Invalid log.</span>");
			alert("Your log is Blank!");
		}else if (log==="" || log == null) {
			log = "Untitled."
			var x = window.confirm("Are you sure you want to log: " + logC + "?");
		}else if (logC === "" || logC === null) {
			logC = "Blank"
			var x = window.confirm("Are you sure you want to log: " + logC + "?");
		}else {var x = window.confirm("Are you sure you want to log: " + logC + "?");}
		
		if (x === true){
		    $(".imLogs").append("<li style='color: black; word-wrap: break-word; list-style: inside;'>" + "<span style='font-weight: bold; color: rgb(90, 90, 90); font-size: 20px'>" + log + "</span>" + "<br>" + logC + "</li>");
			$("#c").html("<span style='color: green'>" + "text was logged." + "</span>")
			$("#Ist").remove()
		}else if (x === false) {
		    $("#c").html("<span style='color: red'>" + "request denied." + "</span>")
		}		
	})
});
//tab control
$(document).ready(function(){
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');
		
		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');
		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})
