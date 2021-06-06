import findUpNode from './findUpNode';

// -- DROP METHODS FOR AREA

function drop(e) {
  e.preventDefault();

  const dropZone = e.target.nodeName === 'MAIN';
  const dragging = document.querySelector('.dragging');

  if (dragging && dropZone) {
    e.target.appendChild(dragging);
  }
}

// -- DROP METHODS FOR ITEMS

function dropForItem(e) {
  const existItem = findUpNode(e.target, 'ARTICLE');
  const dropZone = findUpNode(e.target, 'MAIN');
  const dragging = document.querySelector('.dragging');

  dropZone.insertBefore(dragging, existItem);
}

export { dropForItem, drop };
