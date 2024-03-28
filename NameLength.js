// Name Length

let nameInput = "HOTOo";
let nL = " ";

function NameLength() {
    if (nameInput.length >= 5) {
        nL = " Name size is Correct "
    } else if (nameInput.length < 5) {
        nL = " Name size is Incorrect"
    } else if (nameInput.length === "") {
        nL = " Please Enter Your Name! "
    } else {

    };

    console.log(nL);
};

NameLength();