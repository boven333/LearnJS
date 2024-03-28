// let day = 8;
// let dayName;

// switch (day) {
//     case 1:
//         dayName = "Monday";
//         break;
//     case 2:
//         dayName = "Tuesday";
//         break;
//     case 3:
//         dayName = "Wednesday";
//         break;
//     case 4:
//         dayName = "Thursday";
//         break;
//     case 5:
//         dayName = "Friday";
//         break;
//     case 6:
//         dayName = "Saturday";
//         break;
//     case 7:
//         dayName = "Sunday";
//         break;
//     default:
//         dayName = "Invalid day";
// }

// console.log("Today is " + dayName);

// for (let i=1;  i <= 2;  i++) {
//     console.log(i);
// }

// let x =0;

// while (x<10) {
//     console.log(x);
//     x++;
// }

// const prompt = require('prompt-sync')();

// var num = prompt("Insert Number :")

// console.log("Number is " + `${num}`);

// const Number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let fLen = fruits.length;
// let text = ""

// count = 0;

// var num = 0;

// for (i = 1; i < 10; i++) {
//         for ( j = 0; j <= i; j++) {
//             i = count;
//             count++;
//         }
//   }

// for (num[0][0]; num = [0][0]; num++) {
//     console.log(num);
// }

// -------------------------------Topic 1 Check----------------------------------------------- //
function inputChange (){
    const limit = document.getElementById("users").value;
    console.log("change: ",limit);
}

function renderFlag() {
  document.getElementById('container').innerHTML = "";
  const limit = document.getElementById("users").value;
  console.log("input: ", input);

// pattern
// camel case
// snake case #python
// kebab
  for (let i = 1; i <= limit; i++) {
    let output = "";

    for (let j = 1; j <= i; j++) {
      output += j;
    }

    console.log(output);
    console.log();

    const nodeDiv = document.createElement('div');
    const nodeP = document.createElement('p');
    nodeP.innerHTML = output;
    nodeDiv.appendChild(nodeP);
    document.getElementById('container').appendChild(nodeDiv);
  }
}

// -------------------------------Topic 1 Check----------------------------------------------- //

// -------------------------------Topic 2 ----------------------------------------------- //

function pyramid() {

  document.getElementById("container").innerHTML = "";
  const py = document.getElementById("users").value;

  for (let i = 1; i <= py; i++) {
    let output2 = " ";
    let count = 1;
    for (let j = 1; j <= 2 * py; ++j) {
      if (i + j >= py + 1 && i >= j - py + 1) {
        output2 += count.toString() + " ";
        count++;
      } else {
        output2 += " ";
      }
    }

    console.log(output2);

    const nodeDiv = document.createElement("div");
    const nodeP = document.createElement("p");
    nodeP.innerHTML = output2;
    nodeDiv.appendChild(nodeP);
    document.getElementById("container").appendChild(nodeDiv);
  }
}

// -------------------------------Topic 2 ----------------------------------------------- //
