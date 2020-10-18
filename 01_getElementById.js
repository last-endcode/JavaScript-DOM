// getElementById for element ID on html
// u can apply style whatever u want

// u can use this style
document.getElementById('title').style.color = 'red';

// but for multiple element prefer like this use variable
const title = document.getElementById('title');
const btn = document.getElementById('btn');

// for title
title.style.textTransform = 'UpperCase';
title.style.color = 'blue';

// for btn
btn.style.padding = '0.375rem 1.25rem';
btn.style.background = '#333';
btn.style.color = '#fff';
btn.style.textDecoration = 'none';
btn.style.textTransform = 'UpperCase';
