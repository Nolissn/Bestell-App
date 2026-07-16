function renderFullBasketCards() {
    let box = document.getElementById("fullBasketContentId");
     box.innerHTML = "";

  let allItems = [...menu.burgers, ...menu.pizzas, ...menu.salads];

  for (let index = 0; index < allItems.length; index++) {
    if(allItems[index].amount > 1){
       box.innerHTML += getMultipleBasketCardTemplate(index, allItems);
    }
    else if(allItems[index].amount === 1)
      {
        box.innerHTML += getSingleBasketCardTemplate(index, allItems);
      }
  }
}

function renderSubtotalFoodPrices(){
  let priceSpan = document.getElementById("subtotalFoodPricesId");
  priceSpan.innerHTML ="";

  let allItems = [...menu.burgers, ...menu.pizzas, ...menu.salads];
  let singleDishPrice = 0;
  let multiplicationFactor = 1;
  let subtotalPrice = 0;

  for (let index = 0; index < allItems.length; index++) {
    if(allItems[index].amount !== 0){
      singleDishPrice = allItems[index].price.replace("€", "").replace(",", ".");
      multiplicationFactor = allItems[index].amount;
      subtotalPrice += singleDishPrice * multiplicationFactor;
    }
  }
  priceSpan.innerHTML = subtotalPrice.toFixed(2).replace(".", ",") + "€";
}

function renderTotalFoodPrices(){
    let subtotalPriceSpan = document.getElementById("subtotalFoodPricesId");
    let totalPriceSpan = document.getElementById("totalFoodPrices");

    let subtotalPrice = subtotalPriceSpan.innerText.replace("€", "").replace(",", ".");
    subtotalPrice = parseFloat(subtotalPrice);
    subtotalPrice += 4.99;
    totalPriceSpan.innerHTML = subtotalPrice.toFixed(2).replace(".", ",").concat("€");
}

function renderButtonTotalFoodPrices(){
  let button = document.getElementById("buttonTotalFoodPrices");
  let totalPriceString = document.getElementById("totalFoodPrices").innerText;
  button.innerText = "Buy now (" + totalPriceString + ")";
}