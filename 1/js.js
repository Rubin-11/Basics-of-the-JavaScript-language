"use strict";

let number = 58999;
let numbers = {
    units: NaN, //это единицы
    tens: NaN, //это десятки
    hundreds: NaN, //это сотни
};

function objNumbers(num) {
    if (num >= 0 && num <= 999 && Number.isInteger(num)) {
        let value = String(num);

        let unitStr = value.charAt(0);
        let unit = Number(unitStr);
        numbers.units = unit;

        let tenStr = value.charAt(1);
        let ten = Number(tenStr);
        numbers.tens = ten;

        let hundredStr = value.charAt(2);
        let hundred = Number(hundredStr);
        numbers.hundreds = hundred;
    } else {
        console.log("Ввели не корректное число!!!");
    }
}

objNumbers(number);
