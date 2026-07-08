function init() {
  RenderBurgerAndSandwichesContent();
}

function RenderBurgerAndSandwichesContent() {
  const container = document.getElementById("BurgerAndSandwichesContentId");
  container.innerHTML = "";

  for (let i = 0; i < menu.burgers.length; i++) {
    const burger = menu.burgers[i];
    container.innerHTML += getFoodCardTemplate(burger, "burgers", i);
  }
}
