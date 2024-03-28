// numberCheck

let userInput = -4;
let check = "";

function numberCheck() {
   if (userInput > 0) {
    check = " Positive "
   } else if (userInput < 0) {
    check = "Negative"
   } else {
    check = " Zero "
   };
   console.log(check);
};

numberCheck();