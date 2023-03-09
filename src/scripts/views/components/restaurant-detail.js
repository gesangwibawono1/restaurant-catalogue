import CONFIG from '../../globals/config';

class RestaurantDetail extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    let categories = '';
    this._restaurant.categories.forEach((category) => {
      categories += `#${category.name}`;
    });

    let foods = '';
    this._restaurant.menus.foods.forEach((food) => {
      foods += `<div class="restaurant__food">${food.name}</div>`;
    });

    let drinks = '';
    this._restaurant.menus.drinks.forEach((drink) => {
      drinks += `<div class="restaurant__food">${drink.name}</div>`;
    });

    let reviews = '';
    this._restaurant.customerReviews.forEach((review) => {
      reviews += `
        <li class="restaurant__review">
          <h4>${review.name} - ${review.date}</h4>
          <p>${review.review}</p>
        </li>
      `;
    });

    this.innerHTML = `
      <h2 class="restaurant__name">${this._restaurant.name}</h2>
      <div class="restaurant__container__info">
        <img class="restaurant__picture" src="${CONFIG.BASE_IMAGE_URL + this._restaurant.pictureId}" alt="${this._restaurant.name}" />
        <div class="restaurant__info">
          <h3>Information</h3>
          <h4>Address</h4>
          <p>${this._restaurant.address}</p>
          <h4>City</h4>
          <p>${this._restaurant.city}</p>
          <h4>Categories</h4>
          <p>${categories}</p>
          <h4>Rating</h4>
          <p>${this._restaurant.rating}</p>
        </div>
      </div>
      <div class="restaurant__foods">
        <h3>Foods</h3>
        <div class="restaurant__scroll__foods">
          ${foods}
        </div>
      </div>
      <div class="restaurant__drinks">
        <h3>Drinks</h3>
        <div class="restaurant__scroll__drinks">
          ${drinks}
        </div>
      </div>
      <div class="restaurant__description">
        <h3>Description</h3>
        <p>${this._restaurant.description}</p>
      </div>
      <div class="restaurant__reviews">
        <h3>Reviews (${this._restaurant.customerReviews.length})</h3>
        <button class="restaurant__add__review" onclick="openModal()">Add Review</button>
        <ul class="restaurant__container__reviews">
          ${reviews}
        </ul>
      </div>
    `;
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
