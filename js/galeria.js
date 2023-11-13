$(document).ready(function(){

    $( function() {
      $( "img" ).on('click', function(){
        $(this).hide(2000);
      });

      $("button").on('click', function(){
        $("img").show(2000);
      });
    } );

  });