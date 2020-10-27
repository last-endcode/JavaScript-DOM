// select element
// addEventListener
// what event,
// and what to do (callback function/annonymous funciton/function reference)

const btn = document.querySelector('.btn');
const h3 = document.querySelector('h3');

btn.addEventListener('click', function () {
  // if click btn h3 will add class blue
  h3.classList.add('blue');
});
