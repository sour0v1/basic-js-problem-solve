// average of even number in a array

function average(arr) {
    const evenNum = [];
    let sum = 0;
    for (let number of arr) {
        if (number % 2 === 0) {
            evenNum.push(number);
        }

    }
    for (let i = 0; i < evenNum.length; i++) {
        sum += evenNum[i];
    }
    console.log("Even number - ", evenNum);
    console.log("Sum of even number - ", sum);
    const final = "Average of even number - " + sum / evenNum.length;
    return final;
}
const numbs = [7, 2, 6, 9, 4, 12];
const result = average(numbs);
console.log(result);