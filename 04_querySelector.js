/*
querySelector - for single
querySelectorAll - for multiple
*/

const listItem = document.querySelector('#listItem');
// change background ul
listItem.style.background = '#333';
listItem.style.color = '#ddd';

// if only querySelector, show just first
let shp = document.querySelector('.shp');
console.log(shp); //lutfy
// if use querySelectorAll
shp = document.querySelectorAll('.shp');
console.log(shp); //show node-list all

// SHP
const shpObject = [...shp];
shpObject.forEach(function (items) {
  items.style.textTransform = 'uppercase';
  items.style.fontSize = '1.25rem';
});

// RHP
const rhp = document.querySelectorAll('.rhp');
const rhpObject = [...rhp];
rhpObject.forEach(function (items) {
  items.style.textTransform = 'Capitalize';
  items.style.fontSize = '1.25rem';
});

const memberRHP = document.querySelector('li:last-child');
console.log(memberRHP);
