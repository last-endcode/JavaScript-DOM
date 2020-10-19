/*
querySelector - for single
querySelectorAll - for multiple
*/

const result = document.querySelector('#result');
// change background ul use querySelector (single)
result.style.backgroundColor = '#333';
result.style.color = '#fff';

let base_on = document.querySelector('.debian-based-on');
console.log(base_on); //ubuntu cz use single querySelector

base_on = document.querySelectorAll('.debian-based-on');
console.log(base_on); //3 show use classes debian cz use multiple querySelectorAll

// use forEach()
base_on.forEach(function (items) {
  console.log(items);
  items.style.textTransform = 'uppercase';
  items.style.color = 'red';
  items.style.padding = '0.375rem';
});
