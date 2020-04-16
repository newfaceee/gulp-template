"use strict";
const siteMainNavElement = document.querySelector('.main-nav');
const mainNavToggle = document.querySelector('.main-nav__toggle');

siteMainNavElement.classList.remove('main-nav--nojs');

mainNavToggle.addEventListener('click', () => {
  if (siteMainNavElement.classList.contains('main-nav--closed')) {
    siteMainNavElement.classList.remove('main-nav--closed');
    siteMainNavElement.classList.add('main-nav--opened');
  } else {
    siteMainNavElement.classList.add('main-nav--closed');
    siteMainNavElement.classList.remove('main-nav--opened');
  }
});