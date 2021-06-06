import findUpTag from './findUpTag';

// -- DROP METHODS FOR AREA

function drop(e) {
  e.preventDefault();

  const nodeName = e.target.nodeName === 'MAIN';
  const dragging = document.querySelector('.dragging');

  if (dragging && nodeName) {
    e.target.appendChild(dragging);
  }
}

// -- DROP METHODS FOR ITEMS

function dropForItem(e) {
  const article = findUpTag(e.target, 'ARTICLE');
  const main = findUpTag(e.target, 'MAIN');
  const dragging = document.querySelector('.dragging');

  main.insertBefore(dragging, article);
}

export { dropForItem, drop };
