const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#query');
  I.see('No restaurant to be shown', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('No restaurant to be shown', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.restaurant-item__name');

  const firstResto = locate('.restaurant-item__name').first();
  const firstRestoName = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const likedRestoName = await I.grabTextFrom('.restaurant-item__name');

  assert.strictEqual(firstRestoName, likedRestoName);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('No restaurant to be shown', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.restaurant-item__name');

  const firstResto = locate('.restaurant-item__name').first();
  const firstRestoName = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const likedRestoName = await I.grabTextFrom('.restaurant-item__name');

  assert.strictEqual(firstRestoName, likedRestoName);

  const likedResto = locate('.restaurant-item__name').first();
  I.click(likedResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('No restaurant to be shown', '.restaurant-item__not__found');
});

Scenario('searching restaurants', async ({ I }) => {
  I.see('No restaurant to be shown', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.restaurant-item__name');

  const names = [];

  for (let i = 1; i <= 3; i++) {
    I.click(locate('.restaurant-item__name').at(i));
    I.seeElement('#likeButton');
    I.click('#likeButton');
    names.push(await I.grabTextFrom('.restaurant__name'));
    I.amOnPage('/');
  }

  I.amOnPage('/#/favorite');
  I.seeElement('#query');

  const searchQuery = names[1].substring(1, 3);
  const matchingRestaurants = names.filter((name) => name.indexOf(searchQuery) !== -1);

  I.fillField('#query', searchQuery);
  I.pressKey('Enter');

  const visibleLikedRestaurants = await I.grabNumberOfVisibleElements('.restaurant-item');
  assert.strictEqual(matchingRestaurants.length, visibleLikedRestaurants);

  matchingRestaurants.forEach(async (name, index) => {
    const visibleName = await I.grabTextFrom(locate('.restaurant-item__name').at(index + 1));
    assert.strictEqual(name, visibleName);
  });
});

Scenario('sending review of restaurant', async ({ I }) => {
  I.see('No restaurant to be shown', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.restaurant-item__name');

  const firstResto = locate('.restaurant-item__name').first();
  I.click(firstResto);

  I.seeElement('.restaurant__add__review');
  I.click('.restaurant__add__review');

  I.fillField('#reviewName', 'WFE');
  I.fillField('#reviewReview', 'Example');
  I.click('.form__submit');
});
