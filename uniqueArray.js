
var array = [1, 3, 3, 4, 7, 2, 5, 7, 9, 8, 6, 6];

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
        '3' : 2
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