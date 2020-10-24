// getElementByClassName('classname')
// For class name
// node-list = array like object
// index, length property but not array method

const background = document.getElementsByClassName('container');
const list_item = document.getElementsByClassName('list-item');

// remember if write this without index will undefined
// cause background result is use node-list index
// background.style.background = 'blue'; //wrong
background[0].style.background = 'blue';
background[0].style.height = '40vh';

list_item[0].style.color = 'white';
list_item[0].style.textTransform = 'uppercase';
