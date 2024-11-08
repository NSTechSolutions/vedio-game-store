// window.addEventListener("load")
// document.querySelector(".logo").addEventListener("click", () => {
//   document.querySelector("nav").classList.toggle("active");
// });

// HTML Elements
const buyBtns = document.querySelectorAll(".game__btn");
const cartBtn = document.querySelector(".cartBtn");
const cartContEl = document.querySelector(".cart-cont");
// Shopping Cart
ready();

function ready() {
  const cartItems = document.querySelectorAll(".cart__items");
  cartItems.forEach((cartItem) => {
    const cartBtn = cartItem.querySelector(".cart__btn");
    cartBtn.addEventListener("click", cartRemove);
  });
}

// Cart Delete Buttton
function cartRemove(event) {
  let cartBtnClicked = event.target;
  cartBtnClicked.parentElement.parentElement.parentElement.remove();
}

buyBtns.forEach((buyBtn) => {
  buyBtn.addEventListener("click", (e) => {
    const game = e.target.parentElement.parentElement.parentElement;
    const gameImg = game.children[0].src;
    const gameTitle = game.children[1].children[0].children[0].innerText;
    const gamePrice = game.children[1].children[1].children[0].innerText;

    addToCart(gameImg, gameTitle, gamePrice);
  });
});

function addToCart(gameImg, gameTitle, gamePrice) {
  //   console.log(Testing);
  const cartCont = `
            <div class="cart__cont">
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
              </div>
    `;
  cartContEl.innerHTML = cartCont;
}
