$(document).ready(function(){
  
  $(window).load(function(){
    //change section height to height of window
    var height = $(window).height();
    $('.background-image').height(height);
  });
  
  // when window us resizes
  $(window).resize(function(){
    //change section height to height of window
    var height = $(window).height();
    $('.background-image').height(height);
  });

  // $('.main-title').hover(
  //   function(){
  //     $(this).addClass('fancy-title', 1000);
  //     $('.fancy-title').lettering();
  //   },
  //   function(){
  //     $(this).removeClass('fancy-title', 1000);
  //   }
  // )


  var addFancyLettering = function(){
    $('.fancy-title').lettering(); 
  }

  var animateBase = 1000;
  var change = 25;
  var delay = 500;

  var changeColors = function(){
    $('.char1').delay(delay).animate({color: "#FE1344"}, (animateBase + change*1));
    $('.char2').delay(delay).animate({color: "#FE3344"}, (animateBase + change*2));
    $('.char3').delay(delay).animate({color: "#FE5344"}, (animateBase + change*3));
    $('.char4').delay(delay).animate({color: "#FE6344"}, (animateBase + change*4));
    $('.char5').delay(delay).animate({color: "#FE7344"}, (animateBase + change*5));
    $('.char6').delay(delay).animate({color: "#FE9344"}, (animateBase + change*6));
    $('.char7').delay(delay).animate({color: "#FEB344"}, (animateBase + change*7));
    $('.char8').delay(delay).animate({color: "#FEC344"}, (animateBase + change*8));
    $('.char9').delay(delay).animate({color: "#FED344"}, (animateBase + change*9));
    $('.char9').delay(delay).animate({color: "#fbFb55"}, (animateBase + change*10));
    $('.char10').delay(delay).animate({color: "#fbFb55"}, (animateBase + change*11));
    $('.char11').delay(delay).animate({color: "#cbFb55"}, (animateBase + change*12));
    $('.char12').delay(delay).animate({color: "#abFb55"}, (animateBase + change*13));
    $('.char13').delay(delay).animate({color: "#8bFb55"}, (animateBase + change*14));
    $('.char14').delay(delay).animate({color: "#6bFb55"}, (animateBase + change*15));
    $('.char15').delay(delay).animate({color: "#4bFb55"}, (animateBase + change*16));
    $('.char16').delay(delay).animate({color: "#2bFb55"}, (animateBase + change*17));
    $('.char17').delay(delay).animate({color: "#1bFb55"}, (animateBase + change*18));
    $('.char18').delay(delay).animate({color: "#0bFb55"}, (animateBase + change*19));
  }


  addFancyLettering();
  changeColors();

  $(function(){
    $("#slides").slidesjs({
      width: 717,
      height: 538,
      navigation: {
        active: false,
        effect: "fade"
      },
      pagination: {
        active: false,
        effect: "fade"
      }
    });
  });

});
