const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Lime","Lemon","Watermelon");

let texts = "<ul>";
fruits.forEach(myFunction);
texts += "</ul>";

function myFunction(value) {
  texts += "<li>" + value + "</li>";
}

let fLen = fruits.length;
let text = ""

for (i = 0; i < fLen; i++) {
    text += fruits[i] + "<br>";
  }

document.getElementById("demo").innerHTML = texts
document.getElementById("demos").innerHTML = text

const type = typeof fruits;

console.log(texts);
console.log(fruits);
console.log(type);

function showMessage() {
  document.getElementById("showInput").innerHTML = "สวัสดี JavaScript";
}