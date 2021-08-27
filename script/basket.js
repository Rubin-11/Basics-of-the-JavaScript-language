'use strict';

// счетчик количество товара в корзине
let classHeader__nav__quantityOfGoods = document.querySelector('.header__nav__quantityOfGoods');
let basket = {};

function addProduktId(addId) {
    if (!(addId in basket)) {
        basket[addId] = 1;
    } else {
        basket[addId]++;
    }
}

function numberCart () {
    classHeader__nav__quantityOfGoods.textContent++;
}

function renderBasket(addId) {
    let productExist = document.querySelector(`.productCountity[addId="${addId}"]`);
    if (productExist) {
        increaseProductCount(addId);
        recalculateSumForProduct(addId);
        sumPriceProduct();
    } else {
        renderNewProduct(addId);
        sumPriceProduct();
    }
}

function productId(addId) {
    numberCart();
    addProduktId(addId);
    renderBasket(addId);
}

function renderNewProduct(addId) {
    let productRow = `
        <div class="basketInfo">
            <div>${productName[addId].textContent}</div>
            <div>
                <span class="productCountity" addId=${addId}>1</span> шт.
            </div>
            <div>${price[addId].textContent}</div>
            <div>
                $<span class="totalCost" addId="${addId}">${classTopProduct__price__block[addId].childNodes[5].childNodes[1].children[2].children[0].innerText}</span>
            </div>
        </div>
    `;
    classBasketHead.insertAdjacentHTML("afterend", productRow);
}

function increaseProductCount(addId) {
    const productCountEl = document.querySelector(`.productCountity[addId="${addId}"]`);
    productCountEl.textContent++;
}

let d = {};

function recalculateSumForProduct(addId) {
    const productTotalRowEl = document.querySelector(`.totalCost[addId="${addId}"]`);
    if(d[addId] === undefined) {
        d[addId] = Number(productTotalRowEl.innerHTML);
    }
    let totalPriceForRow = (d[addId] + Number(productTotalRowEl.innerHTML)).toFixed(2);
    productTotalRowEl.textContent = totalPriceForRow;
}

function sumPriceProduct () {
    let priceProductsLink = document.querySelectorAll('.totalCost');
    let sumPriceProductLink = document.querySelector('.basketFooter__prise');
    let sumPrice = null;
    priceProductsLink.forEach(function(element) {
        sumPrice += Number(element.innerHTML);
    });
    sumPriceProductLink.textContent = sumPrice;
}