// nextSibling
// previousSibling
// remember return white space too

const li_one = document.querySelector('li');
// index 1 be red
li_one.nextSibling.nextSibling.style.color = 'red';
// index 2 be blue
li_one.nextSibling.nextSibling.nextSibling.nextSibling.style.color = 'blue';

// use previous
const last = document.querySelector('#last');
console.log(
  (last.previousSibling.previousSibling.style.textTransform = 'uppercase')
);
