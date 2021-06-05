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
  //
  article.ondragstart = function(e) {
    e.dataTransfer.effectAllowed = 'copy';
    e.dataTransfer.setData('text/html', this.outerHTML);
    e.dataTransfer.setData('text/plain', 'siema');
    e.dataTransfer.setData('text/custom', 'yo');
    console.log(e.dataTransfer.effectAllowed);
    //console.log('rozpoczęto przeciąganie');
  };

  article.ondragend = function(e) {
    if (e.dataTransfer.dropEffect == 'copy') {
      article.parentNode.removeChild(article);
    }
    //console.log('zakończono przeciąganie');
  };

  article.ondrag = function(e) {
    // console.log('przeciąganie w toku');
    //event wykonuje się wiele razy
  };
});

//dropArea events

dropArea.ondragenter = function(e) {
  console.log('ondragenter');
  //console.log('obiekt w obszarze zrzutu');
};

dropArea.ondragleave = function(e) {
  console.log('ondragleave');
  //console.log('obiekt opuścił obszar zrzutu');
};

dropArea.ondragover = function(e) {
  e.preventDefault();

  return false;
};

dropArea.ondrop = function(e) {
  e.preventDefault();
  //event wykonuje się wiele razy
  // if (e.dataTransfer.effectAllowed != 'copy') return;

  // const data =
  //   e.dataTransfer.getData('text/plain') +
  //   e.dataTransfer.getData('text/custom');
  // console.log('ondrop', data);

  const data = e.dataTransfer.getData('text/html');
  dropArea.innerHTML += data;
};
