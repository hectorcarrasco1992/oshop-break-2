const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const priceValue1 =document.getElementById('priceValue')
let quantity1 = document.getElementById('quantity')
let priceHidden1 = document.getElementById('priceHidden')
let total = document.getElementById('total')
if (plus) {
  plus.addEventListener('click', event => {
    event.preventDefault();

    let priceValue = parseFloat(priceValue1.value);
    let quantity = parseInt(quantity1.value);
    let priceHidden = parseFloat(priceHidden1.value);
    console.log(priceHidden);
    priceValue += priceHidden;
    console.log('PriceValue: ', priceValue);
    quantity += 1;
    console.log('Plus:', quantity);
    quantity1.value = quantity;
    priceValue1.value = priceValue.toFixed(2);
    total.innerHTML = quantity;
  });
}

if (minus) {
  minus.addEventListener('click', event => {
    event.preventDefault();

   

    let priceValue = parseFloat(priceValue1.value);
    let quantity = parseInt(quantity1.value);
    let priceHidden = parseFloat(priceHidden1.value);

    if (quantity === 1) {
      quantity = 1;
      priceValue = priceHidden;
      return;
    } else {
      priceValue -= priceHidden;
      quantity -= 1;

      quantity1.value = quantity;
      priceValue1.value = priceValue.toFixed(2);
      total.innerHTML = quantity;
    }
  });
}
