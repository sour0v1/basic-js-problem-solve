// convert inch to feet (12 inch = 1 ft)

/* function inchToFeet (num){
    const convert = num / 12;
    return convert;
}
const result = inchToFeet(48);
console.log(result); */

// Another method
function inchToFeet(num){
    const feet = num / 12;
    const inch = num % 12;
    const total = (parseInt(feet) + ' feet ' + inch + ' inch.');
    return total;
}
const result = inchToFeet(65);
console.log(result);