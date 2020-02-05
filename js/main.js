'use strict'
window.addEventListener('DOMContentLoaded', function () {

  let bookWrap = document.querySelector('.books'),
      bookSection = document.querySelectorAll('.book');
  bookWrap.insertBefore(bookSection[1], bookSection[0]);
  bookWrap.insertBefore(bookSection[4], bookSection[2]);
  bookWrap.insertBefore(bookSection[2], bookSection[6]);

  console.log('bookBox: ', bookWrap);
  let bodyBg = document.querySelector('body');
  bodyBg.style.background = 'url(./image/you-dont-know-js.jpg)';

  let changeTitle = document.querySelectorAll('h2 a')[2];
  changeTitle.textContent = 'Книга 3. this и Прототипы Объектов';

  let adv = document.querySelector('.adv');
  bodyBg.removeChild(adv);

  let cardTwoWrap = document.querySelectorAll('ul')[1],
      cardTwoWrapElem = cardTwoWrap.querySelectorAll('li');
  cardTwoWrap.insertBefore(cardTwoWrapElem[6], cardTwoWrapElem[4]);
  cardTwoWrap.insertBefore(cardTwoWrapElem[8], cardTwoWrapElem[4]);
  cardTwoWrap.insertBefore(cardTwoWrapElem[2], cardTwoWrapElem[10]);

  let cardFiveWrap = document.querySelectorAll('ul')[4],
      cardFiveWrapElem = cardFiveWrap.querySelectorAll('li');
  cardFiveWrap.insertBefore(cardFiveWrapElem[2], cardFiveWrapElem[6]);
  cardFiveWrap.insertBefore(cardFiveWrapElem[9], cardFiveWrapElem[3]);
  cardFiveWrap.insertBefore(cardFiveWrapElem[5], cardFiveWrapElem[8]);

  let cardSixWrap = document.querySelectorAll('ul')[5],
      cardSixElem = cardSixWrap.querySelectorAll('li'),
      newLi = document.createElement('li');
  newLi.textContent = 'Глава 8: За пределами ES6';
  cardSixWrap.appendChild(newLi);
  cardSixWrap.insertBefore(cardSixElem[9], null);
}());
