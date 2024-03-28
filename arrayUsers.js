// For Node.js, you may need to use a package like 'node-fetch' to bring fetch functionality
// const fetch = require('node-fetch');

// Example usage of fetch
// const apiUrl = "https://dummyjson.com/products/-99";

// fetch(apiUrl)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
//   .then((jsonData) => {
//     console.log(jsonData);
//   })
//   .catch((error) => {
//     console.error(
//       "There was a problem with the fetch operation:",
//       error.message
//     );
//     console.log("let get data again in 5 secs.");

//     const logSecNum = (secs = 1, limit = 1, direction = "up") => {
//       console.log(secs);
//       if (secs == limit) {
//         return;
//       } else {
//         direction === "up" ? secs++ : secs--;
//         logSecNum(secs, limit, direction);
//       }
//     };

//     logSecNum(1,5,"up");

//     console.log("call API again.");
//   });

// const users = ["Bowen", "John", "Bobby", "Gwen", "Jonathan"];

// let Choose = [];
// let userInput = "n";

// function filUsers() {
//   Choose = users.filter((item) =>
//     item.toLowerCase().includes(userInput.toLowerCase())
//   );
//   console.log(Choose);
// }
// filUsers();

// function arrayDifference(arr1, arr2) {
// 	const difference = [];

// 	for (let i = 0; i < arr1.length; i++) {
// 		if (arr2.indexOf(arr1[i]) === -1) {
// 			difference.push(arr1[i]);
// 		}
// 	}

// 	return difference;
// }

// const array1 = [1, 2, 3, 4, 5, 0];
// const array2 = [3, 4, 5, 6, 7, 9];
// const difference = arrayDifference(array1, array2);
// console.log(difference);

const numbers4 = [1, 2, 3, 4, 5];
const found = numbers4.find((item) => item===5);
console.log(found);