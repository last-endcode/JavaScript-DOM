const container = document.querySelector('.container');
const btn = document.querySelector('.btn');

function addElement(e) {
  // create element h1
  const heading_1 = document.createElement('h1');
  //   add class with the name heading
  heading_1.classList.add('heading');
  //   create Text content
  heading_1.textContent = 'The pirates of SHP';
  //   show to browser pages
  container.appendChild(heading_1);
}

// here if heading release and click get text hello there
container.addEventListener('click', function (e) {
  if (e.target.classList.contains('heading')) {
    console.log('hello there ');
  }
});
btn.addEventListener('click', addElement);
