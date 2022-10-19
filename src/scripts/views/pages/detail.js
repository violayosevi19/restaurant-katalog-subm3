/* eslint-disable linebreak-style */
/* eslint-disable no-tabs */
/* eslint-disable max-len */
/* eslint-disable new-cap */
import UrlParser from '../../routes/url-parser';
import TheRestoDbSource from '../../data/therestodb-source';
import {DetailRestoTemplate} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `<h1 class="menu-title">Detail Restaurants</h1>
      <section id="detail-resto" class="detail">
      </section>
      <div id="likeButtonContainer"></div>
      <div class="review-content">
        <form id="form-review">
          <h3 class="customer-title">Customer Review</h3>
          <div class="form-group">
            <label for="inputNama">Nama</label>
            <input type="text" name="nama" id="nama">
          </div>
          <div class="form-group">
            <label for="inputReview">Review</label>
            <input type="text" name="review" id="review">
          </div>
          <button id="submit" class="btn-submit">Submit</button>
        </form>
     </div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await TheRestoDbSource.detailResto(url.id);
    const restoContainer = document.querySelector('#detail-resto');
    restoContainer.innerHTML = DetailRestoTemplate(resto);
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto,
    });
    // const likeButtonContainer = document.querySelector('#likeButtonContainer');
    // likeButtonContainer.innerHTML = createLikeButtonTemplate();
    const inputName = document.querySelector('#nama');
    const inputReview = document.querySelector('#review');
    const buttonSubmit = document.querySelector('#submit');

    buttonSubmit.addEventListener('click', function() {
      const review = {
        id: url.id,
        name: inputName.value,
        review: inputReview.value,
      };

      TheRestoDbSource.reviewResto(review);
      inputName.value = '';
      inputReview.value = '';
      alert('review berhasil dikirim');
    });
  },
};

export default Detail;

