// Import stylesheets
import './style.css';
import { isDraggableSupported } from './isDraggableSupported';
import { dragEnter, dragOver, dragLeave } from './dragDefaultMethods';
const draggableItems = document.querySelectorAll('article');
const dropAreas = document.querySelectorAll('main');

//--- check browser support ---

if (!isDraggableSupported()) {
  return;
}

//--- DRAG ---

draggableItems.forEach(item => {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);
  item.addEventListener('dragenter', dragEnterForItem);
  item.addEventListener('dragleave', dragLeaveForItem);
  item.addEventListener('drop', dropForItem);
});

function dragStart() {
  this.classList.add('dragging');
}

function dragEnd(e) {
  if (e.target.classList.contains('dragging')) {
    e.target.classList.remove('dragging');
  }
}

function findUpTag(el, tag) {
  while (el.parentNode) {
    el = el.parentNode;
    if (el.tagName === tag) return el;
  }
  return null;
}

//--- DROP-OVER-ITEM ---

function dragEnterForItem(e) {
  const article = findUpTag(e.target, 'ARTICLE');

  if (article === null) {
    return;
  }

  const isNotDragging = !article.classList.contains('dragging');

  if (isNotDragging) {
    article.classList.add('dropped');
  }
}

function dragLeaveForItem(e) {
  const article = findUpTag(e.target, 'ARTICLE');
  if (article === null) {
    return;
  }

  const isDropped = article.classList.contains('dropped');

  if (isDropped) {
    article.classList.remove('dropped');
  }
}

function dropForItem(e) {
  const article = findUpTag(e.target, 'ARTICLE');
  const main = findUpTag(e.target, 'MAIN');
  const dragging = document.querySelector('.dragging');

  main.insertBefore(dragging, article);
}

//--- DROP ---

dropAreas.forEach(area => {
  area.addEventListener('dragenter', dragEnter);
  area.addEventListener('dragover', dragOver);
  area.addEventListener('dragleave', dragLeave);
  area.addEventListener('drop', drop);
});

function drop(e) {
  e.preventDefault();

  const nodeName = e.target.nodeName === 'MAIN';
  const dragging = document.querySelector('.dragging');

  if (dragging && nodeName) {
    e.target.appendChild(dragging);
  }
}
