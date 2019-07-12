$(document).ready(function(){
    var randomNumber = 0;
    var greenValue = 0;
    var pinkValue = 0;
    var blueValue = 0;
    var yellowValue = 0;
    var counter = 0;
    var wins = 0 + 1;
    var losses = 0 + 1;
    
    

    
    var reset = function (){
    randomNumber = Math.floor((Math.random() * 120) + 1);
    greenValue = Math.floor((Math.random() * 12) + 1);
    pinkValue = Math.floor((Math.random() * 12) + 1);
    blueValue = Math.floor((Math.random() * 12) + 1);
    yellowValue = Math.floor((Math.random() * 12) + 1);
    counter = 0;
    $(".random-number").html(randomNumber);
    $(".green").attr("data-crystalvalue", greenValue);
    $(".pink").attr("data-crystalvalue", pinkValue);
    $(".blue").attr("data-crystalvalue", blueValue);
    $(".yellow").attr("data-crystalvalue", yellowValue);
    $(".totalscore").html(counter);
    }


    $(".green").click(function(){
      console.log(greenValue);
      greenValue = parseInt(greenValue);
      counter += greenValue;
      $(".totalscore").html(counter);
      result();
    })

    $(".pink").click(function(){
      console.log(pinkValue);
      pinkValue = parseInt(pinkValue);
      counter += pinkValue;
      $(".totalscore").html(counter);
      result();
    })

    $(".blue").click(function(){
      console.log(blueValue);
      blueValue = parseInt(blueValue);
      counter += blueValue;
      $(".totalscore").html(counter);
      result();
    })

    $(".yellow").click(function(){
      console.log(yellowValue);
      yellowValue = parseInt(yellowValue);
      counter += yellowValue;
      $(".totalscore").html(counter);
      result();
      
    })
    
    function result() {
      if (counter === randomNumber) {
      alert("You Win!");
      $(".wins").html(wins++);
      reset();
    }
      else if (counter > randomNumber) {
        alert("You Lose");
        $(".losses").html(losses++);
        reset();
      }

    }

    reset();
});