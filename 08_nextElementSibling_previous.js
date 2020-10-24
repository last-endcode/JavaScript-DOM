// nextElementSibling
// previousElementSibling
// remember this element not read white space just element
// and not same with nextSibling read white space, read comment

const result = document.querySelector('#result');
console.log(result.previousElementSibling); //hohoho

const last = document.querySelector('#last');
const modification = last.previousElementSibling;
modification.style.fontSize = '2rem';
modification.style.textTransform = 'uppercase';
