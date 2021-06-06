function dragStart() {
  this.classList.add('dragging');
}

function dragEnd(e) {
  const draggingItem = e.target;
  if (draggingItem.classList.contains('dragging')) {
    draggingItem.classList.remove('dragging');
  }
}

export { dragStart, dragEnd };
