/*
querySelector - for single
querySelectorAll - for multiple
*/

// querySelector
const memberShp = document.querySelector('#shp');
console.log(memberShp); //not node list output show element id shp
// so u can add background without index
memberShp.style.background = '#333';
memberShp.style.width = '16rem';

//querySelectorAll
const allMember = document.querySelectorAll('#shp');
// check use log if node-list use index
console.log(allMember); //here is node-list

const allMembers = [...allMember];
allMembers.forEach(function (items) {
  items.style.color = '#fff';
  items.style.textTransform = 'uppercase';
  items.style.padding = '2rem';
});

// here u should use querySelector, so why?
// because only querySelector only acces for first
// change first-child be red background and actuallly
// u can write without first-child if want change lutfy be red
const beRed = document.querySelector('li');
beRed.style.background = 'coral';

// and last-child be blue
const beBlue = document.querySelector('li:last-child');
beBlue.style.background = 'blue';
