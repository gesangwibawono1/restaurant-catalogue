import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import '../styles/skip-link.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import Modal from './utils/modal';
import Spinner from './utils/spinner';
import Toast from './utils/toast';
import ReviewForm from './utils/review-form';
import DicodingRestaurantSource from './data/dicoding-restaurant-source';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

window.openModal = () => {
  Modal.open();
};

window.closeModal = () => {
  Modal.close();
};

window.sendReview = async () => {
  Modal.close();
  Spinner.show();
  const review = ReviewForm.review();
  const isSuccess = await DicodingRestaurantSource.addReview(review);
  let text = '';
  if (isSuccess) {
    text = 'Successfully submitted review.';
  } else {
    text = 'Sorry failed to submit! Something went wrong.';
  }
  ReviewForm.reset();
  Spinner.hide();
  Toast.show(text);
};
