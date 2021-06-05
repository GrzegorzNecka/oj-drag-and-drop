// Import stylesheets
import './style.css';
import { setDraggable, setDropable } from './setDragAndDropAttr';
import { isDraggableSupported } from './isDraggableSupported';

const draggablesElems = document.querySelectorAll('article');
const dropArea = document.querySelectorAll('main')[1];

isDraggableSupported();

draggablesElems.forEach(article => {
  article.addEventListener('dragstart', e => {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', article.outerHTML);
    // article.classList.add('dragging');
  });

  article.addEventListener('dragend', e => {
    // article.classList.remove('dragging');
    if (e.dataTransfer.dropEffect == 'move') {
      article.parentNode.removeChild(article);
    }
  });
});

dropArea.addEventListener('dragover', e => {
  e.preventDefault();
  return false;
});

dropArea.addEventListener('drop', e => {
  e.preventDefault();
  console.log('drag over');

  // const draggable = document.querySelector('.dragging');
  // dropArea.appendChild(draggable);
  const data = e.dataTransfer.getData('text/html');
  const fragment = document.createRange().createContextualFragment(data);

  // dropArea.appendChild(JSON.parse(data));
  // console.log(JSON.parse(data));
  console.log(fragment);
  dropArea.appendChild(fragment);
});
