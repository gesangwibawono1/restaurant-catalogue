const Modal = {
  open() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
  },
  close() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  },
};

export default Modal;
