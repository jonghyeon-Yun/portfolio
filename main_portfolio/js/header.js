$(function(){
  $("#open_id").click(function(){
    $(this).css("display","none");
    $("#close_id").css("display","block");
    $("#headerUl_id").css("right","50px");
  });

  $("#close_id").click(function(){
    $(this).css("display","none");
    $("#open_id").css("display","block");
    $("#headerUl_id").css("right","-750px");
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
//배경화면
const images = ["back01.jpg","back02.jpg","back03.jpg","back04.jpg","back05.jpg","back06.jpg","back07.jpg","back08.jpg","back09.jpg","back10.jpg"];

const img = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");
bgImg.src = "./img/"+img;
let hds = document.getElementById("hd");
document.getElementById("hd").appendChild(bgImg);