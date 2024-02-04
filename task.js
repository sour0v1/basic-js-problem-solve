// ### Task-1: 
// Write a function to convert temperature from Celsius to Fahrenheit.

/* function convert(temp){
    const cal = (9 / 5 * temp) + 32;
    return cal;
}
console.log(convert(10)); */

/* ### Task-2: 
You are given an array of numbers. Count how many times the a number is repeated in the array. 

sample-input: 
numbers = [5,6,11,12,98, 5]

find: 5

output: 2

<br/>

sample-input: 

numbers = [5,6,11,12,98, 5]

find: 25

output: 0 */
/* const arr = [5, 2, 8, 2, 8, 9];

const sorted_arr = arr.sort();
const  nums = [];
for (let i = 0; i < sorted_arr.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
      nums.push(sorted_arr[i]);
    }
  }
  console.log(nums); */

// task 3
function array1(arr){
  let srt = arr.sort();
  const final = [];
  for(let i = 0; i <= srt.length -1; i++){
    if(srt[i] == srt[i + 1]){
      final.push(srt[i]);
    }
  }
  return final;
}
const nums = [4, 5, 2, 7, 3, 6, 2, 9, 7, 3];
const result = array1(nums);
console.log("Duplicate number of - "+ nums + " are - " + result);