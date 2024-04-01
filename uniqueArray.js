
var array = [1, 2, 3, 3, 4, 5, 6, 6, 7, 7, 8, 9, 9];

let maxArr = Math.max(...array);
console.log("This is Max Array :", maxArr);

let minArr = Math.min(...array);
console.log("This is Min Array :", minArr);

var summ = 0;
for (let i of array) {
    summ += i;
};
arg = summ / array.length;
console.log("This is an Average of Array :", arg);


// The magical counting process
const countArray = (arr) => {
    // Let's use a JavaScript object to keep track of counts
    const counts = { 
   
    };
  
    // Loop through each element in the array
    arr.forEach((value) => {
      // If the value is encountered for the first time, set the count to 1
      if (!counts[value]) {
        counts[value] = 1;
      } else {
        // If the value has been seen before, increment the count
        counts[value]++;
      }
    });
  
    // The counts object now holds the frequency of each value
    return counts;
  };

  const results = countArray(array);
  console.log("Counts Array : ", results);


  const count = {};
  array.forEach((x) => {
    count[x] = (count[x] || 0) + 1;
  });
  console.log(count)



  function remove(arr) {
    let unique = [];

    for (i = 0; i < arr.length; i++) {
        if (unique.indexOf(arr[i]) === -1) {
            unique.push(arr[i]);
        }
    }
    
    return unique;
}

console.log(remove("Array : ", array));