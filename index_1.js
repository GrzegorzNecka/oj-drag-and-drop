const draggableItems = document.querySelectorAll('article');
const dropAreas = document.querySelectorAll('main');

//--- DRAG ---

function dragStart(e) {
  console.log('dragStart');
  this.classList.add('dragging');
}

function dragEnd(e) {
  console.log('dragEnd');

  if (e.target.classList.contains('dragging')) {
    this.classList.remove('dragging');
  }
}

draggableItems.forEach(item => {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);
});

//--- DROP ---

function dragEnter(e) {
  e.preventDefault();
  console.log('dragEnter');
}

function dragOver(e) {
  e.preventDefault();
  console.log('dragOver');
}
function dragLeave(e) {
  e.preventDefault();
  console.log('dragLeave');
}

function drop(e) {
  e.preventDefault();

  const nodeName = e.target.nodeName === 'MAIN';
  const dragging = document.querySelector('.dragging');

  console.dir(e.target);
  if (dragging && nodeName) {
    e.target.appendChild(dragging);
  }

  console.log('drop');
}

dropAreas.forEach(area => {
  area.addEventListener('dragenter', dragEnter);
  area.addEventListener('dragover', dragOver);
  area.addEventListener('dragleave', dragLeave);
  area.addEventListener('drop', drop);
});
