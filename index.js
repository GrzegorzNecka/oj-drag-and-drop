// Import stylesheets
import './style.css';
import { setDraggable, setDropable } from './setDragAndDropAttr';
import { isDraggableSupported } from './isDraggableSupported';

const dragElems = document.querySelectorAll('article');
const dragArea = document.querySelectorAll('main')[0];
const dropArea = document.querySelectorAll('main')[1];
isDraggableSupported();
// setDraggable();
// setDropable();

console.log(dragElems);
console.log(dropArea);

dragElems.forEach(article => {
  article.ondragstart = function(e) {
    console.log('ondragstart');
  };

  article.ondragend = function(e) {
    console.log('ondragend');
  };

  article.ondrag = function(e) {
    console.log('ondrag');
  };
});

dropArea.ondragover = function(e) {
  e.preventDefault();
  return false;
};

dropArea.ondrop = function(e) {
  console.log('upuszczono');
};
