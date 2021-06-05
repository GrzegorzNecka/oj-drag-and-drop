// Import stylesheets
import './style.css';

// import { isDraggableSupported } from './isDraggableSupported';

const draggablesElems = document.querySelectorAll('article');
const dropArea = document.querySelectorAll('main')[1];

// isDraggableSupported();

// ---------------- drag ----------------------

draggablesElems.forEach(article => {
  article.addEventListener('dragstart', e => {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', article.outerHTML);
    article.classList.add('dragging');
  });

  article.addEventListener('dragend', e => {
    if (e.dataTransfer.dropEffect == 'move') {
      article.classList.remove('dragging');
      article.parentNode.removeChild(article);
    }
  });
});

// ---------------- drop ----------------------

dropArea.addEventListener('dragover', e => {
  e.preventDefault();
  return false;
});

dropArea.addEventListener('drop', e => {
  e.preventDefault();
  const data = e.dataTransfer.getData('text/html');
  const fragment = document.createRange().createContextualFragment(data);
  dropArea.appendChild(fragment);
});
