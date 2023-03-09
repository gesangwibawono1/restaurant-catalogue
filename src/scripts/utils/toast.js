const Toast = {
  show(text) {
    const toast = document.getElementById('toast');
    toast.innerText = text;
    toast.className = 'show';
    setTimeout(
      () => {
        toast.className = toast.classList.toggle('show');
      },
      3000,
    );
  },
};

export default Toast;
