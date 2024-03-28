//  book store

const bookStore = () => {
    age = 30;
    cash = 1000;
    entB = " ";

    if (age >= 18 && cash >= 500) {
        entB = "You can enter the book store!!!";
    } else {
        entB = "You cannot enter the book store!!!";
    };

    console.log(entB);
};

bookStore();