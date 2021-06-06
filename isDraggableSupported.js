export const isDraggableSupported = () => {
  return 'draggable' in document.createElement('span');
};
