// window.addEventListener("load")
// document.querySelector(".logo").addEventListener("click", () => {
//   document.querySelector("nav").classList.toggle("active");
// });

// HTML Elements
const addBtns = document.querySelectorAll(".game__btn");
const cartBtn = document.querySelector(".cartBtn");
const cartDetails = document.querySelector(".cart-details");
const totalCartItemsEl = document.querySelector(".total-cart-items");

// Values
let cartItems = 0;

// Adds Content to the cart
addBtns.forEach((buyBtn) => {
  buyBtn.addEventListener("click", (e) => {
    const game = e.target.parentElement.parentElement.parentElement;
    const gameImg = game.children[0].src;
    const gameTitle = game.children[1].children[0].children[0].innerText;
    const gamePrice = game.children[1].children[1].children[0].innerText;

    addToCart(gameImg, gameTitle, gamePrice);
  });
});

// Content Being add to cart
function addToCart(gameImg, gameTitle, gamePrice) {
  const cartCont = document.createElement("div");
  cartCont.classList.add("cards");
  const cartItems = `
                <figure class="cart__items">
                  <img
                    src="${gameImg}"
                    alt=""
                    height="200"
                    width="200"
                    class="cart__img"
                  />
                  <div class="cart__info flex">
                    <div class="cart__headings">
                      <h4 class="cart__title">${gameTitle}</h4>
                      <p class="game__price">${gamePrice}</p>
                    </div>
                    <div class="game__purchase center">
                      <input
                        type="number"
                        value="1"
                        class="cart__quantity center"
                      />
                      <button class="cart__btn">Delete</button>
                    </div>
                  </div>
                </figure>
    `;
  cartCont.innerHTML = cartItems;
  cartDetails.appendChild(cartCont);

  //  Will Check the number of cart items as we Add
  totalCartItems();

  // Delete Function
  deleteCartItem();
}

function deleteCartItem() {
  const cartItems = document.querySelectorAll(".cart__items");
  cartItems.forEach((cartItem) => {
    const cartBtn = cartItem.querySelector(".cart__btn");
    cartBtn.addEventListener("click", (event) => {
      let cartDeletebtnClicked = event.target; // Delete Button
      cartDeletebtnClicked.parentElement.parentElement.parentElement.parentElement.remove(); // Will delete card

      //  Will Check the number of cart items as we Delete
      totalCartItems();
    });
  });
}

function totalCartItems() {
  totalCartItemsEl.innerText = `${cartDetails.children.length}`;
}
