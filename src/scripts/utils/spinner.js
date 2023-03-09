const Spinner = {
  show() {
    const loading = document.getElementById('spinner');
    loading.style.visibility = 'visible';
  },
  hide() {
    const loading = document.getElementById('spinner');
    loading.style.visibility = 'hidden';
  },
};

export default Spinner;
