/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
// import API_ENDPOINT from '../globals/api-endpoint';
// import TheRestoDbSource from '../../data/therestodb-source';

function main() {
  const baseUrl = 'https://restaurant-api.dicoding.dev/';
  const insertReview = (review) => {
    fetch(`${baseUrl}/review`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': '12345',
      },
      body: JSON.stringify(review),
    }).then((response) => {
      return response.json();
    }).then((responsejson) => {
      showResponseMessage(responsejson.message);
    }).catch((error) =>{
      showResponseMessage(error);
    });
  };

  const renderAllBooks = (books) => {
    const listBookElement = document.querySelector('#listBook');
    listBookElement.innerHTML = '';

    books.forEach((book) => {
      listBookElement.innerHTML += `
          <div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
            <div class="card">
              <div class="card-body">
                <h5>(${book.id}) ${book.title}</h5>
                <p>${book.author}</p>
                <button type="button" class="btn btn-danger button-delete" id="${book.id}">Hapus</button>
              </div>
            </div>
          </div>
        `;
    });
  };

  const showResponseMessage = (message = 'Check your internet connection') => {
    alert(message);
  };

  document.addEventListener('DOMContentLoaded', () => {
    const inputName = document.querySelector('#name');
    const inputReview = document.querySelector('#review');
    const buttonSave = document.querySelector('#btn-submit');

    buttonSave.addEventListener('click', function() {
      const review = {
        name: inputName.value,
        review: inputReview.value,
      };

      insertReview(review);
    });
  });
};


export default main;

