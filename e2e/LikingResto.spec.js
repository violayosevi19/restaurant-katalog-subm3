const assert = require('assert');
Feature('LikingResto');

Before(({I}) => {
  I.amOnPage('/#/like');
});

Scenario('liking some retsos', ({I}) => {
  I.seeElement('#posts');
  I.see('', '#posts');


  I.amOnPage('/');

  for (let i = 1; i <= 3; i++) {
    I.waitForElement('.title a', 20);
    I.seeElement('.title a');
    I.click(locate('.title a').at(i));
    I.waitForElement('#likeButton', 20);
    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.amOnPage('/');
  }

  I.amOnPage('/#/like');
  I.seeElement('#posts');
});

Scenario('unlike one resto', ({I}) => {
  // like dulu restonya

  I.amOnPage('/');
  I.seeElement('#posts');
  I.waitForElement('.title a', 20);
  I.seeElement('.title a');
  I.click(locate('.title a').first());
  I.waitForElement('#likeButton', 20);
  I.click('#likeButton');
  I.amOnPage('/#/like');

  // unlike yang sudah di sukai tadi
  I.seeElement('#posts');
  I.waitForElement('.title a', 20);
  I.seeElement('.title a');
  I.click(locate('.title a').first());
  I.waitForElement('#likeButton', 20);
  I.click('#likeButton');
  I.amOnPage('/#/like');
  I.see('', '#posts');
  pause();
});
