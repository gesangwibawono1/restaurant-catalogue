import './restaurant-item';

class RestaurantList extends HTMLElement {
  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }

  render() {
    this.innerHTML = '';
    if (this._restaurants.length > 0) {
      this._restaurants.forEach((restaurant) => {
        const restaurantItemElement = document.createElement('restaurant-item');
        restaurantItemElement.restaurant = restaurant;
        this.appendChild(restaurantItemElement);
      });
    } else {
      this.innerHTML = '<h2 id="noData">Sorry! No Data Available.</h2>';
    }
  }
}

customElements.define('restaurant-list', RestaurantList);
