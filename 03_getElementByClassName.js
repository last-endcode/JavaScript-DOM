// getElementByClassName
// node-list = array-like objecct
// index, length property but not array methods

const listItems = document.getElementsByClassName('debian-based-on');
console.log(listItems); //on console show only class use .debian-based-on

// change color for index 1 (debian) be red
// remember here html just 3 classes has debian-based-on
// so index array has 0,1,2 (ubuntu,debian,linux mint)
listItems[0].style.color = 'coral'; //ubuntu
listItems[1].style.color = 'red'; //debian
listItems[2].style.color = 'green'; //linux mint
listItems[3].style.color = 'navy'; //undefinded cz not array index 3
