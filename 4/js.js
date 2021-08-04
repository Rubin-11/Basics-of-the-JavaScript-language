"use strict"

let number_1 = Number(prompt("Введите первое число!!!"));
let number_2 = Number(prompt("Введите второе число!!!"));

function sum (x, b) {
    let z = x + b;
    return z;
}

function difference (x, b) {
    let z = x - b;
    return z;
}

function multiplication (x, b) {
    let z = x * b;
    return z;
}

function division (x, b) {
    if(b!=0) {
        let z = x / b;
        return z;
    }
    else
    return ("Диление на 0 запрещено!!!");
}

console.log("Выполнение функции sum = " + sum(number_1, number_2));
console.log("Выполнение функции difference = " + difference(number_1, number_2));
console.log("Выполнение функции multiplication = " + multiplication(number_1, number_2));
console.log("Выполнение функции division = " + division(number_1, number_2));