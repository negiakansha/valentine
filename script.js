	const TOGGLE = document.querySelector('button');
	const themeSwitch = document.getElementById('themeSwitch');
	const root = document.documentElement;
	const toggleButton = document.getElementById('toggleButton');
	const toggleButton2 = document.getElementById('toggleButton2');

	// Function to toggle light and dark themes
	function toggleTheme() {
		if (themeSwitch.checked) {
			root.style.setProperty('--bg-color', '#FFE3EC'); // Light mode background color
			root.style.setProperty('--text-color', '#e75480');  // Light mode text color
			root.style.setProperty('--button-color', '#e75480');  // Light mode button text color
			toggleButton.classList.remove('btn-6');
			toggleButton.classList.add('btn-7');
			toggleButton2.classList.remove('btn-6');
			toggleButton2.classList.add('btn-7');
			if (themeSwitch.nextElementSibling) {
				themeSwitch.nextElementSibling.textContent = 'Light Mode';
			}
		} else {
			root.style.setProperty('--bg-color', '#e75480');  // Dark mode background color
			root.style.setProperty('--text-color', '#FFE3EC'); // Dark mode text color
			root.style.setProperty('--button-color', '#FFE3EC');  // Light mode button text color
			toggleButton.classList.remove('btn-7');
			toggleButton.classList.add('btn-6');
			toggleButton2.classList.remove('btn-7');
			toggleButton2.classList.add('btn-6');
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

	function showYippeeCat() {
		var valentineContainer = document.getElementById("valentineContainer");
		valentineContainer.classList.add("answer--yes");
	}
