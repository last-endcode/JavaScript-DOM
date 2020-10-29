// allows select dynamic elements
// event propogation - order the events are fired
// event bubbling - clicked element first then bubles up --
// default
// event capturing - fires at the root and fires until
// reaches target

const list_items = document.querySelector('.list-items');
const container = document.querySelector('.container');

function showBubbling(e) {
  // output all element list-items and child like li.item
  console.log('current target :', e.currentTarget);
  //output only target element clicked example: click link show only a href
  console.log('target : ', e.target);
  //   checked
  if (e.target.classList.contains('link')) {
    console.log('your clicked link');
  }
}

// if link will not click here
function stopPropogation(e) {
  e.stopPropogation;
  console.log('not click');
}

// container.addEventListener('click', showBubbling);
list_items.addEventListener('click', showBubbling);
