import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let lightbox;

function initializeLightbox() {
  lightbox = new SimpleLightbox('.gallery a', {});
}

function renderImages(images) {
  const gallery = document.querySelector('.gallery');
  const markup = images
    .map(
      image => `
    <a href="${image.largeImageURL}">
      <img src="${image.webformatURL}" alt="${image.tags}" title="${image.tags}" />
      <div class="info">
        <div>
          <p class="main-p">Likes</p>
          <p class="add-p">${image.likes}</p>
        </div>
        <div>
          <p class="main-p">Views</p>
          <p class="add-p">${image.views}</p>
        </div>
        <div>
          <p class="main-p">Comments</p>
          <p class="add-p">${image.comments}</p>
        </div>
        <div>
          <p class="main-p">Downloads</p>
          <p class="add-p">${image.downloads}</p>
        </div>
      </div>
    </a>
  `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

function clearGallery() {
  document.querySelector('.gallery').innerHTML = '';
}

function showLoader() {
  document.querySelector('.loader').classList.remove('hidden');
}

function hideLoader() {
  document.querySelector('.loader').classList.add('hidden');
}

function showError(message) {
  iziToast.error({ title: 'Error', message });
}

export {
  initializeLightbox,
  renderImages,
  clearGallery,
  showLoader,
  hideLoader,
  showError,
};
