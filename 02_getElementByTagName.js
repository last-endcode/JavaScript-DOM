// For Tag name like h1,h2, etc...
//getElementById('tagname')
// node-list = array like object
// index, length property but not array method

const heading = document.getElementsByTagName('h2');
// console.log(heading); //output total h2 but array like object
heading[1].style.color = 'red'; //hello there-2 will red
heading[0].style.textTransform = 'uppercase';

const listItem = document.getElementsByTagName('li');
console.log(listItem);
// output list: 0:l1 , 1:li , 2:li

listItem[0].style.fontSize = '1.25rem'; //lutfy fontsize will 20px;

// copy object
const getObject = [...listItem];

getObject.forEach(function (item) {
  item.style.fontSize = '1rem';
  item.style.listStyleType = 'none';
  item.style.background = '#333';
  item.style.width = '400px';
  item.style.color = '#ffff';
});
