const date = new Date();
console.log(date);

const date1 = new Date("2-25-2025");
console.log(date1);

const year = new Date(2024, 4);
console.log(year);
for (var i = 0; i < 5; i++) {
    setTimeout(function () {
     console.log(i);
  }, 100);
}   
