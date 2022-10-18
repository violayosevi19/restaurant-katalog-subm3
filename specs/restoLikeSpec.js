import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';

describe('Liking A Resto', () => {
  fit('should show like button when the resto has not been liked before', async () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: 'rqdv5juczeskfw1e867',
      },
    });

    expect(document.querySelector('[aria-label="like if you like this restaurants"]'))
      .toBeTruthy();
  });

  it('should not show the unlike button when the resto has not been liked before', async () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: 'rqdv5juczeskfw1e867',
      },
    });

    expect(document.querySelector('[aria-label="unlike if you dont like this restaurants"]'))
      .toBeFalsy();
  });
});
