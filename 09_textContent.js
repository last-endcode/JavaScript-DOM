// textContent get content text

const item = document.querySelector('#title');

// use nodeValue
// u should .nodevalue if not will use ""
const node_values = item.childNodes[0].nodeValue;
console.log(node_values);
// output : The heading 2

// use textContent
const getText = item.textContent;
console.log(getText);
