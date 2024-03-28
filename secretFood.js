let userInput = "oil";
let foodSelect = "";

function filFood() {
  switch (userInput.toLowerCase()) {
    case "sugar":
      foodSelect = "Have a Sugar";
      break;
    case "oil":
      foodSelect = "Have an Oil";
      break;
    case "powder":
      foodSelect = "Have a Powder";
      break;
    case "salt":
      foodSelect = "Have a Salt";
      break;
    default:
      foodSelect = "Undefined";
  }
  console.log(foodSelect);
}

filFood();
