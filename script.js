var color;
var cgColor = function(c) {alert("You change colour to " + c + ".");color = c; return c;};
var setCc = function() {document.getElementById("colour-picker").style.display = "block";};
var closeCc = function() {document.getElementById("colour-picker").style.display = "none";};

$(document).ready(function() {
	$("#rateL").click(function(e) {
        
        e.preventDefault();
        var thisid = $(".logs").children().length;
        var tabId = 'num_' + thisid;
        
		var log = $("#log").val();
		var logC = $("#logC").val();
		if ((log === ""|| log === null) && (logC === "" || logC === null)) {
			$("#c").html("<span style='color: red'>Invalid log.</span>");
			alert("Your log is Blank!");
		}else {
            if (log==="" || log === null) {log = "Untitled." ;}
            else if (logC === "" || logC === null) {logC = "-";}
            $("main").css("display", "none");
            $("#progress, #bar").css("display", "block");
            var elem = document.getElementById("bar"); 
            var width = 1;
            var id = setInterval(frame, 6);
            function frame() {
                if (width >= 100) { clearInterval(id);$("main").css("display", "block");$("#progress, #bar").css("display", "none");}
                else {width++; elem.style.width = width + '%'; document.getElementById("label").innerHTML = width * 1 + '%';}
            }
            
            $(".logs").append("<li style='word-wrap: break-word; margin-top: 20px;' id='" + tabId + "'><span style='font-weight: bold; color: rgb(90, 90, 90); font-size: 20px'>" + log + "</span><br><span style='color: " + color + "!important;'>" + logC + "</span><span class='close' nameforid='" + tabId + "'> x </span></li>");
            $("#c").html("<span style='color: green'>" + "text was logged." + "</span>" + "<span style='font-size: 10px;'>" + "&nbsp;&nbsptitle was: " + log + "</span>");
            $("#st").remove();
        
        }	
	});
});
$(document).ready(function() {
	$("#rateIm").click(function() {
        var log = $("#log").val();
		var logC = $("#logC").val();
		if ((log === ""|| log === null) && (logC === "" || logC === null)) {
			$("#c").html("<span style='color: red'>Invalid log.</span>");
			alert("Your log is Blank!");
		}else {
            if (log==="" || log === null) {log = "Untitled." ;}
            else if (logC === "" || logC === null) {logC = "-";}
            $("main").css("display", "none");
            $("#progress, #bar").css("display", "block");
            var elem = document.getElementById("bar"); 
            var width = 1;
            var id = setInterval(frame, 6);
            function frame() {
                if (width >= 100) { clearInterval(id);$("main").css("display", "block");$("#progress, #bar").css("display", "none");}
                else {width++; elem.style.width = width + '%'; document.getElementById("label").innerHTML = width * 1 + '%';}
            }$(".imLogs").append("<li style='word-wrap: break-word; margin-top: 20px;'>" + "<span style='font-weight: bold; color: rgb(90, 90, 90); font-size: 20px'>" + log + "</span>" + "<br>" + "<span style='color: " + color + "!important;'>" + logC + "</span>" + "</li>");
            $("#c").html("<span style='color: green'>" + "text was logged." + "</span>" + "<span style='font-size: 10px;'>" + "&nbsp;&nbsptitle was: " + log + "</span>");
            $("#Ist").remove();
        }	
	});
});
$(document).ready(function(){
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');
		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');
		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});
});
