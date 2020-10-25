// children
// childNodes - return all childNodes including whitespaces
// which is treated as text node

// children
// firstChild
// lastChild

// CHILD
const child = document.querySelector('#shp');
//total 9 cz with white space
console.log(child.childNodes);
//total 4 li#member cz without space just element child
// following all child in #shp :
console.log(child.children);

// example u should use child.children
const allChild = [...child.children];
allChild.forEach(function (items) {
  items.style.background = 'blue';
});

// first-child and last-child
console.log(child.firstChild);
console.log(child.lastChild);
