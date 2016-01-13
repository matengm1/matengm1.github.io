$(function(){

  var number1       = 0,
      number2       = 0,
      operation     = '+',
      result        = 0,
      $number1      = $('#number1'),
      $timer        = $('#timer'),
      $n1IncrButton = $number1.find('.incr'),
      $n1Report     = $number1.find('.number'),
      $cdReport     = $timer.find('.timer1'),
      $number2      = $('#number2'),
      $n2IncrButton = $number2.find('.incr'),
      $n2Report     = $number2.find('.number'),
      $addButton    = $('#add'),
      $opReport     = $('#operation'),
      $equalsButton = $('#equals'),
      $result       = $('#result');
var myCounter = new Countdown({  
    seconds:99,  // number of seconds to count down
    onUpdateStatus: function(sec){$cdReport.text(sec);}, // callback for each second
    onCounterEnd: function(){         console.log("BOOM");
        window.location.href = "boom.html";
        $result.text("BOOM"); ;} // final action
});

myCounter.start();
function Countdown(options) {
  var timer,
  instance = this,
  seconds = options.seconds || 10,
  updateStatus = options.onUpdateStatus || function () {},
  counterEnd = options.onCounterEnd || function () {};

  function decrementCounter() {
    updateStatus(seconds);
    if (seconds === 0) {
      counterEnd();
      instance.stop();
    }
    seconds--;
  }

  this.start = function () {
    clearInterval(timer);
    timer = 0;
    seconds = options.seconds;
    timer = setInterval(decrementCounter, 1000);
  };

  this.stop = function () {
    clearInterval(timer);
  };
}
  
  
  
  
  
  
  
  $n1IncrButton.click(function(){
    if (number1 > 2) {
      number1 = 0;
    }
    switch(number1) {
      case 0: 
      $n1Report.html("<div><img src='http://www.suberic.net/~dmm/graphics/astro/img/thick/Lyra.png'><br/>Betelgeuse</div>"); 
      break;
      case 1: 
      $n1Report.html("<div><img src='http://www.suberic.net/~dmm/graphics/astro/img/thick/Perseus.png'><br/>Rigel</div>"); 
      break;
      case 2: 
      $n1Report.html("<div><img src='http://www.suberic.net/~dmm/astro/img/thick/Hydra.png'><br/>Bellatrix</div>"); 
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
      $n2Report.html("<div><img src='http://www.suberic.net/~dmm/graphics/astro/img/thick/Lyra.png'><br/>Betelgeuse</div>"); 
      break;
      case 1: 
      $n2Report.html("<div><img src='http://www.suberic.net/~dmm/graphics/astro/img/thick/Perseus.png'><br/>Rigel</div>"); 
      break;
      case 2: 
      $n2Report.html("<div><img src='http://www.suberic.net/~dmm/astro/img/thick/Hydra.png'><br/>Bellatrix</div>"); 
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
      case '/': $opReport.html("<div><img src='http://www.suberic.net/~dmm/graphics/astro/img/thick/Lyra.png'><br/>Betelgeuse</div>");  break;
      case '-': $opReport.html("<div><img src='http://www.suberic.net/~dmm/graphics/astro/img/thick/Perseus.png'><br/>Rigel</div>");  break;
      case '+': $opReport.html("<div><img src='http://www.suberic.net/~dmm/astro/img/thick/Hydra.png'><br/>Bellatrix</div>");  break;
    } 

  });

  $equalsButton.click(function(){
    switch(operation) {
      case '+': result = number1 + number2; break;
      case '-': result = number1 - number2; break;
      case '/': result = number1 / number2; break;
    }
    if (result === 1.5) {
        console.log("DISARMED");
        $result.text("DISARMED");
      window.location.href = "win.html";
      } else {
        console.log("BOOM");
        window.location.href = "boom.html";
        $result.text("BOOM");
      }
  });
});