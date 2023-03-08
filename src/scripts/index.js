import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import '../styles/skip-link.css';
import App from './views/app';
import swRegister from './utils/sw-register';

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

window.openModal = function () {
  const modal = document.getElementById('formModal');
  modal.style.display = 'block';
};

window.closeModal = function () {
  const modal = document.getElementById('formModal');
  modal.style.display = 'none';
};

window.sendReview = function () {
  const modal = document.getElementById('formModal');
  modal.style.display = 'none';
  const form = document.getElementById('reviewForm');
  const id = document.getElementById('reviewId').value;
  const name = document.getElementById('reviewName').value;
  const review = document.getElementById('reviewReview').value;
  const toast = document.getElementById('toast');
  toast.innerText = `${id + name + review}`;
  toast.className = 'show';
  setTimeout(function () {
      toast.className = toast.classList.toggle('show');
    },
    3000
  );
  form.reset();
};
