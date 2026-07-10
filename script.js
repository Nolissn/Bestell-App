function init() {
  RenderBurgerAndSandwichesContent();
  RenderPizzaContent();
  RenderSaladContent();
}

function RenderBurgerAndSandwichesContent() {
  const container = document.getElementById("BurgerAndSandwichesContentId");
  container.innerHTML = "";
  let category = "burger";

  for (let i = 0; i < menu.burgers.length; i++) {
    const burger = menu.burgers[i];
    container.innerHTML += getFoodCardsTemplate(burger, i, category);
  }
}

function RenderPizzaContent(){
  const container = document.getElementById("PizzaContentId");
  container.innerHTML = "";
  let category = "pizza";

 for (let i = 0; i < menu.pizzas.length; i++) {
  const pizza = menu.pizzas[i];
  container.innerHTML += getFoodCardsTemplate(pizza, i, category);
 }
}

function RenderSaladContent() {
  const container = document.getElementById("SaladContentId");
  container.innerHTML = "";
  let category = "salad";
  
  for (let i = 0; i < menu.salads.length; i++) {
    const salad = menu.salads[i];
    container.innerHTML += getFoodCardsTemplate(salad, i, category);
  }
}

function addToBasket(i, category)
{
  console.log(i+" "+category);
  

}