// nextSibling
// previousSibling
// remember return white space too and comment html

const nextSubtitle = document.querySelector('h3');
// h2 main-title if one nexSibling result #text
// cause nextSibling read white space too remember!
console.log(nextSubtitle.nextSibling.nextSibling);

const previousTitle = document.querySelector('h2');
// h3 sub-title
console.log(previousTitle.previousSibling);
