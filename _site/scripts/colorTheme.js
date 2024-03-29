// select
const colorThemes = document.querySelectorAll('[name="theme"]');
// store theme in local storage
const storeTheme = function (theme) {
  localStorage.setItem("theme", theme);
};

//change theme value in local storage on click
colorThemes.forEach((themeOption) => {
  themeOption.addEventListener("click", () => {
    storeTheme(themeOption.id);
    // fallback for no :has() support
    document.documentElement.className = themeOption.id;
    adaptCodeBlockColor();
    adaptHamburgerButton()
  });
});

// set theme when visitor returns
const setTheme = function () {
  const activeTheme = localStorage.getItem("theme");
  colorThemes.forEach((themeOption) => {
    if (themeOption.id === activeTheme) {
      themeOption.checked = true;
    }
  });
  // fallback for no :has() support
  document.documentElement.className = activeTheme;
};

function adaptCodeBlockColor() {
  const allCodes = document.querySelectorAll("code");
  const activeTheme = localStorage.getItem("theme");
  if (activeTheme === "light") {
    for (let code of allCodes) {
      code.style.color = "#1d533e";
    }
  }
  if (activeTheme === "dark") {
    for (let code of allCodes) {
      code.style.color = "#f7f5f1e6";
    }
  }
}


function adaptHamburgerButton() {
  const activeTheme = localStorage.getItem("theme");
  const hamburger = document.querySelector("#hamburger-icon");
  if (activeTheme === "dark") {
    hamburger.setAttribute('fill', 'white')
  }
  if (activeTheme === "light") {
    hamburger.setAttribute('fill', '#000000')
  }
}

window.onload = setTheme();