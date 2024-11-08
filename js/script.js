
document.querySelector(".logo").addEventListener("click",()=>{
    document.querySelector("nav").classList.toggle("active");
})
    
// Shopping Cart
ready();

function ready(){
    const cartItems = document.querySelectorAll(".cart__items");
    cartItems.forEach(cartItem =>{
        const cartBtn = cartItem.querySelector(".cart__btn");
        cartBtn.addEventListener("click", cartRemove)
    })
};


function cartRemove(event){
    let cartBtnClicked = event.target;
        cartBtnClicked.parentElement.parentElement.parentElement.remove();
}