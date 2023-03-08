import UrlParser from '../../routes/url-parser';
import DicodingRestaurantSource from '../../data/dicoding-restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    const loading = document.querySelector('#loading');
    loading.style.visibility = 'visible';
    return `
      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    // const review = {
    //   id: url.id,
    //   name: 'WFE',
    //   review: 'Example',
    // };
    // const isSuccess = await DicodingRestaurantSource.addReview(review);
    // console.log(isSuccess);
    const restaurant = await DicodingRestaurantSource.detailRestaurant(url.id);
    document.getElementById('reviewId').value = url.id;
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    const loading = document.querySelector('#loading');
    loading.style.visibility = 'hidden';

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        rating: restaurant.rating,
        pictureId: restaurant.pictureId,
      },
    });
  },
};

export default Detail;
