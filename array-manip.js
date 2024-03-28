//---- Map
const numbers1 = [1, 2, 3, 4, 5];
    
const doubled =  numbers1.map((item) => item**2);
console.log(doubled);

//---- Filter
const number2 = [1, 2, 3, 4, 5];
const evens = number2.filter((item) => item%2 === 0);
console.log(evens);

//---- Reduce
const numbers3 = [1, 2, 3, 4, 5];
const sum = numbers3.reduce((acc, currentItem) => {
    acc = acc + currentItem;
    return acc;
}, 0);
console.log(sum);

//---- Find
const numbers4 = [1, 2, 3, 4, 5];
const found = numbers4.find((item) => item===5);
console.log(found);

//---- FindIndex
const numbers5 = [1, 2, 3, 4, 5];
const foundIndex = numbers5.findIndex((item) => item === 1);
console.log(foundIndex);

//---- Some
const numbers6 = [1, 2, 3, 4, 5];
const hasNegativeNumbers = numbers6.some((item) => item === 1);
console.log(hasNegativeNumbers);

//---- Every
const numbers7 = [1, 2, 3, 4, 5];
const allPositiveNumbers = numbers7.every((item) => item === 3);
console.log(allPositiveNumbers);

//---- Includes
const numbers8 = [1, 2, 3, 4, 5];
const includes3 = numbers8.includes(2);
console.log(includes3);

//---- Join 2 arrays
const numbers9 = [1, 2, 3, 4, 5];
const numbers10 = [6, 7, 8, 9, 10];
const joined = numbers9.concat(numbers10);
console.log(joined);


// reduce act as every 
// case of false
const numbers11 = [1, 2, 3, 4, 5];
const allPositiveNumbers2 = numbers11.reduce((acc, item) => {
    acc = acc && (item===3);
    return acc;
}, true);
console.log(allPositiveNumbers2);

// reduce act as every
// case of true
const numbers12 = [3, 3, 3, 3, 3];
const allPositiveNumbers3 = numbers12.reduce((acc, item) => {
    acc = acc && (item===3);
    return acc;
}, true);

console.log(allPositiveNumbers3);


// reduce act as some
// case of true
const numbers13 = [1, 2, 3, 4, 5];
const hasNegativeNumbers2 = numbers13.reduce((acc, item) => {
    acc = acc || (item===1);
    return acc;
}, false);
console.log(hasNegativeNumbers2);

// reduce act as some
// case of false
const numbers14 = [2, 2, 2, 2, 2];
const hasNegativeNumbers3 = numbers14.reduce((acc, item) => {
    acc = acc || (item===1);
    return acc;
}, false);
console.log(hasNegativeNumbers3);

// reduce act as find
// case of true
const numbers15 = [1, 2, 3, 4, 5];
const found2 = numbers15.reduce((acc, item) => {
    console.log(acc);
    if (acc) {
        return acc;
    }
    return item === 5 ? item : acc;
}, null);
console.log(found2);

// reduce act as filter
// case of true
const numbers16 = [1, 2, 3, 4, 5];
const evens2 = numbers16.reduce((acc, item) => {
    if (item%2 === 0) {
        acc.push(item);
    }
    return acc;
}, []);
console.log(evens2);

// reduce act as map
// case of true
const numbers17 = [1, 2, 3, 4, 5];
const doubled2 = numbers17.reduce((acc, item) => {
    acc.push(item**2);
    return acc;
}, []);
console.log(doubled2);


// get intersect of 2 arrays
const numbers18 = [1, 2, 3, 4, 5];
const numbers19 = [4, 5, 6, 7, 8];

const numbers20 = [10, 11, 12, 13, 14];
const numbers21 = [4, 5, 6, 7, 8];
const numbers22 = [11, 29, 53, 31, 72];

function findIntersection(x, y) {
    const intersection = []; //Array

    for (let i = 0; i < x.length; i++) {

      const element = x[i];

      if (x.indexOf(element) !== -18 && intersection.indexOf(element) === -1) {

        intersection.push(element);
      };
    };
    
    console.log("x: ", x);
    console.log("y: ", y);
    console.log("intersection: ", intersection);
    return intersection;
  };

  findIntersection(numbers20, numbers22);



function arrayDifference(arr1, arr2) {
	const difference = [];

	for (let i = 0; i < arr1.length; i++) {
		if (arr2.indexOf(arr1[i]) === -1) {
			difference.push(arr1[i]);
		}
	}

	return difference;
}

const array1 = [1, 2, 3, 4, 5, 0];
const array2 = [3, 4, 5, 6, 7, 9];
const difference = arrayDifference(array1, array2);
console.log(difference);


// const intersect = ?
// console.log(intersect);