// children
// childNodes - return all childNodes including whitespaces
// which is treated as text node

// children
// firstChild
// lastChild

const result = document.querySelector('#result');
// output get 7 length include white space
console.log(result.childNodes);

// if use children not include white space
console.log(result.children);
// output : h2.title, li , li
console.log(result.children.length); //3

// firstChild  & lastChild this gonna be text
console.log(result.firstChild);
console.log(result.lastChild);
