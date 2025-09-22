const inputs = document.querySelectorAll(".input1");
const panier = document.querySelector(".panier");
const productBox = document.querySelector('.panier-box');
const addCartB = document.querySelectorAll('.add-cart');
function focusfunc(){
    let parent = this.parentNode;
    parent.classList.add('focus');
}

function blurfunc(){
    let parent = this.parentNode;
    if(this.value ===''){
        parent.classList.remove('focus');
    }
}

inputs.forEach((input1)=>{
    input1.addEventListener('focus', focusfunc)
    input1.addEventListener('blur', blurfunc)
})

addCartB.forEach(button=>{
    button.addEventListener('click', event =>{
        const productBox = event.target.closest('.product-box');
        addToCart(productBox);
    });
});

const cartContent = document.querySelector('.panier-content'); 
const addToCart = productBox =>{
    const productImgSrc = productBox.querySelector('img').src;
    const productTitle = productBox.querySelector('.product-title').textContent;
    const productPrice = productBox.querySelector('.price').textContent;

    const cartItems = cartContent.querySelectorAll(".product-title");
    for(let item of cartItems){
        if(item.textContent === productTitle){
            alert("Ce produit est deja au panier");
            return;
        }
    }
    const cartBox = document.createElement('div');
    cartBox.classList.add('panier-box');
    cartBox.innerHTML = `
        <img src="${productImgSrc}" alt="CARTON PAPIER COPY WIN VERT">
        <div class="cart-detail">
            <h4 class="product-title">${productTitle}</h4>
            <span class="cart-price">${productPrice}</span>
            <div class="cart-quantity">
                <button id="decrement">-</button>
                <span class="number">1</span>
                <button id="increment">+</button>
            </div>
        </div>
        <i class="ri-delete-bin-6-line cart-remove"></i>
    `;
    cartContent.appendChild(cartBox);
    cartBox.querySelector('.cart-quantity').addEventListener('click', event =>{
        const numberElement = cartBox.querySelector('.number');
        const decrementButton = cartBox.querySelector('#decrement');
        let quantity = numberElement.textContent;

        if(event.target.id === 'decrement' && quantity >1){
            quantity--;  
        } else if(event.target.id === 'increment'){
            quantity++;
        }
        numberElement.textContent = quantity; 
        updateTotalPrice();
    });
    updateCartCount(1);
    updateTotalPrice();
    
};
const updateTotalPrice = ()=>{
    const totalPriceElement = document.querySelector(".total-price");
    const cartBoxes = cartContent.querySelectorAll(".panier-box");
    let total = 0;
    cartBoxes.forEach(cartBox =>{
        const priceElement = cartBox.querySelector(".cart-price");
        const quantityElement = cartBox.querySelector(".number");
        const price = priceElement.textContent.replace("XOF", "");
        const quantity = quantityElement.textContent;
        total += price*quantity;
    });
    totalPriceElement.textContent = `XOF ${total}`;
}


    



