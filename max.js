// find max number from array
function mxNum(number) {
    let mx = number[0];
    for(let i of number){
        if(i < mx){
            mx = i;
        }
    }
    return mx;
}
const arr = [7, 2, 9, 3, 5, 8, 4, 17, 12];
const result = mxNum(arr);
console.log('Min number is = ', result);