// nextElementSibling
// previousElementSibling
// remember this element not read white space just element
// and not same with nextSibling

const ul_list = document.querySelector('.list-items');
//nextElementSibling -> output is <h1>hello</h1>
console.log(ul_list.nextElementSibling);

const manjaroNext = document.querySelector('#first');
console.log(manjaroNext.nextElementSibling); //debian

const crunchBangNext = document.querySelector('.last');
console.log(crunchBangNext.nextElementSibling); //null
