$(function(){
  $("#about_ol > li").click(function(){
    if($("#about_ul > li").css("opacity") == "1"){
      $("#about_ul > li").animate({
        "margin-right":"-200px",
        "opacity":"0"
      });
    }
    else{
      $("#about_ul > li").animate({
        "margin-right":"0",
        "opacity":"1"
      });
    }
  });
});