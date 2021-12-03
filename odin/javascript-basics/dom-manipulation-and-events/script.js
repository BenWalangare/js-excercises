const text = document.querySelector('#text');

const textOne = document.createElement('p')
const textTwo = document.createElement('h3')
const divOne = document.createElement('div')
const headDivOne = document.createElement('h1')
const textDivOne = document.createElement('p')

text.appendChild(divOne);

textOne.classList.add('textOne');
divOne.classList.add('divOne');

textOne.textContent = 'Hey I\'m Red!';
textTwo.textContent = 'I\'m blue h3!';
headDivOne.textContent = 'I\'m in a div!';
textDivOne.textContent = 'ME TOO!';

divOne.appendChild(headDivOne);
divOne.appendChild(textDivOne);

textOne.style.color = 'red';
textTwo.style.color = 'blue';
textTwo.style.borderColor = 'red';
divOne.setAttribute('style', 'border: 5px solid black; background:pink');

text.appendChild(textOne);
text.appendChild(textTwo);