// childNodes - returns all childNodes including whitespace
// which is treated as a text node
// children
// firstchild and laschild

const result = document.querySelector('#result');
const allchildren = result.childNodes;
console.log(allchildren);
/* output text li text li*/

// for hidden text use childern
const children = result.children;
console.log(children);
/* output index 0 - 2 is only element li */

// use firstChild
const firstChild = result.firstChild;
console.log(firstChild);
const lastChild = result.lastChild;
console.log(lastChild);
