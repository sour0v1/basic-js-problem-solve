/* A year is a leap year if:

It is divisible by 4.
If it is divisible by 100, it must also be divisible by 400. 
*/
// method 1
/* function leap (year){
    if(year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}
const result = leap(2000);
console.log(result); */

// method 2
function leap2(year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true;
    }
    else if(year % 100 === 0 && year % 400 === 0){
        return true;
    }
    else{
        return false;
    }
}
const result = leap2(2029);
console.log(result);