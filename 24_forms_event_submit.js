// form submit event listener
// preventDefault();

const form = document.getElementById('form');
const name = document.getElementById('name');
const password = document.getElementById('password');

form.addEventListener('submit', function (e) {
  console.log('form submit');
  console.log(name.value);
  console.log(password.value);
  //   need here if not add will wiped out syntax above
  e.preventDefault();
});
