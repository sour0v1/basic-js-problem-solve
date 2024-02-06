// 1 to 100 - 100$
// 100 to 200- 90
// above 200 - 80

function price(amount){
if(amount <= 100){
    const priceFor100 = amount * 100;
    return priceFor100;
}
else if(amount >100 && amount <= 200){
    let above100 = amount - 100;
    let priceForabove100 = above100 * 90;
    let total = (100 * 100) + priceForabove100;
    return total;

}
else{
    let above100 = amount - 100;
    let priceForabove100 = above100 * 90;
    let above200 = amount - 200;
    let priceForabove200 = above200 * 80;
    let total1 = (100 * 100) + priceForabove100 + priceForabove200;
    return total1;
}

}
console.log(price(201));