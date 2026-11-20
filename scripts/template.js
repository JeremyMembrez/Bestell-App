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
                            <button>Add to basket</button>
                        </div>
                    </div>
    `;
}