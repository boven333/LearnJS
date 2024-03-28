// cal

let num = -2;
let anw = " ";

function cal (){
    if (num > 0 ) {
        anw = "More than 0"
    } else if (num === 0){
        anw = "0"
    } else {
        anw = "Less than 0"
    };
    console.log(anw);
};

cal();