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
    container.innerHTML += getFoodCardsTemplate(burger, i, category);
  }
}

function renderPizzaContent() {
  const container = document.getElementById("pizzaContentId");
  container.innerHTML = "";
  let category = "pizzas";

  for (let i = 0; i < menu.pizzas.length; i++) {
    const pizza = menu.pizzas[i];
    container.innerHTML += getFoodCardsTemplate(pizza, i, category);
  }
}

function renderSaladContent() {
  const container = document.getElementById("saladContentId");
  container.innerHTML = "";
  let category = "salads";

  for (let i = 0; i < menu.salads.length; i++) {
    const salad = menu.salads[i];
    container.innerHTML += getFoodCardsTemplate(salad, i, category);
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
