/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import restaurants from '../DATA.json';
import App from './views/app.js';
import swRegister from './utils/sw-register';
import '../scripts/component/info-rest';
import '../scripts/component/hero-bar';
import '../scripts/component/header-bar';
import '../scripts/component/footer';


console.log('Hello Coders! :)');
console.log(restaurants);


const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#navbar'),
  content: document.querySelector('#maincontent'),
});

const loadingWeb = () => {
  const loader = document.getElementById('loading');
  loader.style.display = 'none';
};

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  setTimeout(loadingWeb, 4000);
  app.renderPage();
  swRegister();
});


