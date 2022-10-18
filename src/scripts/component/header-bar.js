/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable no-tabs */
/* eslint-disable require-jsdoc */
/* eslint-disable no-mixed-spaces-and-tabs */
class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <header class="header">
        <div class="header-div">
          <h1 class="header-title">Yosevi Restaurants</h1>
        </div>
        <a id="menu" class="header__menu" href="#">☰</a>
        <nav id="navbar" class="nav">
          <ul id="list" class="nav-list">
            <li class="nav-item"><a href="#/home">Home</a></li>
            <li class="nav-item"><a href="#/like">Favorite</a></li>
            <li class="nav-item"><a href="https://instagram.com/theolss_">About Us</a></li>
          </ul>
        </nav>
        </header>`;
  }
}

customElements.define('header-bar', Header);

