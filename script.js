function init() {
  renderFoodContent("burgers", "burgerAndSandwichesContentId");
  renderFoodContent("pizzas", "pizzaContentId");
  renderFoodContent("salads", "saladContentId");
  renderBasket();
  window.innerWidth > 1000 ? showBasket() : hideBasket();
}

function renderFoodContent(category, currentId) {
  const container = document.getElementById(currentId);
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
    renderButtonTotalFoodPrices();
  }
  renderShoppingCartNavIcon();
}

function addToBasket(i, category) {
  menu[category][i].amount++;
  window.innerWidth > 1000 ? showBasket() : null;
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
  renderShoppingCartNavIcon();
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

function renderShoppingCartNavIcon() {
  const button = document.getElementById("navBasketButtonId");
  const totalAmount = countTotalAmountOfSelectedItems();
  button.innerHTML = getShoppingCartNavIconTemplate(totalAmount);
  
}

function countTotalAmountOfSelectedItems() {
  let allItems = [...menu.burgers, ...menu.pizzas, ...menu.salads];
  let totalAmount = 0;

  for (let index = 0; index < allItems.length; index++) {
    totalAmount += allItems[index].amount;
  }

  return totalAmount;
}

function toggleBasketVisibility() {
  document.getElementById("basketContentId").classList.toggle("d_none");
}