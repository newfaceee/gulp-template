'use strict';
var siteMainNavElement = document.querySelector('.main-nav');
var mainNavToggle = document.querySelector('.main-nav__toggle');

siteMainNavElement.classList.remove('main-nav--nojs');

mainNavToggle.addEventListener('click', function () {
  if (siteMainNavElement.classList.contains('main-nav--closed')) {
    siteMainNavElement.classList.remove('main-nav--closed');
    siteMainNavElement.classList.add('main-nav--opened');
  } else {
    siteMainNavElement.classList.add('main-nav--closed');
    siteMainNavElement.classList.remove('main-nav--opened');
  }
});
