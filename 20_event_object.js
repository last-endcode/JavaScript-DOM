// event object argument e, evt
// info about triggered event
// event.type
// event.currentTarget
// this keyword
// preventDefault() - prevents default behaviour

const btn = document.querySelector('.btn');
const heading = document.querySelector('h1');
const link = document.getElementById('link');

btn.addEventListener('click', function (e) {
  // console.log(this); //<button class="btn">click me</button>
  // console.log(e.currentTarget); //<button class="btn">click me</button>
  e.currentTarget.classList.add('red');
});

function callLink(e) {
  // here link can't scroll top again
  // will stuck cz preventDefault()
  e.preventDefault();
}

link.addEventListener('click', callLink);
