
$(document).ready(function(){
    $('.slider').slick({
    //   setting-name: setting-value
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay : true ,
    autoplaySpeed : 1500 ,
    arrows : false ,
    prevArrow : '.prev',
    nextArrow : '.next',
    responsive: [
      {
        breakpoint: 1250,
        settings: {
        } ,
      } ,
      {
        
        breakpoint: 995,
        settings: {
          slidesToShow: 1,

        } ,
      } , 
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,

        } 

      } , 
    ]
    });
  });

$(document).ready(function(){
    $('.slider_section').slick({
    //   setting-name: setting-value
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay : true ,
    autoplaySpeed : 1500 ,
    arrows : false ,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
        } ,
      } ,
      {
        
        breakpoint: 995,
        settings: {
    slidesToShow: 1,
           slidesToShow: 1,

        } ,
      } , 
      {
        breakpoint: 650,
        settings: {
        slidesToShow: 1,
          slidesToShow: 1,

        } 

      } , 
    ]
    });
  });
   
  
  $('.fa-x').click(function(){
    $('.peross').hide()
  })
  $('.loka').click(function(){
    $('.peross').show()
  })
  $('.fa-user').click(function(){
    $('.peross').show()
  })
  $('.fa-bars').click(function(){
    $('.fa-xmark').show()
    $(this).hide()
  })
  $('.fa-xmark').click(function(){
    $('.fa-bars').show()
    $(this).hide()
  })
  $('.fa-xmark').click(function(){
    $('.three').hide()
    $(this).hide()
  })
  $('.fa-bars').click(function(){
    $('.three').show()
    $(this).hide()
    
  })
  $('.fa-arrow-up').click(function(){

    window.scrollTo({
      top : 0 ,
      left : 0
    })
  })
  $(window).scroll(()=>{
    if(scrollY >= 200){
      $('.fa-arrow-up').css({display : 'flex'})
    }else{
      
      $('.fa-arrow-up').css({display : 'none'})
    }

  })
