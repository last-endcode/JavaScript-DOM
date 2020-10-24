// getElementById() for select only id on html
// for giving effect too

// u should use declare variable because if multiple is very efisien
const title = document.getElementById('title');
title.style.color = 'blue'; //change h1 title be blue
title.style.textTransform = 'uppercase'; //be uppercase

// if not declare and use multiple method not efisien and code be long
// document.getElementById('title').style.color = 'coral';
// document.getElementById('title').style.textTransform = 'uppercase';

// container & btn
const container = document.getElementById('container');
const button = document.getElementById('btn');

container.style.background = '#333';
container.style.width = '400px';

button.style.textTransform = 'uppercase';
button.style.fontSize = '1.25rem';
button.style.background = '#ddd';
button.style.color = '#333';
button.style.margin = '0.75rem';
