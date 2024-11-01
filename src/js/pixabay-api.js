import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '46797369-0299d472bccce8abfeee5d8f9';
const PER_PAGE = 15;

async function fetchImages(query, page = 1) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${PER_PAGE}&page=${page}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
}

export default fetchImages;
