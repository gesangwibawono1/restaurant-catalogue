import DicodingRestaurantSource from '../../data/dicoding-restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="hero__image">
        <div class="hero__text">
          <h1>Indonesian Food</h1>
          <p>Make your convenience with our service. See more melody of flavors in every dish.</p>
        </div>
      </div>
      <div class="content">
        <h1 class="content__heading">Explore Restaurant</h1>
        <div id="restaurants" class="restaurants">
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await DicodingRestaurantSource.allRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
