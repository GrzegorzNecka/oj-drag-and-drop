// Import stylesheets
import './style.css';
import { setDraggable, setDropable } from './setDragAndDropAttr';
import { isDraggableSupported } from './isDraggableSupported';

const draggablesElems = document.querySelectorAll('article');
const dragArea = document.querySelectorAll('main')[0];
const dropArea = document.querySelectorAll('main')[1];
isDraggableSupported();
// setDraggable();
// setDropable();

// console.log(dragElems);
// console.log(dropArea);

draggablesElems.forEach(article => {
  article.addEventListener('dragstart', () => {});
});
