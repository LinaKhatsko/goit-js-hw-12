import axios from 'axios';

const API_KEY = '51604264-079f506f95e2e038e0ca1ef24';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };
    console.log(query);
 return axios
    .get(BASE_URL, { params})
    .then((response) => response.data)
    .catch(error => {
      console.error("Error fetching images:", error);
      throw new Error("Sorry, there are no images matching your search query. Please try again!")
    });
};