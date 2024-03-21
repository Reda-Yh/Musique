$(document).ready(function() {
    $("button").click(function() {
      var buttonText = $(this).text();
      makeSound(buttonText);
    });
  
    $(document).keypress(function(e) {
      var keyPressed = e.key;
      makeSound(keyPressed);
    });
  
    function makeSound(letterClickedOrPressed) {
      switch (letterClickedOrPressed) {
        case "w":
          var tom1 = new Audio("sounds/w.mp3");
          tom1.play();
          break;
        case "a":
          var tom2 = new Audio("sounds/a.mp3");
          tom2.play();
          break;
        case "d":
          var tom3 = new Audio("sounds/d.mp3");
          tom3.play();
          break;
        case "j":
          var tom4 = new Audio("sounds/j.mp3");
          tom4.play();
          break;
        case "k":
          var tom5 = new Audio("sounds/k.mp3");
          tom5.play();
          break;
        case "l":
          var tom6 = new Audio("sounds/l.mp3");
          tom6.play();
          break;
        case "s":
          var tom7 = new Audio("sounds/s.mp3");
          tom7.play();
          break;
        default:
          break;
      }
      buttonAnimation(letterClickedOrPressed);
    }
  
    function buttonAnimation(letterClickedOrPressed) {
      var button = $("." + letterClickedOrPressed).eq(0);
      button.addClass("pressed");
      setTimeout(function() {
        button.removeClass("pressed");
      }, 200);
    }
  });
  