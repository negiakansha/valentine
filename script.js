const TOGGLE = document.querySelector('button');
const themeSwitch = document.getElementById('themeSwitch');
const root = document.documentElement;

// Function to toggle light and dark themes
function toggleTheme() {
	if (!themeSwitch.checked) {
		root.style.setProperty('--bg-color', '#FFE3EC'); // Light mode background color
		root.style.setProperty('--text-color', 'black');  // Light mode text color
		if (themeSwitch.nextElementSibling) {
			themeSwitch.nextElementSibling.textContent = 'Light Mode';
		}
	} else {
		root.style.setProperty('--bg-color', '#e75480');  // Dark mode background color
		root.style.setProperty('--text-color', 'white'); // Dark mode text color
		if (themeSwitch.nextElementSibling) {
			themeSwitch.nextElementSibling.textContent = 'Dark Mode';
		}
	}
}

themeSwitch.addEventListener('change', toggleTheme);

const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
	themeSwitch.checked = true;
	toggleTheme();
}

//preloader
var loader = document.getElementById("preloader");
        window.addEventListener("load", function() {
            loader.style.display = "none";
            document.body.style.overflow = "auto";
})

//buttons
const UPDATE = ({ target, x, y }) => {
    const bounds = target.getBoundingClientRect();
    target.style.setProperty("--x", x - bounds.left);
    target.style.setProperty("--y", y - bounds.top);
  };
  
  const BTNS = document.querySelectorAll("button");
  BTNS.forEach(BTN => BTN.addEventListener("pointermove", UPDATE));