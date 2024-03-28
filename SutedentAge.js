// students age

const CheckAge = () => {
    let Age = 20;
    let Status = " ";

    if( Age >= 18){
        Status = "You are eligible to vote.";
    } else {
        Status = "You are not eligible to vote.";
    };

    console.log(Status);
};

CheckAge();