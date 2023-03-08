import DicodingRestaurantSource from '../../data/dicoding-restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    const loading = document.querySelector('#loading');
    loading.style.visibility = 'visible';
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
    restaurantsContainer.innerHTML = '';
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
    const loading = document.querySelector('#loading');
    loading.style.visibility = 'hidden';
  },
};

export default Home;
