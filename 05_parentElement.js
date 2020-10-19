// Access parentElement

const title_one = document.querySelector('#title-1');
// here first element is .container
// and first after container is header
// and if write again with 3 parent first parent is body
console.log(title_one.parentElement.parentElement);
// parentelement is h1 so h2,h3 is child and following parentElement
title_one.parentElement.style.color = 'red';
// .container
title_one.parentElement.parentElement.style.backgroundColor = 'blue';
// body
title_one.parentElement.parentElement.parentElement.style.backgroundColor =
  '#333';
