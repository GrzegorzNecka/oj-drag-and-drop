// Import stylesheets
import './style.css';

const dragElems = document.querySelectorAll('article');
const dragArea = document.querySelectorAll('main')[0];
const dropArea = document.querySelectorAll('main')[1];

dragElems.forEach(elem => elem.setAttribute('draggable', 'true'));

dragElems.forEach(elem => console.log('ss', elem.attributes));

console.log(dragArea);
console.log(dropArea);
