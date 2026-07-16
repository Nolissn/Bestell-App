function init() {
  renderFoodContent("burgers", "burgerAndSandwichesContentId");
  renderFoodContent("pizzas", "pizzaContentId");
  renderFoodContent("salads", "saladContentId");
  renderBasket();
}

function renderFoodContent(category, currentid) {
  const container = document.getElementById(currentid);
  container.innerHTML = "";

  for (let i = 0; i < menu[category].length; i++) {
    const food = menu[category][i];
    if(food.amount !== 0){
      container.innerHTML += getFoodCardsTemplateWithItems(food, i, category);
    }
    else{
      container.innerHTML += getFoodCardsTemplateNoItems(food, i, category);
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
  showBasket();
  renderBasket();
  reRenderFoodCardButtons();
}

function removeAllSelectedItems(index) {
  let allItems = [...menu.burgers, ...menu.pizzas, ...menu.salads];

  allItems[index].amount = 0;
  renderBasket();
  reRenderFoodCardButtons();
}

function decreaseAmount(index) {
  let allItems = [...menu.burgers, ...menu.pizzas, ...menu.salads];

  allItems[index].amount--;
  renderBasket();
  reRenderFoodCardButtons();
}

function increaseAmount(index) {
  let allItems = [...menu.burgers, ...menu.pizzas, ...menu.salads];

  allItems[index].amount++;
  renderBasket();
  reRenderFoodCardButtons();
}

function checkIfBasketEmpty() {
  let allItems = [...menu.burgers, ...menu.pizzas, ...menu.salads];

  for (let index = 0; index < allItems.length; index++) {
    if (allItems[index].amount !== 0) {
      return false;
    }
  }
  return true;
}

function buyNow() {
  openDialog();
  emptyBasket();
  hideBasket();
}

function hideBasket() {
  document.getElementById("basketContentId").classList.add("d_none");
}

function showBasket() {
  document.getElementById("basketContentId").classList.remove("d_none");
}

function emptyBasket() {
  let allItems = [...menu.burgers, ...menu.pizzas, ...menu.salads];

  for (let index = 0; index < allItems.length; index++) {
    allItems[index].amount = 0;
  }
  renderBasket();
  reRenderFoodCardButtons();
}

function openDialog() {
  const dialog = document.getElementById("dialogId");
  dialog.showModal();
  setTimeout(closeDialog, 5000);
}

function closeDialog() {
  const dialog = document.getElementById("dialogId");
  dialog.close();
}

function reRenderFoodCardButtons(){
  renderFoodContent("burgers", "burgerAndSandwichesContentId");
  renderFoodContent("pizzas", "pizzaContentId");
  renderFoodContent("salads", "saladContentId");
}