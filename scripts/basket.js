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
  let pricespan = document.getElementById("subtotalFoodPricesId");
  pricespan.innerHTML ="";
  
  let allItems = [...menu.burgers, ...menu.pizzas, ...menu.salads];
  let singledishprice = 0;
  let multiplicationfactor = 1;
  let subtotalprice = 0;

  for (let index = 0; index < allItems.length; index++) {
    if(allItems[index].amount !== 0){
      singledishprice = allItems[index].price.replace("€", "").replace(",", ".");
      multiplicationfactor = allItems[index].amount;
      subtotalprice += singledishprice * multiplicationfactor;
    }
  }
  pricespan.innerHTML = subtotalprice.toFixed(2).replace(".", ",") + "€";
}

function renderTotalFoodPrices(){
    let subtotalpricespan = document.getElementById("subtotalFoodPricesId");
    let totalpricespan = document.getElementById("totalFoodPrices");

    let subtotalprice = subtotalpricespan.innerText.replace("€", "").replace(",", ".");
    subtotalprice = parseFloat(subtotalprice);
    subtotalprice += 4.99;
    totalpricespan.innerHTML = subtotalprice.toFixed(2).replace(".", ",").concat("€");
}

function renderButtonTotalFoodprices(){
  let button = document.getElementById("buttonTotalFoodprices");
  let totalpricestring = document.getElementById("totalFoodPrices").innerText;
  button.innerText = "Buy now (" + totalpricestring + ")";
}