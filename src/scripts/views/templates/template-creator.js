import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
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
      <p>#One#Two</p>
      <h4>Rating</h4>
      <p>${restaurant.rating}</p>
    </div>
  </div>
  <div class="restaurant__foods">
    <h3>Foods</h3>
    <div class="restaurant__scroll__foods">
      <div class="restaurant__food">item 1</div>
      <div class="restaurant__food">item 2</div>
      <div class="restaurant__food">item 3</div>
      <div class="restaurant__food">item 4</div>
      <div class="restaurant__food">item 5</div>
      <div class="restaurant__food">item 6</div>
      <div class="restaurant__food">item 7</div>
      <div class="restaurant__food">item 8</div>
      <div class="restaurant__food">item 9</div>
      <div class="restaurant__food">item 10</div>
    </div>
  </div>
  <div class="restaurant__drinks">
    <h3>Drinks</h3>
    <div class="restaurant__scroll__drinks">
      <div class="restaurant__drink">item 1</div>
      <div class="restaurant__drink">item 2</div>
      <div class="restaurant__drink">item 3</div>
      <div class="restaurant__drink">item 4</div>
      <div class="restaurant__drink">item 5</div>
      <div class="restaurant__drink">item 6</div>
      <div class="restaurant__drink">item 7</div>
      <div class="restaurant__drink">item 8</div>
      <div class="restaurant__drink">item 9</div>
      <div class="restaurant__drink">item 10</div>
    </div>
  </div>
  <div class="restaurant__description">
    <h3>Description</h3>
    <p>${restaurant.description}</p>
  </div>
`;

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
