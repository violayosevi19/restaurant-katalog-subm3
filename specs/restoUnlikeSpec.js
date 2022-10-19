import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavoritesResto from '../src/scripts/data/favorites-resto';
import * as ButtonPresenterHelper from './helpers/buttonPresenterHelper';

describe('Unliking A Resto', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoritesResto.putResto({id: 'rqdv5juczeskfw1e867'});
  });

  afterEach(async () => {
    await FavoritesResto.deleteResto('rqdv5juczeskfw1e867');
  });

  it('should display unlike widget when the resto has been liked', async () => {
    await ButtonPresenterHelper.LikeButtonPresenterHelperResto({id: 'rqdv5juczeskfw1e867'});
    expect(document.querySelector('[aria-label="unlike if you dont like this restaurants"]'))
        .toBeTruthy();
  });

  it('should not display like widget when the resto has been liked', async () => {
    await ButtonPresenterHelper.LikeButtonPresenterHelperResto({id: 'rqdv5juczeskfw1e867'});

    expect(document.querySelector('[aria-label="like if you like this restaurants"]'))
        .toBeFalsy();
  });

  it('should be able to remove liked resto from the list', async () => {
    await ButtonPresenterHelper.LikeButtonPresenterHelperResto({id: 'rqdv5juczeskfw1e867'});

    document.querySelector('[aria-label="unlike if you dont like this restaurants"]').dispatchEvent(new Event('click'));
    expect(await FavoritesResto.getAllRestos()).toEqual([]);
  });

  it('should not throw error if the unliked resto is not in the list', async () => {
    await ButtonPresenterHelper.LikeButtonPresenterHelperResto({id: 'rqdv5juczeskfw1e867'});

    // hapus dulu resto dari daftar yang disukai
    await FavoritesResto.deleteResto('rqdv5juczeskfw1e867');

    // kemudian, simulasikan pengguna menekan widget batal menyukai film
    document.querySelector('[aria-label="unlike if you dont like this restaurants"]').dispatchEvent(new Event('click'));
    expect(await FavoritesResto.getAllRestos()).toEqual([]);
  });
});
