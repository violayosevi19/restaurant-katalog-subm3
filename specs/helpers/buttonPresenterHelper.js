import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';

const LikeButtonPresenterHelperResto = async (resto) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    resto,
  });
};

export {LikeButtonPresenterHelperResto};
