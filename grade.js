// const array = ["item1","item2","item3"];

// const pushValue = array.push("item4");
// const popValue = array.pop();

// const unshiftedValue = array.unshift("hello");
// const shiftedValue = array.shift();

// //----------------------------------------------------

// array.push(...["hello","world"]);
// console.log(array);

// array.splice(2,2);
// console.log(array);

// array.slice();

// //------------------------

// const demoArray = [1,2,3,4];
// demoArray.splice(2,1,...["a","b"]);
// console.log(demoArray.filter(item=>typeof(item)==="number").map(item=>item*5));



//-------------------------
// indexOf
const ido = ["Y","X","Z"];
console.log(ido.indexOf("X"));
const idOfX = ido.indexOf("X");

const jsonResponse = [
    {
        name: "A arron",
        age: 19
    },
    {
        name: "A both",
        age: 13
    },
    {
        name: "Jarome",
        age: 39
    }
];
// console.log(jsonResponse[idOfX]);
const inputFromUser = "A";
const naiA = jsonResponse.filter((item)=>String(item.name).toLowerCase().includes(inputFromUser.toLowerCase()));
// console.log(naiA);


const targetA = jsonResponse.find((item)=>{

    return item.name === "JArome";
})

// console.log(targetA);

//-------------------------------------------------

const ddArray = ['a','a','a'];
const hasA = ddArray.some(item=>item=='a');
console.log(hasA);


const isEveryA = ddArray.every(item=>item=='a');
console.log(isEveryA);

// fillter 80%
// splice 70%
// slice  40%
// some 90%
// find 90%
// map 90%
// every 90%
// indexOf 90%
// push 100%
// shift 100%
// pop 100%
// unshift 100%
// typeof 100%