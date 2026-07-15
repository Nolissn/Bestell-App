function getFoodCardsTemplateNoItems(food, i, category) {
  return `
    <div class="food_card">
      <img class="food_card_image" src="${food.image}" alt="${food.name}" />
      <div>
        <p class="food_card_name">${food.name}</p>
        <p class="food_card_description">${food.description}</p>
      </div>
      <div class="food_card_price_and_button_layout_div">
        <span class="food_card_price">${food.price}</span>
        <button class="food_card_button_empty" onclick="addToBasket(${i}, '${category}')">
          Add to basket
        </button>
      </div>
    </div>
  `;
}

function getFoodCardsTemplateWithItems(food, i, category) {
  return `
    <div class="food_card">
      <img class="food_card_image" src="${food.image}" alt="${food.name}" />
      <div>
        <p class="food_card_name">${food.name}</p>
        <p class="food_card_description">${food.description}</p>
      </div>
      <div class="food_card_price_and_button_layout_div">
        <span class="food_card_price">${food.price}</span>
        <button class="food_card_button_not_empty" onclick="addToBasket(${i}, '${category}')">
          Added ${food.amount}
        </button>
      </div>
    </div>
  `;
}

function getEmptyBasketTemplate() {
  return `
    <p class="basket_title_general empty_basket_title">Your Basket</p>
    <p class="empty_basket_text">Nothing here yet.</p>
    <p class="empty_basket_text">Go ahead and choose something</p>
    <p class="empty_basket_text">delicious!</p>
    <img
      class="empty_basket_shopping_cart_icon"
      src="./assets/icons/SVG/shopping_cart_icon.svg"
      alt="Shopping cart icon"
    />
  `;
}

function getFullBasketTemplate() {
  return `
    <p class="basket_title_general full_basket_title">Your Basket</p>
    <div class="full_basket_content" id="fullBasketContentId"></div>
    <div class="calculation_area_div">
      <div class="subtotal_area">
        <span class="nontotal_span_font">Subtotal</span>
        <span class="nontotal_span_font" id="subtotalFoodPricesId"></span>
      </div>
      <div class="delivery_fee_area">
        <span class="nontotal_span_font">Delivery fee</span>
        <span class="nontotal_span_font">4,99€</span>
      </div>
      <hr />
      <div class="total_area">
        <strong class="total_area_strong_font">Total</strong>
        <strong class="total_area_strong_font" id="totalFoodPrices"></strong>
      </div>
      <button class="basket_buy_button" id="buttonTotalFoodprices">Buy now ()</button>
    </div>
  `;
}

function getBasketCardTemplate(index, allItems) {
  return `
    <div class="basked_card_general">
      <p>
        <span>${allItems[index].amount}</span> x
        <span>${allItems[index].name}</span>
      </p>
      <div class="basket_card_footer">
        <div class="basket_card_footer_count_control_area">
          <img
            src="./assets/icons/SVG/delete_icon.svg"
            alt="Delete card button"
          />
          <span>${allItems[index].amount}</span>
          <span>+</span>
        </div>
        <span class="total_dishes_price">${allItems[index].price}</span>
      </div>
    </div>
  `;
}
