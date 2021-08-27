'use strict'

// общая цена товаров к корзине
let classBasketFooter__prise = document.querySelector('.basketFooter__prise');
// название товара
let productName = document.querySelectorAll('.topProduct__price__block__h3'); 
// цены товаров
let price = document.querySelectorAll('.topProduct__price__block__priceText');
// кнопки товара
let buttunProduct = document.querySelectorAll('.topProduct__price__block__img__button__a');
// блок корзины товара
let classTopProduct__price__block = document.querySelectorAll('.topProduct__price__block'); 
// загаловок таблицы
let classBasketHead = document.querySelector('.basketHead');
// окно корзины
let basketBlock = document.querySelector('.header__right__cart__basket');

let i = 0;
buttunProduct.forEach(function(element) {
    element.setAttribute('add-id' , i);
    i++;
})

buttunProduct.forEach(function(element) {
    element.addEventListener('click', addEventClick)
})

function addEventClick (event) {
    let i = 0;
    const addId = event.currentTarget.getAttribute('add-id');
    productId(addId);
    basketBlock.style.display = 'block';
}
