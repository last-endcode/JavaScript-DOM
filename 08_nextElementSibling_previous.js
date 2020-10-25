// nextElementSibling
// previousElementSibling
// remember this element not read white space just element
// and not same with nextSibling read white space, read comment

const list_items = document.querySelector('ul');
// previousElementSibling
list_items.previousElementSibling.style.background = 'blue';
// nextElementSibling ul > next or inside ul
// output <script src=........
const nextLi = list_items.nextElementSibling;
console.log(nextLi);

const headingNext = document.querySelector('h2');
// nextElement is ul and add background ul be red
headingNext.nextElementSibling.style.background = 'red';
