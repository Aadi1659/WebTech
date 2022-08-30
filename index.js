//var is global variable
//let is the local variable restricted to the block
//const cannot be changed
document.write("Hello world");
//primitve datatypes
//number string boolean null undefined
//"1"==1 is true but "1"===1 is false as it commpares values and type too
var a = 12, b = 10;
document.getElementById("demo").innerHTML = "Value of z is " + (a+b);
var text1 = "B";
var text2 = "section";
var text3 = text1 + " " + text2;

var person = {fname:"John",lname:"Doe",age:25};
var text = "";
var x;
for (x in person){
    text += person[x];
}