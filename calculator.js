// simple calculator
function add(num1, num2) {
    return num1 + num2;
}
function mult(num1, num2) {
    return num1 * num2;
}
function subs(num1, num2) {
    return num1 - num2;
}
function div(num1, num2) {
    return num1 / num2;
}

function result(n1, n2, cal) {
    if (cal === 'add') {
        const addition = add(n1, n2);
        return addition;
    }
    else if (cal === 'mult') {
        const multiplication = mult(n1, n2);
        return multiplication;
    }
    else if (cal === 'subs') {
        const substraction = subs(n1, n2);
        return substraction;
    }
    else if (cal === 'div') {
        const division = div(n1, n2);
        return division;
    }
    else {
        return 'only addition, substraction, multiplication, division can be calculted';
    }
}
const final = result(6, 3, 'subs');
console.log(final);