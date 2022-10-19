import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavoritesResto from '../src/scripts/data/favorites-resto';
import * as ButtonPresenterHelper from './helpers/buttonPresenterHelper';

describe('Liking A Resto', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show like button when the resto has not been liked before', async () => {
    await ButtonPresenterHelper.LikeButtonPresenterHelperResto({id: 'rqdv5juczeskfw1e867'});

    expect(document.querySelector('[aria-label="like if you like this restaurants"]'))
        .toBeTruthy();
  });

  it('should not show the unlike button when the resto has not been liked before', async () => {
    await ButtonPresenterHelper.LikeButtonPresenterHelperResto({id: 'rqdv5juczeskfw1e867'});

    expect(document.querySelector('[aria-label="unlike if you dont like this restaurants"]'))
        .toBeFalsy();
  });

  it('should be able to like the resto', async () => {
    await ButtonPresenterHelper.LikeButtonPresenterHelperResto({id: 'rqdv5juczeskfw1e867'});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    const resto = await FavoritesResto.getResto('rqdv5juczeskfw1e867');
    expect(resto).toEqual({id: 'rqdv5juczeskfw1e867'});

    FavoritesResto.deleteResto('rqdv5juczeskfw1e867');
  });

  it('should not add a resto again when its already liked', async () => {
    await ButtonPresenterHelper.LikeButtonPresenterHelperResto({id: 'rqdv5juczeskfw1e867'});
    // Tambahkan resto dengan ID ke daftar resto yang disukai
    await FavoritesResto.putResto({id: 'rqdv5juczeskfw1e867'});

    // Simulasikan pengguna menekan tombol suka
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // tidak ada resto suka yang ganda
    expect(await FavoritesResto.getAllRestos()).toEqual([{id: 'rqdv5juczeskfw1e867'}]);
    FavoritesResto.deleteResto('rqdv5juczeskfw1e867');
  });

  it('should not add a resto when it has no id', async () => {
    await ButtonPresenterHelper.LikeButtonPresenterHelperResto({});
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoritesResto.getAllRestos()).toEqual([]);
  });
});
