// For Tag name like h1,h2, etc...
//getElementById('tagname')
// node-list = array like object
// index, length property but not array method

const list_manga = document.getElementsByTagName('li');
console.log(list_manga); //here will result node-list like [li,li,li] use index

// change naruto be capitalize
list_manga[1].style.textTransform = 'capitalize';

// if use forEach copy obj use spread operator
// if not will not work
const newListManga = [...list_manga];
newListManga.forEach(function (items) {
  items.style.textTransform = 'uppercase';
  items.style.padding = '1.25rem 0rem';
});

// add background on the last index be blue color
newListManga[newListManga.length - 1].style.background = 'blue';
