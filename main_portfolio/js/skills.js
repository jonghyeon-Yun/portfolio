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
});
