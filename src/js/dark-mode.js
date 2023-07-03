const toggleTheme = document.querySelector('.theme-switch input[type="checkbox"]');
const storageTheme = localStorage.getItem('theme');

const theme = {
    LIGHT: 'light',
    DARK: 'dark',
  };

  if (storageTheme) {document.documentElement.setAttribute('data-theme', storageTheme);
  if (storageTheme === theme.DARK) {
    toggleTheme.checked = true;
  }
}

function setTheme(el) {
    if (el.target.checked) {
      document.documentElement.setAttribute('data-theme', theme.DARK);
      localStorage.setItem('theme', theme.DARK);
    } else {
      document.documentElement.setAttribute('data-theme', theme.LIGHT);
      localStorage.setItem('theme', theme.LIGHT);
    }
  }

  toggleTheme.addEventListener('change', setTheme, false);