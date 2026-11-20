function getDishTemplate(index) {

return`
    <div class="menue-card">
                        <img
                            src="${myDishes[index].src}"
                            alt="${myDishes[index].alt}"
                        />
                        <div class="burger-description">
                            <h4>${myDishes[index].name}</h4>
                            <p>
                                ${myDishes[index].description}
                            </p>
                        </div>
                        <div class="price-button-content">
                            <p>${myDishes[index].price.toFixed(2).replace(".", ",")}€</p>
                            <button onclick="addToBasket(${index})">Add to basket</button>
                        </div>
                    </div>
    `;
}

function getEmptyBasketTemplate() {

    return`
        <h4>Your Basket</h4>
        <p>Nothing here yet.<br>Go ahead and choose something<br>delicious!</p>
        <img class="empty-basket-img" src="./assets/icons/shopping_cart.svg" alt="">
    `
}

function getFilledBasketTemplate() {

    return`
    <h4>Your Basket</h4>
        <div id="order-wrapper" class="order-wrapper">
                </div>
                    <table class="basket-table">
                        <tr>
                            <td>Subtotal</td>
                            <td class="price">36,70</td>
                        </tr>
                        <tr>
                            <td>Delivery fee</td>
                            <td class="price">4,99€</td>
                        </tr>
                        <tr class="total-row">
                            <td>Total</td>
                            <td class="price">41,69€</td>
                        </tr>
                    </table>
                <button id="buy-now-button">Buy now (41,69€)</button>
        `
}

function getOrderCardTemplate(index) {
    return`
    <div class="order-card">
        <p>${myDishes[index].amount} x ${myDishes[index].name}</p>
        <div class="order-position">
            <div class="order-amount">
                <button><img class="trash" src="./assets/icons/delete.svg"alt="Löschen Icon"/></button>
                <button><img class="minus" src="./assets/icons/-.svg"alt="Minus Icon"/></button>
                <p>${myDishes[index].amount}</p>
                <button><img class="plus" src="./assets/icons/+.svg"alt="Plus Icon"/></button>
            </div>
            <p>${(myDishes[index].price * myDishes[index].amount).toFixed(2).replace(".", ",")}€</p>
        </div>
    </div>
    `
}