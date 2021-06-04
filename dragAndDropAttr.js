const dragElems = document.querySelectorAll('article');
const dropArea = document.querySelectorAll('main')[1];

const setDraggable = () =>
  dragElems.forEach(elem => elem.setAttribute('draggable', 'true'));

const setDropable = () => dropArea.setAttribute('id', 'dropZone');

export { setDraggable, setDropable };
