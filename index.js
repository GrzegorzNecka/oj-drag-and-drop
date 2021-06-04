// Import stylesheets
import './style.css';
import { setDraggable, setDropable } from './setDragAndDropAttr';
import { isDraggableSupported } from './checkDragableSupport';

const dragElems = document.querySelectorAll('article');
const dragArea = document.querySelectorAll('main')[0];
const dropArea = document.querySelectorAll('main')[1];

setDraggable();
setDropable();

isDraggableSupported();

console.log(dragElems);
console.log(dropArea);
