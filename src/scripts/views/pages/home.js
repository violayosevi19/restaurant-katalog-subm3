/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable new-cap */
import TheRestoDbSource from '../../data/therestodb-source';
import {ListRestoItemTemplate} from '../templates/template-creator';
import InfoRest from '../../component/info-rest';
const Home = {
  async render() {
    return ` <h1 class="menu-title">Daftar Restaurant</h1>
    <section id="posts" class="content-section">
    </section>
    <info-rest></info-rest>`;
  },

  async afterRender() {
    const restos = await TheRestoDbSource.HomeResto();
    const menuId = document.querySelector('#posts');
    restos.forEach((restaurants) => {
      menuId.innerHTML += ListRestoItemTemplate(restaurants);
    });
  },
};

export default Home;
