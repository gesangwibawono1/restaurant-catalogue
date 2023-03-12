import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
 <div class="restaurant-item">
    <div class="restaurant-item__thumbnail">
      <img class="restaurant-item__thumbnail__picture" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
      <div class="restaurant-item__thumbnail__city">${restaurant.city}</div>
    </div>
    <div class="restaurant-item__content">
      <div class="rating">
        <div class="rating__fill" style="width: ${(restaurant.rating / 5) * 100}%">
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
        <a href="/#/detail/${restaurant.id}" class="restaurant-item__name">${restaurant.name}</a>
      </h3>
      <p class="restaurant-item__description">${restaurant.description}</p>
    </div>
  </div>
`;
const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
