$(function () {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    
    var red = 199;
    var green = 79;
    var blue = 120;
    var a = 30;
    var b = 5;
    var color = (6*7)/36;
    
    for (var i = 0; i < 6; i++){
      for (var j = 1; j < 7; j++){
        
        context.fillStyle = 'rgb(' + (red - 7*color++) + ', ' + (green) + ',' + (blue + 15*i)+')';
        context.fillRect ((0+j)*a+(0+j)*b+85,i*a+i*b+50,a,a);    
      }
    }
    });