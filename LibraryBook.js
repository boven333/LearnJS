// Library Books

const Library = () =>{
    age = 30;
    book = 30;
    status = "";
    
    if (age >= 15 && book >=3 ) {
        status = "You can borrow books."
    } else {
        status = "You cannot borrow books."
    }
    console.log(status);
};

Library();