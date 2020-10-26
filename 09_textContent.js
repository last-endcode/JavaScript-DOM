// textContent for getText
// same with childNodes

const useChildNodes = document.querySelector('h3');
// only childNodes get index node-list, so use []
// if not will undefined
// if not use nodeValue will write like "Hello people"
console.log(useChildNodes.childNodes[0].nodeValue);

// but for efisien use textContent
const useTextContent = document.querySelector('h2');
console.log(useTextContent.textContent);
// here textContent can change element h2 too
useTextContent.textContent = 'Change Text Content h2';
