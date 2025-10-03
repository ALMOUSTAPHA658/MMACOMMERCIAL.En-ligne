const men = document.querySelector('.menubar');
const barm = document.querySelector('.sidebar');
const clo = document.querySelector('.ri-close-line');
const cart = document.querySelector('.cart');
const icon = document.querySelector('#cart');
const ose = document.querySelector('#cart-remove');
const addCartB = document.querySelectorAll('.add-cart');
const productBox = document.querySelector('.product-box');

men.addEventListener('click', ()=>{
    barm.classList.add('active');
});
clo.addEventListener('click', ()=>{
    barm.classList.remove('active');
});
icon.addEventListener('click', ()=>{
    cart.classList.add('active1')
});
ose.addEventListener('click', ()=>{
    cart.classList.remove('active1')
});
addCartB.forEach(button =>{
    button.addEventListener('click', event =>{
        
        console.log('.productBox')
    });
});
addCartB.forEach(button=>{
    button.addEventListener('click', event =>{
        const productBox = event.target.closest('.product-box');
        addToCart(productBox);
    });
});
const cartContent = document.querySelector('.cart-content'); 
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
    cartBox.classList.add('cart-box');
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
    cartBox.querySelector('.cart-remove').addEventListener('click', ()=>{
        cartBox.remove();
        updateCartCount(-1);
        updateTotalPrice();
    });
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


function search() {
    let filter = document.getElementById('find').value.toUpperCase();
    let item = document.querySelectorAll('.product-box');
    let l = document.getElementsByTagName('h4');
    for(var i = 0;i<=l.length;i++){
        let a=item[i].getElementsByTagName('h4')[0];
        let value=a.innerHTML || a.innerText || a.textContent;
        if(value.toUpperCase().indexOf(filter) > -1) {
            item[i].style.display="";     
        }
        else
        {
            item[i].style.display="none";
        }
    }
}
let cartItemCount = 0;
const updateCartCount = change =>{
    const cartItemCountBadge = document.querySelector('.cart-icon-count');
    cartItemCount +=change;
    if(cartItemCount >0){
        cartItemCountBadge.style.visibility ='visible';
        cartItemCountBadge.textContent = cartItemCount;
    } else {
        cartItemCountBadge.style.visibility ='hidden';
        cartItemCountBadge.textContent = '';
    }
};
const updateTotalPrice = ()=>{
    const totalPriceElement = document.querySelector(".total-price");
    const cartBoxes = cartContent.querySelectorAll(".cart-box");
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
const buyNowButton = document.querySelector('.btn-buy');
buyNowButton.addEventListener('click',()=>{
    const cartBoxes = cartContent.querySelectorAll('.cart-box');
    if(cartBoxes.length === 0){
        alert('votre panier est vide, s\'il vous plait ajouter des produits dans votre panier.');
        return;
    }
    cartBoxes.forEach(cartBox => cartBox.remove());

    cartItemCount = 0;
    updateCartCount(0);

    updateTotalPrice();
    window.location.href="MMACliv.html"
})

const inputs = document.querySelectorAll(".input1");
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
function ouvrirWhatsApp() {
    
}


    




