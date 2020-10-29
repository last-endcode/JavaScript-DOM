// web storage api = provided by browser
//  session storage, local storage
// setItem,getItem, removeItem, clear

localStorage.setItem('name', 'John Doe');
// will override be john doe
localStorage.setItem('name', 'John Doe');
// will override be peter doe
localStorage.setItem('name', 'Peter Doe');

// getItem
// for getItem u should key not value
const getPeter = localStorage.getItem('name');
console.log(getPeter);

// for removeItem
localStorage.removeItem('name'); //remove name (peter doe)

localStorage.setItem('name', 'kelly jane');
localStorage.setItem('address', 'street heaven god');
localStorage.setItem('telp', '+628 9999 797979');

// and for whole remove storage use clear
localStorage.clear(); //remove all key on storage
