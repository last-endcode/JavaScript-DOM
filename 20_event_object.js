// event object argument e, evt
// info about triggered event
// event.type
// event.currentTarget
// this keyword
// preventDefault() - prevents default behaviour

const heading = document.querySelector('h1');
const btn = document.querySelector('.btn');
const link = document.querySelector('#link');

heading.addEventListener('click', function (e) {
  e.currentTarget.classList.add('blue');
});

btn.addEventListener('click', function (e) {
  e.currentTarget.classList.add('red');
  //   for check type event listener
  console.log(e.type); //click
});

// // callback as reference
function callink(e) {
  //   //will undefined and if link click not back again to top
  console.log(e.preventDefault());
}

link.addEventListener('click', callink);
