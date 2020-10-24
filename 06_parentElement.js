// parentElement
// for knowing where your classes parent

const yourParent = document.querySelector('p');
// result is .container
console.log(yourParent.parentElement);
// result is body
console.log(yourParent.parentElement.parentElement);
// result is /html
console.log(yourParent.parentElement.parentElement.parentElement);
// result is null
console.log(yourParent.parentElement.parentElement.parentElement.parentElement);

// example change background .container
const background = yourParent.parentElement;
background.style.background = 'blue';
background.style.textTransform = 'uppercase';
