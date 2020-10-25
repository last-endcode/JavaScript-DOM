// parentElement
// for knowing where your classes or id

const myParent = document.querySelector('.members');
// ul #shp is parent
console.log(myParent.parentElement);
// div .container is parent
console.log(myParent.parentElement.parentElement);
// body is parent and if add parentElement again will null
console.log(myParent.parentElement.parentElement.parentElement);

// example
const bodyBackground = document.querySelector('.container');
const containerColor = document.querySelector('#shp');
containerColor.parentElement.style.color = '#fff';
bodyBackground.parentElement.style.background = '#333';
