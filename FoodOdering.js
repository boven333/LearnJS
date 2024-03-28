// Food Odering

const Odering = () =>{
    let food = "buger";
    let foodToString = food.toLowerCase();
    let order = "";

    if (foodToString === "Pizza".toLowerCase()) {
        order = "You choose Pizza!";
    } else if (foodToString === "Buger".toLowerCase()) {
        order = "You choose Buger!";
    } else {
        order = "You choose Salad!";
    };

    console.log(order);
};

Odering();