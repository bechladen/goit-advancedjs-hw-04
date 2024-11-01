import fetchImages from './js/pixabay-api.js';
import {
  renderImages,
  clearGallery,
  showLoader,
  hideLoader,
  showError,
  initializeLightbox,
} from './js/render-functions.js';

const form = document.querySelector('.search-form');
const input = document.querySelector('.search-input');

initializeLightbox();

form.addEventListener('submit', event => {
  event.preventDefault();

  const query = input.value.trim();
  if (!query) {
    showError('Please enter a search term');
    return;
  }

  clearGallery();
  showLoader();
  input.value = '';

  fetchImages(query)
    .then(data => {
      hideLoader();

      if (data.hits.length === 0) {
        showError(
          'Sorry, there are no images matching your search query. Please try again!'
        );
        return;
      }

      renderImages(data.hits);
    })
    .catch(() => {
      hideLoader();
      showError('An error occurred while fetching images');
    });
});
