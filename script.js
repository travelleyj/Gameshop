const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
const navLinks = document.querySelectorAll('#navbar a');

	const toggleButton = document.getElementsByClassName('toggle-button')[0]
	const navbarLinks = document.getElementsByClassName('navbar-links')[0]
	const slideshow = document.getElementsByClassName('game-slideshow')[0]
	toggleButton.addEventListener('click', () => {
		navbarLinks.classList.toggle('active')
		if(navbarLinks.style.display === 'none'){
			navbarLinks.style.display = 'block';
			slideshow.style.display = 'none';
		}
		else
		{
			navbarLinks.style.display = 'none';
			slideshow.style.display = 'block';
		}
			
	});


