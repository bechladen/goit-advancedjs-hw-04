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
const loadMoreButton = document.querySelector('.load-more');
const loader = document.querySelector('.loader');

let query = '';
let page = 1;
let totalHits = 0;

initializeLightbox();

form.addEventListener('submit', async event => {
  event.preventDefault();

  query = input.value.trim();
  if (!query) {
    showError('Please enter a search term');
    return;
  }

  clearGallery();
  page = 1;
  loadMoreButton.classList.add('hidden');
  showLoader();

  try {
    const data = await fetchImages(query, page);
    hideLoader();

    if (data.hits.length === 0) {
      showError('No images found. Please try a different search query.');
      return;
    }

    totalHits = data.totalHits;
    renderImages(data.hits);
    if (totalHits > data.hits.length) {
      loadMoreButton.classList.remove('hidden');
    }
  } catch (error) {
    hideLoader();
    showError('An error occurred while fetching images');
  }

  input.value = '';
});

loadMoreButton.addEventListener('click', async () => {
  page += 1;
  loadMoreButton.classList.add('hidden');
  showLoader();

  try {
    const data = await fetchImages(query, page);
    hideLoader();

    if (data.hits.length === 0) {
      showError('No more images available.');
      return;
    }

    renderImages(data.hits);

    const galleryCardHeight = document
      .querySelector('.gallery a')
      .getBoundingClientRect().height;
    window.scrollBy({
      top: galleryCardHeight * 2,
      behavior: 'smooth',
    });

    if (page * 15 >= totalHits) {
      loadMoreButton.classList.add('hidden');
      showError("We're sorry, but you've reached the end of search results.");
    } else {
      loadMoreButton.classList.remove('hidden');
    }
  } catch (error) {
    hideLoader();
    showError('An error occurred while loading more images');
  }
});
