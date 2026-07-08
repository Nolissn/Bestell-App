function getFoodCardTemplate(food, category, index) {
  return `
    <div class="food_card">
      <img class="food_card_image" src="${food.image}" alt="${food.name}" />
      <div class="food_card_text">
        <h3 class="food_card_name">${food.name}</h3>
        <p class="food_card_description">${food.description}</p>
        <span class="food_card_price">${food.price}</span>
      </div>
      <button class="food_card_add_button" onclick="addToCart('${category}', ${index})">
        +
      </button>
    </div>
  `;
}