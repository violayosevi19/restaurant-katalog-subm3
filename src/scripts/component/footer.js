/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable no-tabs */
/* eslint-disable require-jsdoc */
/* eslint-disable no-mixed-spaces-and-tabs */
class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer>
      <p>This is my website build on September, 27th 2022: &copy;</p>
  </footer>`;
  }
}

customElements.define('footer-bar', Footer);


