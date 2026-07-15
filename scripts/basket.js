function renderFullBasketCards() {
    box = document.getElementById("fullBasketContentId");
     box.innerHTML = "";

  let allItems = [];
  allItems = [...menu.burgers, ...menu.pizzas, ...menu.salads];

  for (let index = 0; index < allItems.length; index++) {
    if(allItems[index].amount !== 0){
       box.innerHTML += getBasketCardTemplate(index, allItems);
    }
  }
}

function renderSubtotalFoodPrices(){
  pricespan = document.getElementById("subtotalFoodPricesId");
  pricespan.innerHTML ="";
  
  let allItems = [];
  allItems = [...menu.burgers, ...menu.pizzas, ...menu.salads];
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
    subtotalpricespan = document.getElementById("subtotalFoodPricesId");
    totalpricespan = document.getElementById("totalFoodPrices");

    let subtotalprice = subtotalpricespan.innerText.replace("€", "").replace(",", ".");
    subtotalprice = parseFloat(subtotalprice);
    subtotalprice += 4.99;
    totalpricespan.innerHTML = subtotalprice.toFixed(2).replace(".", ",").concat("€");
}

function renderButtonTotalFoodprices(){
  button = document.getElementById("buttonTotalFoodprices");
  totalpricestring = document.getElementById("totalFoodPrices").innerText;
  button.innerText = "Buy now (" + totalpricestring + ")";
}