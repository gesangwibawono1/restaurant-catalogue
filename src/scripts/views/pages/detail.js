import UrlParser from '../../routes/url-parser';
import DicodingRestaurantSource from '../../data/dicoding-restaurant-source';
import '../components/restaurant-detail';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import Spinner from '../../utils/spinner';

const Detail = {
  async render() {
    Spinner.show();
    return `
      <restaurant-detail class="restaurant"></restaurant-detail>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await DicodingRestaurantSource.detailRestaurant(url.id);
    document.getElementById('reviewId').value = url.id;
    const restaurantDetailElement = document.querySelector('restaurant-detail');
    restaurantDetailElement.restaurant = restaurant;

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        rating: restaurant.rating,
        pictureId: restaurant.pictureId,
      },
    });

    Spinner.hide();
  },
};

export default Detail;
