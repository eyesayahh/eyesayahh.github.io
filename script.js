const App = (() => {
  const title = document.querySelector('.mainTitle');

  title.classList.add('appear');

  const techImgs = document.querySelectorAll('.techImg');
  techImgs.forEach(img => {
    img.addEventListener('click', () => {
      img.classList.toggle('clickSpin');
      setTimeout(() => {
        img.classList.toggle('clickSpin');
      }, 1000);
    });
  });
})();


