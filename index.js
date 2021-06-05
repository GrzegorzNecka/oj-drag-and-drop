// Import stylesheets
import './style.css';

// import { isDraggableSupported } from './isDraggableSupported';

let draggablesElems = document.querySelectorAll('article');
let dropArea = document.querySelectorAll('main');

// isDraggableSupported();

// ---------------- drag ----------------------

document.querySelectorAll('article').forEach(article => {
  article.addEventListener('dragstart', e => {
    console.log(document.querySelectorAll('article'));
    console.log('start');
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

document.querySelectorAll('main').forEach(main => {
  main.addEventListener('mouseenter', () => {
    draggablesElems = document.querySelectorAll('article');
    dropArea = document.querySelectorAll('main');
  });

  main.addEventListener('dragover', e => {
    console.log('dragover');
    e.preventDefault();
    return false;
  });

  main.addEventListener('drop', e => {
    console.log(document.querySelectorAll('main'));
    e.preventDefault();
    const data = e.dataTransfer.getData('text/html');
    const fragment = document.createRange().createContextualFragment(data);
    main.appendChild(fragment);
  });
});
