const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '46797369-0299d472bccce8abfeee5d8f9';

function fetchImages(query) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  return fetch(url)
    .then(res => {
      if (!res.ok) {
        throw new Error('Failed to fetch images');
      }
      return res.json();
    })
    .catch(error => {
      console.error('Error fetching images:', error);
      throw error;
    });
}

export default fetchImages;
