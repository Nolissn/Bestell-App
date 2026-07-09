function getFoodCardTemplate(food, category, index) {
  return `
    <div class="food_card">
      <img class="food_card_image" src="${food.image}" alt="${food.name}"/>
      <div>
        <h3 class="food_card_name">${food.name}</h3>
        <p class="food_card_description">${food.description}</p>
      </div>
      <div class="food_card_price_and_button_layout_div">
      <span class="food_card_price">${food.price}</span>
      <button class="food_card_button" onclick="addToBasket('${category}', ${index})">
        Add to basket
      </button>
      </div>
    </div>
  `;
}