/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import FavoritesResto from '../data/favorites-resto';
import {createLikeButtonTemplate, createUnlikeButtonTemplate} from '../views/templates/template-creator';
const LikeButtonInitiator = {
  async init({likeButtonContainer, resto}) {
    this._likeButtonContainer = likeButtonContainer;
    this._resto = resto;

    await this._renderButton();
  },
  async _renderButton() {
    const {id} = this._resto;

    if (await this._isRestoExist(id)) {
      this._renderUnlike();
    } else {
      this._renderLike();
    }
  },

  async _isRestoExist(id) {
    const resto = await FavoritesResto.getResto(id);
    return !!resto;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoritesResto.putResto(this._resto);
      this._renderButton();
    });
  },

  _renderUnlike() {
    this._likeButtonContainer.innerHTML = createUnlikeButtonTemplate();
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoritesResto.deleteResto(this._resto.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
