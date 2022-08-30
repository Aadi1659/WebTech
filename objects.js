//1.key value pair
var emp2 = {
    "firstname":"aruna",
    "lastname":"srivastav",
    "showname":function(){
        alert(emp2.firstname + "" + emp2.lastname);
    }
}
emp2.showname()

//2.constructor
// function Employee(fname,lname){
//     this.firstname = fname;
//     this.lastname = lname;
//     this.showname = function(){
//         alert(this.firstname + "" + this.lastname);
//     }
// }
// var emp1 = new Employee("aaditya","dev sharma");
// emp1.showname();

//3.can be converted to class.
//class keyword is supported only after ES6 2015.
class Employee {
    constructor(fname, lname) {
        this.firstname = fname;
        this.lastname = lname;
        this.showname = function () {
            alert(this.firstname + "" + this.lastname);
        };
    }
}
var emp1 = new Employee("aaditya","dev sharma");
emp1.showname();

//4.anonymous function:
var emp6 = new function(){
    this.firstname = "aadi";
    this.lastname = "dev";
    this.showname = function(){
        alert(this.firstname + "" + this.lastname);
    }
}
emp6.showname();

//5.object can be created using object new and Object keyword
const person = new Object();
person.firstname = "dev";
person.lastname = "sharma";
document.getElementById("root").innerHTML = person.firstname + " " + person.lastname;

