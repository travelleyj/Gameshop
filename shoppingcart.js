
$(".add-to-cart").click(function(){
    var gameName = $(this).attr('id');
    var gamePrice = $(this).parent().find('.price').text();
    var gameBanner = $(this).parent().find('img').attr('src');
    var game = {name: gameName, price: gamePrice, game_banner: gameBanner};
    var cart = JSON.parse(localStorage.getItem('cart'));
    if(cart == null){
        cart = [];
    }
    cart.push(game);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert("Game added to cart!");
    
});
console.log(localStorage.getItem('cart'));
document.body.onload = printshoppingcart();
function printshoppingcart(){
    var pricearray = [];
    var cart = JSON.parse(localStorage.getItem('cart'));
    var cartList = document.getElementById("cart-list");
    var total = 0;
    if(cart != null){
        for(let i = 0; i < cart.length; i++){
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `<div class="cart-item-banner">
            <img src="${cart[i].game_banner}" alt="${cart[i].name}">
            <p class="cart-item-name">${cart[i].name}</p>
            <p class="cart-item-price">${cart[i].price}</p>
            <button class="remove-from-cart" id="${cart[i].name}"><i class="fa-solid fa-cart-shopping"> remove from cart</i></button>
            </div>  
            `;
            console.log(cart[i].price.substring(4));
            console.log(cart[i]);
            cartList.appendChild(cartItem);
            total += parseInt(cart[i].price.substring(4));
            pricearray.push(parseInt(cart[i].price.substring(4)))
        }
        const totalItem = document.createElement("div");
        totalItem.classList.add("total");
        for(let i = 0; i < pricearray.length; i++){
            totalItem.innerHtml =`${pricearray[i]}`;
        }
        totalItem.innerHTML = `
        <p class="total-price">Total: SGD$${total}</p>`;
        cartList.appendChild(totalItem);
    }
}
$(".remove-from-cart").click(function(){
    var gameName = $(this).attr('id');
    var cart = JSON.parse(localStorage.getItem('cart'));
    for(let i = 0; i < cart.length; i++){
        if(cart[i].name == gameName){
            cart.splice(i, 1);
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert("Game removed from cart!");
    location.reload();
});
