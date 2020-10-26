// className - for check class and add
// classList

const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');

// this just for check class
// const classValue = first.className;
// console.log(classValue); //first

// add first class here can multiple
first.className = 'text colors';
// but if separator like this
first.className = 'text';
//the last will select colors, and text class not
first.className = 'colors';

// classList
//["second", value: "second"] value 0: is second
// so u should need add / remove  syntax
console.log(second.classList);

// add class colors on second element
// if u need 2 class use ('class1','class2')
second.classList.add('colors');
second.classList.add('text');

// remove class first colors red
first.classList.remove('colors');
first.classList.add('text');

third.classList.add('colors');
// check use contains
let checked = third.classList.contains('colors');
if (checked) {
  console.log('have a class' + checked);
} else {
  console.log('not have the class');
}
