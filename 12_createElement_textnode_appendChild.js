// createElement('element)
// createTextNode('text content')
// element.appendChild(childElement)

const container = document.querySelector('.container');

// create emptyElement
const newH2 = document.createElement('h2');
const textShp = document.createTextNode('The history of shp');
// appendChild text to element
// and element apply to browser
newH2.appendChild(textShp);
newH2.classList.add('red', 'text');
container.appendChild(newH2);
