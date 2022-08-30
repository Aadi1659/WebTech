// x = 5;
// document.write(x);
// var x;
//can do this with var only, let and const dont allow this.

const players = ["messi", "ronaldo", "neymar"];
let text = "";

for (let i = 0; i < players.length; i++) {
  text += players[i] + "<br>";
}

document.getElementById("demo").innerHTML = text;

function myfunc(a, b) {
  return a * b;
}
document.getElementById("func").innerHTML = myfunc(3, 4);

function myfunc2(a,b){
    if (b==undefined){
        b=2;
    }
    return a*b;
}
document.getElementById("func2").innerHTML = myfunc2(2);

const players2 = ["virat","rohit","dhoni"];
players2.pop();//pops the last element;
players2.push("chahal");//adds the element in the list
players2.shift();//shifts to the right so the left elements will pop one by one.
//toString joins with comma
document.getElementById("players2").innerHTML = players2.toString(); 
//join will join with * or any parameter you will pass
document.getElementById("players2").innerHTML = players2.join("*");
