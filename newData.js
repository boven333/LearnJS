// newData


const column = ["id", "name", "age", "blood_type"];
const data = [
    [
        "1", 
        "User 2", 
        "44", 
        "A"
    ],
     [
        "2",
        "User 2",
        "52",
        "AB"
    ],
    [
        "3",
        "User 3",
        "60",
        "B"
    ],
    [
        "4",
        "User 4",
        "23",
        "A"
    ],
    [
        "5",
        "User 5",
        "22",
        "O"
    ],
    [
        "6",
        "User 6",
        "35",
        "A"
    ]
];

// console.log(column[0], data[0][0]);




// const jsonResponse = [
//     {
//         name: "A arron",
//         age: 19
//     },
//     {
//         name: "A both",
//         age: 13
//     },
//     {
//         name: "Jarome",
//         age: 39
//     }
// ];
// const naiA = jsonResponse.filter((item)=>String(item.name).toLowerCase().includes(inputFromUser.toLowerCase()));

// const input = "ab"
// const fill = data.filter((item)=>String(item).toLowerCase().includes(input.toLowerCase()));
// console.log(fill);

// column
// // data
// const putData = () => {
//     let fil = data.indexOf(data)

//     for (let i = 0; i < column.length; i++) {
//         const element = column[i];
//         console.log("{"+ element+":"+"}"); 

//         for (let j = 0; j < data.length; j++) {
//             const elements = data[j];
//             console.log(elements);
//         }
//     };
// };

// putData();


// const newData = () => {
//     column[0];

//     for (let i = 0; i < column.length; i++) {
//         const element = column[i];
//         const newdata = data;
//         console.log(element + newdata);
//     }
// }
//  newData();


// =.=
 let output = [];

 for (let i = 0; i < data.length; i++) {
    const myJSON = {};

    column.forEach((item,index)=>{
        myJSON[item] = data[i][index];
    })


    output.push(myJSON);
};

console.log(output);

const column2 = output[0];
console.log(Object.keys(column2));


const data2 = [...output].map(item=>Object.keys(item));
console.log(data2);