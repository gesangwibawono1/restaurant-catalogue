import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import '../components/restaurant-item';

const Favorite = {
  async render() {
    return `
      <div class="content">
        <h1 class="content__heading">My Favorite Restaurants</h1>
        <restaurant-list class="restaurants"></restaurant-list>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantListElement = document.querySelector('restaurant-list');
    restaurantListElement.restaurants = restaurants;
  },
};

export default Favorite;
