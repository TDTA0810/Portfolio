document.body.classList.add('js-enabled');

// Enhancement 1: keep the selected theme while navigating this website in the same tab.
const themeButton = document.getElementById('theme-toggle');
const savedTheme = sessionStorage.getItem('portfolioTheme');

if (savedTheme === 'dark') {
  document.body.classList.add('dark');
}

if (themeButton) {
  const darkModeIsOn = document.body.classList.contains('dark');
  themeButton.textContent = darkModeIsOn ? 'Light mode' : 'Dark mode';
  themeButton.setAttribute('aria-pressed', darkModeIsOn);

  themeButton.addEventListener('click', function () {
    document.body.classList.toggle('dark');

    const darkModeIsOn = document.body.classList.contains('dark');
    themeButton.textContent = darkModeIsOn ? 'Light mode' : 'Dark mode';
    themeButton.setAttribute('aria-pressed', darkModeIsOn);

    if (darkModeIsOn) {
      sessionStorage.setItem('portfolioTheme', 'dark');
    } else {
      sessionStorage.setItem('portfolioTheme', 'light');
    }
  });
}

// Enhancement 2: show or hide the navigation menu on small screens.
const menuButton = document.getElementById('menu-toggle');
const navigation = document.getElementById('main-nav');

if (menuButton && navigation) {
  menuButton.addEventListener('click', function () {
    navigation.classList.toggle('show');

    const menuIsOpen = navigation.classList.contains('show');
    menuButton.setAttribute('aria-expanded', menuIsOpen);
    menuButton.textContent = menuIsOpen ? 'Close menu' : 'Menu';
  });

  const navigationLinks = navigation.querySelectorAll('a');
  navigationLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      navigation.classList.remove('show');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.textContent = 'Menu';
    });
  });
}
