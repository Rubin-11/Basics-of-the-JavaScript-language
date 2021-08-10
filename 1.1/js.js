"use strict";

function Product1(name, price) {
    this.name = name;
    this.price = price;
}

Product1.prototype.make25PercentDiscount = function(discount) {
    this.price = this.price - (this.price / 100 * discount);
}

let obj1 = new Product1("computer", 1000);
obj1.make25PercentDiscount(25);
console.log(obj1);

// class Product1 {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }

//     make25PercentDiscount(discount) {
//         this.price = this.price - (this.price / 100 * discount);
//     }
// }

// let obj1 = new Product1("computer", 1000);
// obj1.make25PercentDiscount(25);
// console.log(obj1);