var even = [2, 5, 7, 10, 12, 13, 47, 48, 32, 6, 31, 94, 17, 30]; //only even
var evenArr = even.filter(function(num){
return num % 2 == 0;
})


var fizzBuzz =[2, 5, 7, 10, 12, 13, 47, 48, 32, 6, 31, 94, 17, 30];//num/3=fizz num/5=buzz both=fizz-buzz
var FbArr = fizzBuzz.map(function(num){
  var changedNum1 == num;
  if( num % 3 == 0 && num % 5 != 0){
    changedNum1 = "Fizz"
  }; if(num % 5 == 0 && num % 3 != 0){
    changedNum1 = "Buzz"
  }; if(num % 3 == 0 && num % 5 == 0){
    changedNum1 == "Fizz-Buzz";
  }
})

var st1 =["This", "string", "is", "for", "counting", "words"];
var count = st1.map(function(str){
  return = str.length;
})

var srt =["d","a","c","b"];
function organize(){
  alpha = sort.srt();
}

var fruits = ["apples", "oranges", "pears", "grapes", "bananas"];
var cresent;
function Yellow(){
  cresent= fruits.pop();
}
//str1.length

console.log(evenArr, FbArr, count, alpha, cresent);
