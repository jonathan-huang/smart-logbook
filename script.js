var color; var stateOfLog = "";
var cgColor = function(c) {setBar("Set color to " + c); color = c; return c;};
var cgBI = function(theme, image, color) { setBar("Set theme to " + theme); document.body.style.backgroundImage = "url(" + image + ")";  document.getElementById("title").style.color = color;};
var setCc = function(){$("main").css("opacity", "0.5"); $("#colour-picker").css({"display":"block", "opacity":"1"}); };
var closeCc = function() {$("#colour-picker").css("display", "none"); $("main").css({"opacity":"1"}) };
var setBi = function() {$("main").css("opacity", "0.5"); $("#themes").css({"display":"block", "opacity":"1"}); };
var closeBi = function() {$("#themes").css("display", "none"); $("main").css({"opacity":"1"}) };
var setBar = function(text) {$("#snackbar").html("<span style='color:white'>" + text + "...</span>"); var x = document.getElementById("snackbar"); x.className = "show"; setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2000);};
$(document).ready(function() { 
    $("#rateIm").click(function() {
        if (stateOfLog === "important") {stateOfLog = ""; $(this).removeClass("true").css("color", "lightgrey"); } else {stateOfLog = "important"; $(this).addClass("true");}
    });
    $("#rateL").click(function() {
        var date = new Date();
        if (stateOfLog === "") { stateOfLog = ""; }
        var log = $("#log").val(); var logC = $("#logC").val();
        var run = function() {if (width >= 100) {clearInterval(id); $("main").show(); $("#progress").hide()} else {width++; elem.style.width = width + '%'; }};
        if ((log === ""|| log === null) && (logC === "" || logC === null)) {
            setBar("Your log is blank.");
		}else {
            var elem = document.getElementById("bar"); var width = 1; var id = setInterval(run, 6); var description =  "<br><span class='description' style='color: " + color + "!important;font-size: 15px;font-weight: normal;'>&nbsp;&nbsp;&nbsp;" + logC + "</span>";
            var options = { weekday: "long", year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" };
            if (log==="" || log === null) {log = "Untitled." ;} else if (logC === "" || logC === null) {logC = "-";}
            $("main").css("display", "none"); $("#progress, #bar").css("display", "block");       
            $(".logs").prepend("<li class='LoggingNotes' tabindex='0''>" + log + "<span class='date'>"+date.toLocaleTimeString("en-us", options)+"</span>" + description + "<span class='close'> x <span style='font-size: 10px'>" + stateOfLog.slice(0, 2) + "</span></span></li>");
            setBar("title was: " + log); $("#st").remove();  } 
    });
    $(".nav-tabs").on("click", "a", function (e) {
        e.preventDefault(); if (!$(this).hasClass('add-tab')) {$(this).tab('show'); }
    })
    .on("click", "span", function () {
        var anchor = $(this).siblings('a'); $(anchor.attr('href')).remove();
        $(this).parent().remove();
        $(".nav-tabs li").children('a').first().click();
    });
    $('.add-tab').click(function (e) {
        e.preventDefault();
        var id = $(".nav-tabs").children().length; var tabId = 'contact_' + id;
        $(this).closest('li').before('<li><a href="#contact_' + id + '">New Tab</a> <span> x </span></li>');
        $('.tab-content').append('<div class="tab-pane" id="' + tabId + '"><h1 class="head">Still Developing..</h1></div>');
        $('.nav-tabs li:nth-child(' + id + ') a').click();
    });
});
