//alert('Hello');-Мы не будем писать сообщения через alert()
var number= 3;
var myString= "Hi world!";
console.log(number);
console.log('number');
console.log(myString);

var numberTwo= 2;
number = number + numberTwo;

console.log(number);

$(document).ready(function(){
  $('.colorbox').colorbox();

  $('.flexslider').flexslider({
    animation: "slide"
  });
});
