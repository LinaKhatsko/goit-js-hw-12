import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const myForm = document.querySelector('.form');
const userInput = document.querySelector('input[name="search-text"]');
const loadMoreBtn = document.querySelector('.load-more');

let totalHits = 0;
let page = 1;
let query = '';

myForm.addEventListener('submit', onSubmit);
loadMoreBtn.addEventListener('click', onLoadMore);

async function onSubmit(event) {
  event.preventDefault();
  query = userInput.value.trim();
  page = 1;

  if (query === '') {
    iziToast.warning({
      title: 'Error',
      message: 'Search field cannot be empty!',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const myData = await getImagesByQuery(query, page);
    totalHits = myData.totalHits;

    if (myData.hits.length === 0) {
      iziToast.info({
        timeout: 7000,
        displayMode: 'once',
        title: 'Try another one',
        message:
          '❌ Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    createGallery(myData.hits);

    if (totalHits > page * 15) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
    }

  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'There is some error, please try another time',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}

async function onLoadMore() {
  hideLoadMoreButton(); // Запобігаємо повторним клікам
  showLoader();

  try {
    const data = await getImagesByQuery(query, page + 1); // Запит наступної сторінки
    createGallery(data.hits);
    page += 1;

    scrollPage();

    if (page * 15 >= totalHits) {
      hideLoadMoreButton();
      iziToast.info({
        title: 'Notice',
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    } else {
      showLoadMoreButton();
    }

  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'There is some error, please try another time',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}

function scrollPage() {
  const card = document.querySelector('.gallery-item');
  if (!card) return;

  const cardHeight = card.getBoundingClientRect().height;
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}