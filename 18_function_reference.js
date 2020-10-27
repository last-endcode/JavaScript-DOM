// select element
// addEventListener
// what event,
// and what to do (callback function/annonymous funciton/function reference)

const btn = document.querySelector('.btn');
const h3 = document.querySelector('h3');

// callback as function reference
function changeColors() {
  let hasClass = h3.classList.contains('red');
  //   first if click join will false and move to else
  // second if click again will true and remove class red
  // cause h3 has red class
  if (hasClass) {
    //false cz no has red class on h3
    h3.classList.remove('red');
    console.log(hasClass);
  } else {
    //   true and add class red on h3
    h3.classList.add('red');
    console.log(hasClass);
  }
}

// remember don't invoking() callback if callback function
btn.addEventListener('click', changeColors);
