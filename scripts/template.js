function getFoodCardsTemplateNoItems(food, i, category) {
  return `
    <div class="food_card">
      <img class="food_card_image" src="${food.image}" alt="" />
      <div>
        <p class="food_card_name">${food.name}</p>
        <p class="food_card_description">${food.description}</p>
      </div>
      <div class="food_card_price_and_button_layout_div">
        <span class="food_card_price">${food.price}</span>
        <button tabindex="0" class="food_card_button_empty" onclick="addToBasket(${i}, '${category}')">
          Add to basket
        </button>
      </div>
    </div>
  `;
}

function getFoodCardsTemplateWithItems(food, i, category) {
  return `
    <div class="food_card">
      <img class="food_card_image" src="${food.image}" alt="" />
      <div>
        <p class="food_card_name">${food.name}</p>
        <p class="food_card_description">${food.description}</p>
      </div>
      <div class="food_card_price_and_button_layout_div">
        <span class="food_card_price">${food.price}</span>
        <button tabindex="0" class="food_card_button_not_empty" onclick="addToBasket(${i}, '${category}')">
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
      alt=""
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
      <button tabindex="0" onclick="buyNow()" class="basket_buy_button" id="buttonTotalFoodPrices">Buy now ()</button>
    </div>
  `;
}

function getSingleBasketCardTemplate(index, allItems) {
  return `
    <div class="basked_card_general">
      <p>
        <span>${allItems[index].amount}</span> x
        <span>${allItems[index].name}</span>
      </p>
      <div class="basket_card_footer">
        <div class="basket_card_footer_count_control_area">
          <button class="delete_food_card_icon_button" onclick="removeAllSelectedItems(${index})">
            <svg viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6C4.71667 6 4.47917 5.90417 4.2875 5.7125C4.09583 5.52083 4 5.28333 4 5C4 4.71667 4.09583 4.47917 4.2875 4.2875C4.47917 4.09583 4.71667 4 5 4H9C9 3.71667 9.09583 3.47917 9.2875 3.2875C9.47917 3.09583 9.71667 3 10 3H14C14.2833 3 14.5208 3.09583 14.7125 3.2875C14.9042 3.47917 15 3.71667 15 4H19C19.2833 4 19.5208 4.09583 19.7125 4.2875C19.9042 4.47917 20 4.71667 20 5C20 5.28333 19.9042 5.52083 19.7125 5.7125C19.5208 5.90417 19.2833 6 19 6V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM17 6H7V19H17V6ZM10 17C10.2833 17 10.5208 16.9042 10.7125 16.7125C10.9042 16.5208 11 16.2833 11 16V9C11 8.71667 10.9042 8.47917 10.7125 8.2875C10.5208 8.09583 10.2833 8 10 8C9.71667 8 9.47917 8.09583 9.2875 8.2875C9.09583 8.47917 9 8.71667 9 9V16C9 16.2833 9.09583 16.5208 9.2875 16.7125C9.47917 16.9042 9.71667 17 10 17ZM14 17C14.2833 17 14.5208 16.9042 14.7125 16.7125C14.9042 16.5208 15 16.2833 15 16V9C15 8.71667 14.9042 8.47917 14.7125 8.2875C14.5208 8.09583 14.2833 8 14 8C13.7167 8 13.4792 8.09583 13.2875 8.2875C13.0958 8.47917 13 8.71667 13 9V16C13 16.2833 13.0958 16.5208 13.2875 16.7125C13.4792 16.9042 13.7167 17 14 17Z" fill="currentColor"/>
            </svg>
          </button>
          <span class="basket_card_amount">${allItems[index].amount}</span>
          <button onclick="increaseAmount(${index})" aria-label="Increase quantity">+</button>
        </div>
        <span class="total_dishes_price">${allItems[index].price}</span>
      </div>
    </div>
  `;
}

function getMultipleBasketCardTemplate(index, allItems) {
  return `
  <div class="basked_card_general">
    <div class="multiple_basket_card_top_div">
      <p>
        <span>${allItems[index].amount}</span> x
        <span>${allItems[index].name}</span>
      </p>
      <button class="delete_food_card_icon_button delete_food_card_icon_button_multiple_margin" onclick="removeAllSelectedItems(${index})" aria-label="Remove ${allItems[index].name} from basket">
        <svg viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6C4.71667 6 4.47917 5.90417 4.2875 5.7125C4.09583 5.52083 4 5.28333 4 5C4 4.71667 4.09583 4.47917 4.2875 4.2875C4.47917 4.09583 4.71667 4 5 4H9C9 3.71667 9.09583 3.47917 9.2875 3.2875C9.47917 3.09583 9.71667 3 10 3H14C14.2833 3 14.5208 3.09583 14.7125 3.2875C14.9042 3.47917 15 3.71667 15 4H19C19.2833 4 19.5208 4.09583 19.7125 4.2875C19.9042 4.47917 20 4.71667 20 5C20 5.28333 19.9042 5.52083 19.7125 5.7125C19.5208 5.90417 19.2833 6 19 6V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM17 6H7V19H17V6ZM10 17C10.2833 17 10.5208 16.9042 10.7125 16.7125C10.9042 16.5208 11 16.2833 11 16V9C11 8.71667 10.9042 8.47917 10.7125 8.2875C10.5208 8.09583 10.2833 8 10 8C9.71667 8 9.47917 8.09583 9.2875 8.2875C9.09583 8.47917 9 8.71667 9 9V16C9 16.2833 9.09583 16.5208 9.2875 16.7125C9.47917 16.9042 9.71667 17 10 17ZM14 17C14.2833 17 14.5208 16.9042 14.7125 16.7125C14.9042 16.5208 15 16.2833 15 16V9C15 8.71667 14.9042 8.47917 14.7125 8.2875C14.5208 8.09583 14.2833 8 14 8C13.7167 8 13.4792 8.09583 13.2875 8.2875C13.0958 8.47917 13 8.71667 13 9V16C13 16.2833 13.0958 16.5208 13.2875 16.7125C13.4792 16.9042 13.7167 17 14 17Z" fill="currentColor"/>
        </svg>
      </button>
    </div>
      <div class="basket_card_footer">
        <div class="basket_card_footer_count_control_area">
          <button onclick="decreaseAmount(${index})" aria-label="Decrease quantity">-</button>
          <span class="basket_card_amount">${allItems[index].amount}</span>
          <button onclick="increaseAmount(${index})" aria-label="Increase quantity">+</button>
        </div>
        <span class="total_dishes_price">${allItems[index].price}</span>
      </div>
    </div>
  `;
}
