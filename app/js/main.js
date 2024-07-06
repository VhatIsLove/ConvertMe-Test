const burgerToggle = document.querySelector('.nav-toggle');
const navigation = document.querySelector('.navigation');


function openBurgerMenu() {
  navigation.classList.add('open');
  burgerButton.classList.add('navigation__active');
}

// Функция закрытия бургер меню
function closeBurgerMenu() {
  navigation.classList.remove('open');
  burgerButton.classList.remove('navigation__active');
}



burgerToggle.addEventListener('click', () => {
	if (burgerToggle.classList.contains('open')) {
    closeBurgerMenu();
  } else {
    openBurgerMenu();
  }

})


document.addEventListener('click', (event) => {
  if (!event.target.closest('.navigation') && !event.target.closest('.nav-toggle')) {
    closeBurgerMenu();
  }
});