//한글자씩 나타나기
const content = "안녕하세요, \n Front-end Developer \n 신입 윤종현의 포트폴리오 입니다.";
const text = document.querySelector(".text");
let i = 0;

function typing(){
  if (i < content.length) {
    let txt = content.charAt(i);
    text.innerHTML += txt === "\n" ? "<br/>": txt;
    i++;
    }
}
setInterval(typing, 100)

$(function(){
  $("#name").animate({
    "top":"50px",
    "opacity":"1"
  },500);
  $("#name2").delay(500).animate({
    "top":"100px",
    "opacity":"1"
  },500);

  $("#open_id").click(function(){
    $(this).css("display","none");
    $("#close_id").css("display","block");
    $("#headerUl_id").css("right","50px");
  });

  $("#close_id").click(function(){
      $(this).css("display","none");
      $("#open_id").css("display","block");
      $("#headerUl_id").css("right","-1000px");
  })

  $("#headerUl_id > li").eq(0).click(function(){
    $(window).scrollTop(0);
  });
  $("#headerUl_id > li").eq(1).click(function(){
    $(window).scrollTop(800);
  });
  $("#headerUl_id > li").eq(2).click(function(){
    $(window).scrollTop(1700);
  });
  $("#headerUl_id > li").eq(3).click(function(){
    $(window).scrollTop(2600);
  });
  $("#headerUl_id > li").eq(4).click(function(){
    $(window).scrollTop(3500);
  });
  $("#reload").click(function(){
    location.reload();
    $(window).scrollTop(0);
  });

  $("#up_id").click(function(){
    $(window).scrollTop(0);
    $("#bottom_ul").css("top","0px")
    $("up_id").css("opacity","1");
    $("#bottom_ul > li").eq(0).css("cursor","default");
  });
  $("#down_id").click(function(){
    $(window).scrollTop(3500);
    $("down_id").css("opacity","0");
  });

  $(window).scroll(function(){
    if(this.scrollY >= 800){
      $(".header_div").addClass("fixed");
    }
    else{
      $(".header_div").removeClass("fixed");
    }
  });
  $(window).scroll(function(){
    var $tops = $(this).scrollTop();
    if($tops == 0){
      $("#bottom_ul > li").eq(0).css("opacity","0");
      $("#bottom_ul > li").eq(0).css("cursor","default");
    }
    if($tops > 0){
      $("#bottom_ul").stop().animate({
        "top" : $tops + "px"
      },0);
      $("#bottom_ul > li").eq(0).css("opacity","1");
      $("#bottom_ul > li").eq(0).css("cursor","pointer");
    }
  });
});