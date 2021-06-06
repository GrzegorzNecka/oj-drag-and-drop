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

function dragEnterForItem(e) {
  // const article = findUpTag(e.target, 'ARTICLE');
  // if (article === null) {
  //   return;
  // }
  // const isNotDragging = !article.classList.contains('dragging');
  // if (isNotDragging) {
  //   article.classList.add('dropped');
  // }
}

function dragLeaveForItem(e) {
  // const article = findUpTag(e.target, 'ARTICLE');
  // if (article === null) {
  //   return;
  // }
  // const isDropped = article.classList.contains('dropped');
  // if (isDropped) {
  //   article.classList.remove('dropped');
  // }
}

function dropForItem(e) {
  const article = findUpTag(e.target, 'ARTICLE');
  const main = findUpTag(e.target, 'MAIN');
  const dragging = document.querySelector('.dragging');

  main.insertBefore(dragging, article);
}

export { dragEnterForItem, dragLeaveForItem, dropForItem, drop };
