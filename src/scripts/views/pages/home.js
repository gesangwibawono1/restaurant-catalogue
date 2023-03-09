import DicodingRestaurantSource from '../../data/dicoding-restaurant-source';
import Spinner from '../../utils/spinner';
import '../components/restaurant-list';

const Home = {
  async render() {
    Spinner.show();
    return `
      <div class="hero__image">
        <div class="hero__text">
          <h1>Indonesian Food</h1>
          <p>Make your convenience with our service. See more melody of flavors in every dish.</p>
        </div>
      </div>
      <div class="content">
        <h1 class="content__heading">Explore Restaurant</h1>
        <restaurant-list class="restaurants"></restaurant-list>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await DicodingRestaurantSource.allRestaurants();
    const restaurantListElement = document.querySelector('restaurant-list');
    restaurantListElement.restaurants = restaurants;
    Spinner.hide();
  },
};

export default Home;
