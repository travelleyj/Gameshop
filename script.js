const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
const navLinks = document.querySelectorAll('#navbar a');

$(memberlist).ready(function() {
    var APIKEY = "63e5253f478852088da67f60"
    getDetails();
    $("#change_password").hide();
    $("register_account").hide();

    $("#member_submit").on("Click", function(e)) {
        e.preventDefault();
    }

    let Username = $("member_username").val();
    let Password = $("member_password").val();

    let jsondata = {
        "Username": Username,
        "Password": Password,

    }

    let settings = {
        "async": true,
        "crossdomain": true,
        "url": "home.hmtl",
        "method": "POST",
        "headers": {
            "content_type": "test.json",
            "x_apikey": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata),
        "beforeSend": function(){
            $("#member_submit").prop("disabled", true);
            $("#add_member_form").trigger("reset");
        }
    }
}


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

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cb9f5f458fmsh642e483c83a8823p120ff7jsn546df944fb80',
		'X-RapidAPI-Host': 'valorant2.p.rapidapi.com'
	}
};

fetch('https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/Amartin743/psn', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));