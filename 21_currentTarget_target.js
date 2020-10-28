// currentTarget - always refers to the element
// - to which the event handler has been attached to
// target - identifies the element on which the
// - event occured

const btns = document.querySelectorAll('.btn');

// forEach()
btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    //   if click button will add color black for
    // all button element include h1 and strong element be black color
    e.currentTarget.style.color = 'black';
    console.log(e.currentTarget);
    // but if target, will effect on element yg di click
    // and not effect all element just element click will change
    // but if main click all element will change
    e.target.style.textTransform = 'lowercase';
    console.log(e.target);
  });
});
