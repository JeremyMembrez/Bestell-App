function init() {
    renderDishes()
}


function renderDishes() {
let menueCardsWrapperRef = document.getElementById('menue-cards-wrapper');
menueCardsWrapperRef.innerHTML = "";

for (let i = 0; i < myDishes.length; i++) {
    menueCardsWrapperRef.innerHTML += getDishTemplate(i)
}
}