define(function(require,exports,module){  
     var util = require('./util');    
     var helloSeaJS = document.getElementById('hello-seajs');
     helloSeaJS.style.color = util.randomColor();
     window.setInterval(function(){
          helloSeaJS.style.color = util.randomColor();
     },1500);
     var $ = require('jquery');
     $(function(){
        console.log(111111);
     });
     console.log($);
});