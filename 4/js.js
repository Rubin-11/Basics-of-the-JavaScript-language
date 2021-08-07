"use strict";

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

let filterProducts = products.filter(function(product) {
    return  product.photos && product.photos.length !== 0;
});

function pric(products) {
    products.sort((a, b) => a.price > b.price ? 1 : -1);
}

pric(products);

console.log(filterProducts);
console.log(products);