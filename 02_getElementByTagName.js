// getElementByTagName
// node-list = array-like objecct
// index, length property but not array methods

const heading = document.getElementsByTagName('h2');
console.log(heading.length); //2
heading[1].style.color = 'blue';

const list = document.getElementsByTagName('li');
console.log(list.length); //4

// before use forEach copy obj items
const items = [...list];

items[items.length - 1].style.color = 'red';
items[items.length - 1].style.textTransform = 'uppercase';
// use forEach()
// const listItem = items.forEach(function (item) {
//   console.log(item);
// });
