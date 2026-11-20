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
    let hasItems = false;

    for (let i = 0; i < myDishes.length; i++) {
        if (myDishes[i].amount > 0) {
            hasItems = true;
        }
    }

    if (hasItems === true) {
        basketContentRef.innerHTML = getFilledBasketTemplate();

        let orderWrapperRef = document.getElementById("order-wrapper");

        for (let i = 0; i < myDishes.length; i++) {
            if (myDishes[i].amount > 0) {
            orderWrapperRef.innerHTML += getOrderCardTemplate(i);
            }
        }

    } else {
        basketContentRef.innerHTML = getEmptyBasketTemplate();
    }
}

function addToBasket(index) {

myDishes[index].amount++;
    renderBasket();
}