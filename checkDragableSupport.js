export const isDraggableSupported = () => {
  console.log('draggable' in document.createElement('span'));
  if (!'draggable' in document.createElement('span')) return;
};
