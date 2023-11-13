$(document).ready(function(){

    $("#listContainer").hide();
 

    $("#klu").hover(function(){
      $("#listContainer").slideDown();
    }, function(){
      $("#listContainer").slideUp();
    });


    $( function() {
      function runEffect() {
        var selectedEffect = "blind";
        var options = {};

   
        $( "#effect" ).toggle( selectedEffect, options, 500 );
      };
   
      $( "#button" ).on( "click", function() {
        runEffect();
      });
    } );

    $( function() {
      function runEffect2() {
        var selectedEffect = "blind";
        var options = {};

   
        $( "#effect2" ).toggle( selectedEffect, options, 500 );
      };
   
      $( "#button2" ).on( "click", function() {
        runEffect2();
      });
    } );

    $( function() {
      $( "#tabs" ).tabs();
    } );

  });