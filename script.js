function init() {
    renderBasket();
    renderDishes();
}

function renderDishes() {
    let menueCardsWrapperRef = document.getElementById("menue-cards-wrapper");
    menueCardsWrapperRef.innerHTML = "";

    for (let i = 0; i < myDishes.length; i++) {
        menueCardsWrapperRef.innerHTML += getDishTemplate(i);
    }
}

function renderBasket() {
    let basketContentRef = document.getElementById("basket-content");

    if (hasDishesInBasket()) {
        renderFilledBasket(basketContentRef);
    } else {
        basketContentRef.innerHTML = getEmptyBasketTemplate();
    }
}

function hasDishesInBasket() {
    for (let i = 0; i < myDishes.length; i++) {
        if (myDishes[i].amount > 0) {
            return true;
        }
    }
    return false;
}

function renderFilledBasket(basketContentRef) {
    let subtotal = calculateSubtotal();
    let total = subtotal + 4.99;
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

function addToBasket(index) {
    myDishes[index].amount++;
    renderBasket();
}

function decreaseAmount(index) {
    myDishes[index].amount--;
    renderBasket();
}

function deleteDish(index) {
    myDishes[index].amount = 0;
    renderBasket();
}

function calculateSubtotal() {
    let subtotal = 0;

    for (let i = 0; i < myDishes.length; i++) {
        if (myDishes[i].amount > 0) {
            subtotal += myDishes[i].price * myDishes[i].amount;
        }
    }
    return subtotal;
}
