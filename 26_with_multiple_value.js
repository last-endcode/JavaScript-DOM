const member = ['lutfy', 'Zoro', 'Sanji'];

localStorage.setItem('SHP', JSON.stringify(member));

// getItem lutfy
const lutfyy = JSON.parse(localStorage.getItem('SHP'));
// index 0 without JSON.parse will print [,
// index 1 will print l, dsst
console.log(lutfyy[0]);

let marineford;

if (localStorage.getItem('marineford')) {
  marineford = JSON.parse(localStorage.getItem('marineford'));
} else {
  marineford = [];
}

console.log(marineford); // []
// marineford.push('kizaru');
// // marineford.push('akainu');
// localStorage.setItem('marinford', JSON.stringify(marineford));
marineford.push('Garp');
marineford.push('akainu');
localStorage.setItem('marineford', JSON.stringify(marineford));
