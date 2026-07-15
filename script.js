function init() {
  renderBurgerAndSandwichesContent();
  renderPizzaContent();
  renderSaladContent();
  renderBasket();
}

function renderBurgerAndSandwichesContent() {
  const container = document.getElementById("burgerAndSandwichesContentId");
  container.innerHTML = "";
  let category = "burgers";

  for (let i = 0; i < menu.burgers.length; i++) {
    const burger = menu.burgers[i];
    if(menu.burgers[i].amount !== 0){
      container.innerHTML += getFoodCardsTemplateWithItems(burger, i, category)
    }
    else{
      container.innerHTML += getFoodCardsTemplateNoItems(burger, i, category);
    }
  }
}

function renderPizzaContent() {
  const container = document.getElementById("pizzaContentId");
  container.innerHTML = "";
  let category = "pizzas";

  for (let i = 0; i < menu.pizzas.length; i++) {
    const pizza = menu.pizzas[i];
    if(menu.pizzas[i].amount !== 0){
      container.innerHTML += getFoodCardsTemplateWithItems(pizza, i, category)
    }
    else{
      container.innerHTML += getFoodCardsTemplateNoItems(pizza, i, category);
    }
  }
}

function renderSaladContent() {
  const container = document.getElementById("saladContentId");
  container.innerHTML = "";
  let category = "salads";

  for (let i = 0; i < menu.salads.length; i++) {
    const salad = menu.salads[i];
    if(menu.salads[i].amount !== 0){
      container.innerHTML += getFoodCardsTemplateWithItems(salad, i, category)
    }
    else{
      container.innerHTML += getFoodCardsTemplateNoItems(salad, i, category);
    }
  }
}

function renderBasket() {
  const container = document.getElementById("basketContentId");
  container.innerHTML = "";

  if (checkIfBasketEmpty() === true) {
    container.innerHTML += getEmptyBasketTemplate();
  }
  else{
    container.innerHTML += getFullBasketTemplate();
    renderFullBasketCards();
    renderSubtotalFoodPrices();
    renderTotalFoodPrices();
    renderButtonTotalFoodprices();
  }
}

function addToBasket(i, category) {
  menu[category][i].amount++;
  renderBasket();
  reRenderFoodCardButtons();
}

function removeAllSelectedItems(index) {
  let allItems = [];
  allItems = [...menu.burgers, ...menu.pizzas, ...menu.salads];

  allItems[index].amount = 0;
  renderBasket();
  reRenderFoodCardButtons();
}

function decreaseAmount(index) {
  let allItems = [];
  allItems = [...menu.burgers, ...menu.pizzas, ...menu.salads];

  allItems[index].amount--;
  renderBasket();
  reRenderFoodCardButtons();
}

function increaseAmount(index) {
  let allItems = [];
  allItems = [...menu.burgers, ...menu.pizzas, ...menu.salads];

  allItems[index].amount++;
  renderBasket();
  reRenderFoodCardButtons();
}

function checkIfBasketEmpty() {
  let allItems = [];
  allItems = [...menu.burgers, ...menu.pizzas, ...menu.salads];

  for (let index = 0; index < allItems.length; index++) {
    if (allItems[index].amount !== 0) {
      return false;
    }
  }
  return true;
}

function reRenderFoodCardButtons(){
  renderBurgerAndSandwichesContent();
  renderPizzaContent();
  renderSaladContent();
}