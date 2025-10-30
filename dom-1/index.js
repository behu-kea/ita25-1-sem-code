function toDiscount(price, percent) {
    const reduction = price * (percent / 100);
    return price - reduction;
}

const finalPrice = toDiscount(200, 10);
console.log(finalPrice);


