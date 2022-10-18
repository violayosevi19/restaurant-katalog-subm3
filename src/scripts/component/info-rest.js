/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable no-tabs */
/* eslint-disable require-jsdoc */
/* eslint-disable no-mixed-spaces-and-tabs */
class InfoRest extends HTMLElement {
  constructor() {
	  super();
  }

  connectedCallback() {
	  this.render();
  }

  render() {
	  this.innerHTML = `
        <section id="adding-info" class="content-profile">
            <article class="artikel-profile">
                <figure>
                <img class="profile-foto" src="./images/heros/hero-image_2.jpg" alt="profile">
                <figcaption>
                    <p>Berdiri tahun 2022</p>
                </figcaption>
                </figure>
            </article>
            <article class="artikel-profile">
                <div>
                <h1 class="title">Restaurant's Profile</h1>
                <p class="description desc-profile">Semua Restaurants ini berdiri sejak tahun 1945 dan telah
                    dimodif sedemikian rupa mengikuti perkembangan zaman. Pendiri restaurant ini oleh Viola Yosevi dan keluarga. 
                    Restaurant ini terletak di Jl. Aku dan Kamu Satu No 19, London, Inggris.
                </p>
                <a href="#" class="info">Info Selengkapnya...</a>
                </div>
            </article>
        </section>`;
  }
}

customElements.define('info-rest', InfoRest);
