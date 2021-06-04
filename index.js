// Import stylesheets
import './style.css';
import { setDraggable, setDropable } from './setDragAndDropAttr';

const dragElems = document.querySelectorAll('article');
const dragArea = document.querySelectorAll('main')[0];
const dropArea = document.querySelectorAll('main')[1];

setDraggable();
setDropable();


if(!"draggable" in document.createElement('span')) return;



console.log(dragElems);
console.log(dropArea);
