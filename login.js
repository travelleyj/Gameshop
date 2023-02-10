var username = [];
var password = [];
var spin_attempts = [];
var points = [];
$(document).ready(function () 
{
    const APIKEY = "63e5253f478852088da67f60";
    getDatabase();
    checkdatabase();

    $("#sign_in_submit").on("click", function (e) 
    {

        e.preventDefault();

        let signupUsername = $("#username").val();
        let signupEmail = $("#email").val();
        let signupPassword = $("#password").val();
        let points = 0;
        let spinthewheel_attempt = 3;
        let jump_attempt = 3;


        let jsondata = 
        { 
            "username": signupUsername,
            "email": signupEmail,
            "password": signupPassword,
            "points": points,
            "spinthewheel-attempts": spinthewheel_attempt,
            "jump-attempts": jump_attempt
        };

        if(checkdatabase() == true) {
            alert("Login Successfully.");
            console.log(authenticate);
            window.location.href = "index.html";
        }
        else  {
            alert("Login failed.");
        }

        let settings =
        {
            "async": true,
            "crossDomain": true,
            "url": "https://members-5211.restdb.io/rest/member-data",
            "method": "POST", 
            "headers": 
            {
                "content-type": "application/json",
                "x-apikey": APIKEY,
                "cache-control": "no-cache"
            },
            "processData": false,
            "data": JSON.stringify(jsondata),
            "beforeSend": function()
            {


                $("#sign_in_form").trigger("reset");
            }
        }

        $.ajax(settings).done(function (response) 
        {
            console.log(response);
            
            $("#sign_in_submit").prop( "disabled", false);
            
            
        });        
        
    });

    function getDatabase() {
        let settings = 
            {
                "async": true,
                "crossDomain": true,
                "url": "https://members-5211.restdb.io/rest/member-data",
                "method": "GET",
                "headers": {
                    "content-type": "application/json",
                    "x-apikey": APIKEY,
                    "cache-control": "no-cache"
                }
            }
            $.ajax(settings).done(function (response) 
            {
                console.log(response);
                for (let i = 0; i < response.length; i++) 
                {
                    username.push(response[i].username);
                    password.push(response[i].password);
                    spin_attempts.push(response[i]["spinthewheel-attempts"]);
                    points.push(response[i].points);
                }
                
            })
    }

    function checkdatabase()
        {
            let i = 0;
            while(i < username.length)
            {

                if (username[i] == $("#username").val() && password[i] == $("#password").val())
                {
                    console.log("Sign in successful");
                    authenticate = true;
                    return authenticate;
                    localStorage.clear();
                    localStorage.setItem("username", JSON.stringify(username[i]));
                    localStorage.setItem("spinthewheel_attempt", spin_attempts[i]);
                    localStorage.setItem("points", points[i]);
                    return authenticate;
                }
                else
                {
                    console.log("Sign in unsuccessful");
                    authenticate = false;
                    i++;
                }
            }
        }
})





