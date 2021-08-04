"use strict"

// программа таботает с переменной money типа string
// реализацию приведения типа string в тип number не реализовывал.
let money = prompt("сколько денег положить на счет");
let lastDigit = money.charAt(money.length-1);
let lastDigit_2 = money.slice(-2);

switch (lastDigit) {
    case "1":
        if (lastDigit_2 != 11 ) {
        alert(`Ваша сумма в ${money} рубль успешно зачислена`)
        break;
        }
    case "0":
        alert(`Ваша сумма в ${money} рублей успешно зачислена`)
        break;
    default:
        alert(`Ваша сумма в ${money} рубля успешно зачислена`)
        break;
}