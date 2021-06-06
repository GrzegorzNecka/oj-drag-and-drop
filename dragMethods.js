function dragStart() {
  this.classList.add('dragging');
}

function dragEnd(e) {
  const article = e.target;
  if (article.classList.contains('dragging')) {
    article.classList.remove('dragging');
  }
}

export { dragStart, dragEnd };
