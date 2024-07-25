const project1Slide1 = document.querySelector('.Proyect1Slide1');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const project1Slide1Top = project1Slide1.offsetTop;
  const project1Slide1Height = project1Slide1.offsetHeight;

  if (scrollPosition > project1Slide1Top - window.innerHeight && scrollPosition < project1Slide1Top + project1Slide1Height) {
    project1Slide1.classList.add('animate');
  } else {
    project1Slide1.classList.remove('animate');
  }
});