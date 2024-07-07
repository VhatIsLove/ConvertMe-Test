
document.addEventListener('DOMContentLoaded', function() {
  const burgerBtn = document.querySelector('.burger-btn');
  const navigation = document.querySelector('.navigation');

  if (burgerBtn && navigation) {
    burgerBtn.addEventListener('click', function() {
      burgerBtn.classList.toggle('active');
      navigation.classList.toggle('navigation__active');
    });
  } else {
    console.error('Один или оба элемента не найдены в DOM');
  }
});