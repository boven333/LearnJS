// temp

let userInput = 35;
let uStatus = "";

function Temp() {
  if (userInput >= 37) {
    uStatus = `Your Temp is ${userInput} Celsius, you is sick`;
  } else {
    uStatus = `Your Temp is ${userInput} Celsius, you is soso`;
  }
  console.log(uStatus);
}

Temp();
