// createElement('element)
// createTextNode('text content')
// element.appendChild(childElement)
// insertBefore('element','location') -> not child

const container = document.querySelector('.container');
const shp = document.querySelector('.shp');

// rhp
const rhp = document.createElement('h2');
const title = document.createTextNode('The Pirates of RHP');
rhp.appendChild(title);
rhp.classList.add('blue');
shp.classList.add('red');
// insertBefore
// rhp is element, and shp is location after rhp
container.insertBefore(rhp, shp);

// replace child
const heading6 = document.createElement('h3');
const textmarine = document.createTextNode('The marine ford');
heading6.appendChild(textmarine);
// replace child new, old
container.replaceChild(heading6, rhp);
