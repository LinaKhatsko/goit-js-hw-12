import axios from 'axios';

const API_KEY = '51604264-079f506f95e2e038e0ca1ef24';
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 15;

export async function getImagesByQuery(query, page = 1) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: PER_PAGE,
  };

  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
    console.error('❌ Error fetching images:', error.message);
    throw new Error('Sorry, there are no images matching your search query. Please try again!');
  }
}