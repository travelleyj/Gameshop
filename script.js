const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', ()=> {
        nav.classList.remove('active');
    })
}

if (close) {
    close.addEventListener('click', ()=> {
        nav.classList.add('active');
    })
}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cb9f5f458fmsh642e483c83a8823p120ff7jsn546df944fb80',
		'X-RapidAPI-Host': 'call-of-duty-modern-warfare.p.rapidapi.com'
	}
};

fetch('https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/Amartin743/psn', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));