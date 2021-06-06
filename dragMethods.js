function dragStart() {
  this.classList.add('dragging');
}

function dragEnd(e) {
  if (e.target.classList.contains('dragging')) {
    e.target.classList.remove('dragging');
  }
}

export { dragStart, dragEnd };
