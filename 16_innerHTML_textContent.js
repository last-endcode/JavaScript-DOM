// innerHTML

const theContainer = document.querySelector('.container');

const NewElement = document.createElement('p');
NewElement.innerText = 'Lorem ipsum';
theContainer.appendChild(NewElement);

// u can change text use innerHTML with tag html
NewElement.innerHTML = `<ul>
<li>SHP</li>
<li>RHP</li>
<li>Marine Ford</li>
</ul>`;

// but if use textContent not work
// if use syntax HTML and will display syntax html
// NewElement.textContent = `<ul>
// <li>SHP</li>
// <li>RHP</li>
// <li>Marine Ford</li>
// </ul>`;
