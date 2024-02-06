// data type validation
// function validation(num){
//     if(typeof num === 'number'){
       
//         return num;
//     }
    
//     return 'input should be number';
// }
// const result = validation('hello');
// console.log(result);

// for array
function validation(arr){
    if(Array.isArray(arr) !== true){
        return 'input should be array';
    }
    return arr[1];
}
// const nums = [2, 4, 9];
const nums = 'hello';
const result = validation(nums);
console.log(result);