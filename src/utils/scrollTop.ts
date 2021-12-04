function scrollTop() {
  const top: Element | null = document.querySelector('.navbar');
  if (top) {
    top.scrollIntoView({ behavior: 'smooth' });
  }
}

export default scrollTop;
