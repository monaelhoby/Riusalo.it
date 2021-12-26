
$(document).ready(function(){
        


  $('.nav-item').click(function(){
      $(this).addClass("active")
      $(this).siblings(".nav-item").removeClass("active")
  })

  $('.nav-item-last').click(function(){
      $(this).removeClass("active")
  })

  $('.navbar-nav .dropdown').click(function(){
    $(this).removeClass("active")
})

$('.select-checkbox .placeholder').click(function(){
    $(this).siblings(".checkbox").toggle(".hidebox")
    // console.log(!$(".checkbox").hasClass('hidebox'))
    if(!$(".checkbox").hasClass('hidebox')){
        $(this).siblings(".icon-arrow-up").css("display", "inline-block")
        $(this).siblings(".icon-arrow-down").css("display", "none")
    }
    if($(".checkbox").hasClass('hidebox') !== false){
        $(this).siblings(".icon-arrow-down").css("display", "inline-block")
        $(this).siblings(".icon-arrow-up").css("display", "none")
    }
})

    $("navbar .show img").click(function(){
        console.log("mkj")
    })

});
