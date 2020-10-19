// nextSibling
// previousSibling
// remember return white space too

const ul_list = document.querySelector('.list-items');
// if only nextSibling will #text cz read white space
console.log(ul_list.nextSibling.nextSibling.nextSibling.nextSibling); //<~--source js -->

const manjaroNext = document.querySelector('#first');
console.log(manjaroNext.nextSibling.nextSibling); //debian

const crunchBangPrevious = document.querySelector('.last');
console.log(crunchBangPrevious.previousSibling.previousSibling); //debian

const crunchBangNext = document.querySelector('.last');
console.log(crunchBangNext.nextSibling.nextSibling); //null
