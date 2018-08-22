//= require jquery3

$(document).ready(function(){

  var $carrousel = $('#carousel'),
      $img = $('#carousel img'),
      indexImg = $img.length - 1,
      i = 0,
      $currentImg = $img.eq(i);


      $img.css('display', 'none');
      $currentImg.css('display', 'block');

/* =========== ESSAI AFFICHAGE BOUTON LIE A IMAGE ============
  function showButton(){
    if(indexImg == 0) {
      console.log(indexImg)
      console.log($currentImg)
      $('.btn-container span').css('border', '2px solid brown');
      $('choice1').css('border', '10px solid brown');
    }
    else if(indexImg == 1) {
      console.log(indexImg)
      console.log($currentImg)
      $('.btn-container span').css('border', '2px solid brown');
      $('choice2').css('border', '10px solid brown');
    }
    else {
      console.log(indexImg)
      console.log($currentImg)
      $('.btn-container span').css('border', '2px solid brown');
      $('choice3').css('border', '10px solid brown');
    }
  };

  showButton();
*/

  $('.choice1').on('click', function(){
    $('.btn-container span').css('border', '2px solid white');
    $('.choice1').css('border', '7px solid white');
  });

   $('.choice2').on('click', function(){
    $('.btn-container span').css('border', '2px solid white');
     $('.choice2').css('border', '7px solid white');
  });

    $('.choice3').on('click', function(){
      $('.btn-container span').css('border', '2px solid white');
      $('.choice3').css('border', '7px solid white');
  });

  $('.next').on('click', function(){

      i++;

      if( i <= indexImg ){
          $img.css('display', 'none');
          $currentImg = $img.eq(i);
          $currentImg.css('display', 'block');
      }
      else {
          i = indexImg;
      }

      $('.next').css('text-shadow','2px 5px 10px black');
      $('.prev').css('text-shadow','none');

  });

  $('.prev').on('click', function(){

      i--;

      if( i >= 0 ){
          $img.css('display', 'none');
          $currentImg = $img.eq(i);
          $currentImg.css('display', 'block');
      }
      else{
          i = 0;
      }

      $('.prev').css('text-shadow','5px 2px 10px black');
      $('.next').css('text-shadow','none');
  });

  function slideImg(){
      setTimeout(function(){

          if(i < indexImg){
            i++;
          }
          else {
            i = 0;
          }

    $img.css('display', 'none');

    $currentImg = $img.eq(i);
    $currentImg.css('display', 'block');

    slideImg();

      }, 5000);
  }

  slideImg();

});
