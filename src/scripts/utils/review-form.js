const ReviewForm = {
  review() {
    const id = document.getElementById('reviewId').value;
    const name = document.getElementById('reviewName').value;
    const review = document.getElementById('reviewReview').value;
    return { id, name, review };
  },
  reset() {
    const form = document.getElementById('reviewForm');
    form.reset();
  },
};

export default ReviewForm;
