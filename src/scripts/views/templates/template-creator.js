/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import CONFIG from '../../globals/config';

const DetailRestoTemplate = (resto) => `
  <article id="img-detail">
    <h2 class="resto-name">${resto.name}</h2>
    <img class="resto-img" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="This is a best restaurants and you can go here" />
    <div class="custReview">
      <h4>Customer Review</h4>
      ${resto.customerReviews.map((review) => `
      <p class="reviewer-name">Nama : ${review.name}</p>
      <p class="review">Review : ${review.review}</p>
      <p>Tanggal : ${review.date}</p>
      `).join('<br>')}
    </div>
  </article>
  <article class="detail">
    <h4>Kota Resto</h4>
    <p>${resto.city}</p>
    <h4>Alamat</h4>
    <p>${resto.address}</p>
    <h4>Menu Makanan</h4>
    <p>${resto.menus.foods.map((food) => food.name).join('<br>')}</p>
    <h4>Menu Minuman</h4>
    <p>${resto.menus.drinks.reduce((show, value) => show.concat(`<li>${value.name}</li>`), '')}</p>
    <h4>Deskripsi</h3>
    <p class="desc">${resto.description}</p>
  </article>
`;

const ListRestoItemTemplate = (resto) => `
<article id="menu-id" class="artikel artikel-one">
<figure>
  <img class="image-one" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="This is a best restaurants and you can go here">
  <figcaption>
    <p>This is a restaurant's place</p>
  </figcaption>
</figure>
<div class="content-div">
    <h1 class="title"><a href="/#/detail/${resto.id}">${resto.name}</a></h1>
    <p class="description">${resto.description}</p>
</div>
<div class="rating">
  <p>Rating : ${resto.rating}</p>
</div>
</article>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like if you like this restaurants" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeButtonTemplate = () => `
  <button aria-label="unlike if you don't like this restaurants" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  DetailRestoTemplate,
  ListRestoItemTemplate,
  createLikeButtonTemplate,
  createUnlikeButtonTemplate,
};
