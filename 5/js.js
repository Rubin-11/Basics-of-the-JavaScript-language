"use strict"

let number_1 = Number(prompt("Введите первое число!!!"));
let number_2 = Number(prompt("Введите второе число!!!"));
let operation = prompt("введите арифмитическое действие \n сложение \n вычитание \n умножение \n деление");

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

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "сложение":
            alert("Выполнено сложение = " + sum(arg1, arg2));
            break;
        case "вычитание":
            alert("Выполнено вычитание = " + difference(arg1, arg2));
            break;
        case "умножение":
            alert("Выполнено умножение = " + multiplication(arg1, arg2));
            break;
        case "деление":
            alert("Выполнено деление = " + division(arg1, arg2));
            break;
        default:
            alert("ввели не корректное действие!!!");
    }
}

mathOperation(number_1, number_2, operation);