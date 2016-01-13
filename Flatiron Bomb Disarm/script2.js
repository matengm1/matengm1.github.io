$(function(){

  var number1       = 0,
      number2       = 0,
      operation     = '+',
      result        = 0,
      $number1      = $('#number1'),
      $n1IncrButton = $number1.find('.incr'),
      $n1Report     = $number1.find('.number'),
      $number2      = $('#number2'),
      $n2IncrButton = $number2.find('.incr'),
      $n2Report     = $number2.find('.number'),
      $addButton    = $('#add'),
      $subButton    = $('#sub'),
      $divButton    = $('#div'),
      $opReport     = $('#operation'),
      $equalsButton = $('#equals'),
      $result       = $('#result');

  $n1IncrButton.click(function(){
    if (number1 > 2) {
      number1 = 0;
    }
    switch(number1) {
      case 0: 
      $n1Report.html("<div><img src='http://www.suberic.net/~dmm/graphics/astro/img/thick/Lyra.png'></div>"); 
      break;
      case 1: 
      $n1Report.html("<div><img src='http://www.suberic.net/~dmm/graphics/astro/img/thick/Perseus.png'></div>"); 
      break;
      case 2: 
      $n1Report.html("<div><img src='http://www.suberic.net/~dmm/astro/img/thick/Hydra.png'></div>"); 
      break;
    }
    number1 += 1;
  });

  $n2IncrButton.click(function(){
    if (number2 > 2) {
      number2 = 0;
    }
    switch(number2) {
      case 0: 
      $n2Report.html("<div><img src='http://www.suberic.net/~dmm/graphics/astro/img/thick/Lyra.png'></div>"); 
      break;
      case 1: 
      $n2Report.html("<div><img src='http://www.suberic.net/~dmm/graphics/astro/img/thick/Perseus.png'></div>"); 
      break;
      case 2: 
      $n2Report.html("<div><img src='http://www.suberic.net/~dmm/astro/img/thick/Hydra.png'></div>"); 
      break;
    }
    number2 += 1;
  });

  $addButton.click(function(){

    switch(operation) {
      case '+': operation = '-'; console.log("SUB"); break;
      case '-': operation = '/'; console.log("DIV"); break;
      case '/': operation = '+'; console.log("ADD"); break;
    }
    switch(operation) {
      case '/': $opReport.html("<div><img src='http://www.suberic.net/~dmm/graphics/astro/img/thick/Lyra.png'></div>");  break;
      case '-': $opReport.html("<div><img src='http://www.suberic.net/~dmm/graphics/astro/img/thick/Perseus.png'></div>");  break;
      case '+': $opReport.html("<div><img src='http://www.suberic.net/~dmm/astro/img/thick/Hydra.png'></div>");  break;
    } 

  });

  $equalsButton.click(function(){
    switch(operation) {
      case '+': result = number1 + number2; $result.text(result); break;
      case '-': result = number1 - number2; $result.text(result); break;
      case '/': result = number1 / number2; $result.text(result); break;
    }
    if (result === 1.5) {
        console.log("DISARMED")
      } else {
        console.log("BOOM")
      }
  });
});