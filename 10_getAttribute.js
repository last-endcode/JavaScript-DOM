// getAttribute();
// setAttribute();

const heading = document.querySelector('.title');
// getAttribute class and id from h2
const classValue = heading.getAttribute('class');
const idsValue = heading.getAttribute('id');
console.log(classValue); // show title class
console.log(idsValue); //show titles id

// setAttribute
// first move to p cz no have class
const nextoP = heading.nextElementSibling.nextElementSibling;
nextoP.setAttribute('id', 'text');
nextoP.textContent = 'This is a text';

// example again showLinks
const links = document.querySelector('.links');
const getLinks = links.getAttribute('href');
console.log(getLinks);
