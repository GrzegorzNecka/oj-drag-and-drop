// Import stylesheets
import './style.css';
import { setDraggable, setDropable } from './setDragAndDropAttr';
import { isDraggableSupported } from './isDraggableSupported';

const draggablesElems = document.querySelectorAll('article');
const dropArea = document.querySelectorAll('main')[1];

isDraggableSupported();

draggablesElems.forEach(article => {
  article.addEventListener('dragstart', () => {
    article.classList.add('dragging');
  });

  article.addEventListener('dragend', () => {
    article.classList.remove('dragging');
  });
});

dropArea.addEventListener('dragover', e => {
  e.preventDefault();
  console.log('drag over');

  const draggable = document.querySelector('.dragging');
  dropArea.appendChild(draggable);
});
