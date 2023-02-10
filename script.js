const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
const navLinks = document.querySelectorAll('#navbar a');

if (bar) {
    bar.addEventListener('click', ()=> {
        nav.classList.remove('active');
    })
	}

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

const username = document.getElementById('username');

if(localStorage.getItem('username') != null){
	var user_name = JSON.parse(localStorage.getItem('username'));
	console.log(user_name);
	username.innerHTML = `${user_name}`;
}
const userlogo = document.getElementById('user-logo');
userlogo.addEventListener('click', () => {
	if(localStorage.getItem('username') != null){
		alert("You are logged in!");

	}
	else{
		alert("Please sign in to view your profile!");
		
	}
});
