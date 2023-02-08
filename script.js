const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


$(memberlist).ready(function() {
    var APIKEY = "7cfce0c20636e6538a2f9094d23cfa7b346f6"
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

if (close) {
    close.addEventListener('click', ()=> {
        nav.classList.add('active');
    })
}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cb9f5f458fmsh642e483c83a8823p120ff7jsn546df944fb80',
		'X-RapidAPI-Host': 'valorant2.p.rapidapi.com'
	}
};

fetch('https://valorant2.p.rapidapi.com/valorant_players', options)
	.then(response => response.json())
	.then(response => {
        console.log(response[0])
        const textDiv = document.getElementById('P')
        const p = document.createElement('P')
        const pText = document.createTextNode(response[0])
        textDiv.appendChild(p);
        p.appendChild(pText);
    })
	.catch(err => console.error(err));



