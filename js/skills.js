$(function(){
  $("#skills_id > label").mouseenter(function(){
    var $a = $(this).index();
    //$("#skills_id > label").eq($a).css("background","conic-gradient(black 50%, white 0 100%,)");
    if($a <= 1){
      $("#skills_id > label").eq($a).css("background","conic-gradient(black 90%, white 90% 100%)");
    }
    else if($a <= 3){
      $("#skills_id > label").eq($a).css("background","conic-gradient(black 80%, white 80% 100%)");
    }
    else if($a == 4){
      $("#skills_id > label").eq($a).css("background","conic-gradient(black 60%, white 60% 100%)");
    }
    else{
      $("#skills_id > label").eq($a).css("background","conic-gradient(black 50%, white 50% 100%)");
    }
  });

  $("#skills_id > label").mouseleave(function(){
    var $a = $(this).index();
    $("#skills_id > label").eq($a).css("background","white");
  });

  $("#skills_id > label").click(function(){
    var $a = $(this).index();
    if($(".skills_div2 > span").eq($a).css("display") == "block"){
      $("#skills_id").css("opacity","1");
      $(".skills_div2 > span").css("display","none");
      $(".skill_div3 > span").css("display", "none");
    }
    else{
      $("#skills_id").css("opacity","0.3");
      $(".skills_div2 > span").css("display","none");
      $(".skills_div2 > span").eq($a).css("display","block");
      $(".skill_div3 > span").css("display","none");
      $(".skill_div3 > span").eq($a).css("display","block");
    }
  });
});
