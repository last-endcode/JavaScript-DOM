// getElementByClassName('classname')
// For class name
// node-list = array like object
// index, length property but not array method

const listClass = document.getElementsByClassName('special');
console.log(listClass);
/* output node-list:
0:li.special
1:li.special
2:li.special */
console.log(listClass.length); // 3

// change index 1 zoro be green and font size: 2rem
listClass[1].style.color = 'green';
listClass[1].style.fontSize = '2rem';
