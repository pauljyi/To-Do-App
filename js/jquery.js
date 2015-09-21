$(document).ready(function(){

    var surpriseClicked = 0
    $("#bubblesheet").click(function(){


      // if bubbles have already been clicked, say "sorry, only one surprise per visit"
      if (surpriseClicked == 1){
        alert("Only one surprise per visit. Sorry not sorry!");
      }
      else {

        surpriseClicked = 1;

        for (i=0; i<9; i++){
          $('#bubbles1').prepend("<td><img src=images/bubble.png></td>");
        }
        for (i=0; i<9; i++){
          $('#bubbles2').prepend("<td><img src=images/bubble.png></td>");
        }
        for (i=0; i<9; i++){
          $('#bubbles3').prepend("<td><img src=images/bubble.png></td>");
        }
        for (i=0; i<9; i++){
          $('#bubbles4').prepend("<td><img src=images/bubble.png></td>");
        }

        jQuery.fn.visible = function() {
          return this.css('visibility', 'visible');
        };

        jQuery.fn.invisible = function() {
            return this.css('visibility', 'hidden');
        };

        jQuery.fn.visibilityToggle = function() {
            return this.css('visibility', function(i, visibility) {
                return (visibility == 'visible') ? 'hidden' : 'visible';
            });
        };


        var $audio = $('audio');
        var audio = $audio[0];
        var $img = $('img');

        $img.click(function(){
            audio.play();
        });

        $("td").children("img").click(function() {
        $(this).invisible();

        });

      }
  });

});
  // Progress Bar
  // $(function(){
  //     var progress = $('#progressBar').progressbar({
  //         value:36,
  //         change:function(event,ui){
  //             console.debug($(this).progressbar('value'));
  //             value = $(this).progressbar('value');
  //             text = value > 36  'Greater than 50' : '50 or below';
  //             for (i=36; i=0; i--)
  //             $('#txtHolder').text(text);
  //         }
  //     });
  //
  //     $('img').click(function(){
  //         progress.progressbar('value', progress.progressbar('value') - 1);
  //     });
  //
  // });
