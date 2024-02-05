function phones(phone) {
    let store = phone[0];
    for (let i of phone) {
        if (i.price < store.price) {
            store = i;
        }
    }
    return store.brand;

}
const mobiles = [
    { brand: 'samsung', price: 32000, },
    { brand: 'apple', price: 100000, },
    { brand: 'vivo', price: 26000, },
    { brand: 'realme', price: 19000, },

];
const result = phones(mobiles);
console.log('Cheapest phone is - ',result);