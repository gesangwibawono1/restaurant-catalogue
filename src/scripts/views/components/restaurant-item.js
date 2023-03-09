import CONFIG from '../../globals/config';

class RestaurantItem extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="restaurant-item">
        <div class="restaurant-item__thumbnail">
        <img class="restaurant-item__thumbnail__picture" src="${CONFIG.BASE_IMAGE_URL + this._restaurant.pictureId}" alt="${this._restaurant.name}">
        <div class="restaurant-item__thumbnail__city">${this._restaurant.city}</div>
        </div>
        <div class="restaurant-item__content">
        <div class="rating">
          <div class="rating__fill" style="width: ${(this._restaurant.rating / 5) * 100}%">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          </div>
          <div class="rating__empty">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          </div>
        </div>
        <h3>
          <a href="/#/detail/${this._restaurant.id}" class="restaurant-item__name">${this._restaurant.name}</a>
        </h3>
        <p class="restaurant-item__description">${this._restaurant.description}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
