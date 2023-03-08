import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => {
  let categories = '';
  restaurant.categories.forEach((category) => {
    categories += `#${category.name}`;
  });

  let foods = '';
  restaurant.menus.foods.forEach((food) => {
    foods += `<div class="restaurant__food">${food.name}</div>`;
  });

  let drinks = '';
  restaurant.menus.drinks.forEach((drink) => {
    drinks += `<div class="restaurant__food">${drink.name}</div>`;
  });

  let reviews = '';
  restaurant.customerReviews.forEach((review) => {
    reviews += `
      <li class="restaurant__review">
        <h4>${review.name} - ${review.date}</h4>
        <p>${review.review}</p>
      </li>
    `;
  });

  const restaurantDetail = `
    <h2 class="restaurant__name">${restaurant.name}</h2>
    <div class="restaurant__container__info">
      <img class="restaurant__picture" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
      <div class="restaurant__info">
        <h3>Information</h3>
        <h4>Address</h4>
        <p>${restaurant.address}</p>
        <h4>City</h4>
        <p>${restaurant.city}</p>
        <h4>Categories</h4>
        <p>${categories}</p>
        <h4>Rating</h4>
        <p>${restaurant.rating}</p>
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
      <p>${restaurant.description}</p>
    </div>
    <div class="restaurant__reviews">
      <h3>Reviews (${restaurant.customerReviews.length})</h3>
      <button class="restaurant__add__review" onclick="openModal('${restaurant.id}')">Add Review</button>
      <ul class="restaurant__container__reviews">
        ${reviews}
      </ul>
    </div>
  `;
  return restaurantDetail;
};

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__thumbnail">
      <img class="restaurant-item__thumbnail__picture"
        src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"
        alt="${restaurant.name}">
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

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
