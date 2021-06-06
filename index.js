// Import stylesheets
import './style.css';
import { isDraggableSupported } from './isDraggableSupported';
import { dragEnter, dragOver, dragLeave } from './dragDefaultMethods';
import { dragStart, dragEnd } from './dragMethods';
import { dropForItem, drop } from './dropMethods';

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
  item.addEventListener('drop', dropForItem);
});

//--- DROP ---

dropAreas.forEach(area => {
  area.addEventListener('dragenter', dragEnter);
  area.addEventListener('dragover', dragOver);
  area.addEventListener('dragleave', dragLeave);
  area.addEventListener('drop', drop);
});
