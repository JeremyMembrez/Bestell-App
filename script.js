const deliveryPrice = 4.99;

function init() {
    renderBasket();
    renderDishes();
}

// render the burger cards
function renderDishes() {
    let menueCardsWrapperRef = document.getElementById("menue-cards-wrapper");
    menueCardsWrapperRef.innerHTML = "";

    for (let i = 0; i < myDishes.length; i++) {
        menueCardsWrapperRef.innerHTML += getDishTemplate(i);
    }
}

// Does the shopping cart contain dishes? If so, render with function `renderFilledBasket(basketContentRef)`.
// Else render getEmptyBasketTemplate
function renderBasket() {
    let basketContentRef = document.getElementById("basket-content");

    if (hasDishesInBasket()) {
        renderFilledBasket(basketContentRef);
    } else {
        basketContentRef.innerHTML = getEmptyBasketTemplate();
    }
}

/** Checks whether dishes in "myDishes" have an amount > 0.
*@return 
*/
function hasDishesInBasket() {
    for (let i = 0; i < myDishes.length; i++) {
        if (myDishes[i].amount > 0) {
            return true;
        }
    }
    return false;
}

// adds dishes with a quantity greater than 0 to the shopping cart
// calculates the total price in the shopping cart
// replace the (.) with a (,)
function renderFilledBasket(basketContentRef) {
    let subtotal = calculateSubtotal();
    let total = subtotal + deliveryPrice;
    let formattedSubtotal = subtotal.toFixed(2).replace(".", ",");
    let formattedTotal = total.toFixed(2).replace(".", ",");

    basketContentRef.innerHTML = getFilledBasketTemplate(formattedSubtotal, formattedTotal);
    let orderWrapperRef = document.getElementById("order-wrapper");

    for (let i = 0; i < myDishes.length; i++) {
        if (myDishes[i].amount > 0) {
            orderWrapperRef.innerHTML += getOrderCardTemplate(i);
        }
    }
}

// Increase quantity in the shopping cart
function addToBasket(index) {
    myDishes[index].amount++;
    document.getElementById("sticky-rail").classList.add("open-basket");
    renderBasket();
}

// Decrease quantity in the shopping cart
function decreaseAmount(index) {
    myDishes[index].amount--;
    renderBasket();
}

// Remove dish from the shopping cart
function deleteDish(index) {
    myDishes[index].amount = 0;
    renderBasket();
}

// Calculation: dishes * amount
function calculateSubtotal() {
    let subtotal = 0;

    for (let i = 0; i < myDishes.length; i++) {
        if (myDishes[i].amount > 0) {
            subtotal += myDishes[i].price * myDishes[i].amount;
        }
    }
    return subtotal;
}

// Submit order and set all dishes to 0
// The shopping cart is hidden & Dialog opens
function sendOrder() {
    for (let i = 0; i < myDishes.length; i++) {
        myDishes[i].amount = 0;
    }
    document.getElementById("sticky-rail").classList.remove("open-basket");
    renderBasket();
    openDialog();
}

// Dialog opens
function openDialog() {
    document.getElementById("order-dialog").classList.remove("d-none");
}

// Dialog disappears
function closeDialog() {
    document.getElementById("order-dialog").classList.add("d-none");
}

// show or hide shopping cart
function toggleBasket() {
    document.getElementById("sticky-rail").classList.toggle("open-basket");
}

