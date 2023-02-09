var username = [];
var password = [];
var email = []; 
var points = [];
var spinthewheel_attempt = []; 
var jump_attempt = [];
var authenticate;
var doublecheck = [];

$(document).ready(function () 
{
    const APIKEY = "63e5253f478852088da67f60";
    getDatabase();
    checkdatabase();

    $("#sign_up_submit").on("click", function (e) 
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


                $("#sign_up_form").trigger("reset");
            }
        }

        $.ajax(settings).done(function (response) 
        {
            console.log(response);
            
            $("#sign_up_submit").prop( "disabled", false);
            
            
        });
        
        
        if (checkdatabase() == false)
        {
            alert("Sign in failed.");
            console.log(authenticate);
        }
        else 
        {
            alert("Sign in Successfully.");
            console.log(authenticate);  
            window.location.href = "index.html"; //THIS ONE NEED HCANGE HOR
        }

        
        
        
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
                    email.push(response[i].email);
                    points.push(response[i].points);
                    spinthewheel_attempt.push(response[i].spinthewheel-attempt); 
                    jump_attempt.push(response[i].jump-attempt);
                }
                console.log(username);
                console.log(password); 
                console.log(email);
                console.log(points);
                console.log(spinthewheel_attempt);
                console.log(jump_attempt);
            })
    }
    
    function checkdatabase()
        {
            let i = 0;
            while(i < username.length)
            {
    
                if (username[i] == $("#email").val())
                {
                    console.log("Sign in unsuccessful");
                    authenticate = false;
                    doublecheck.push(authenticate);
                }
                else
                {
                    console.log("Sign in successful");
                    authenticate = true;
                    doublecheck.push(authenticate);
                }
                i++;
            }
    
            for (let i = 0; i < doublecheck.length; i++)
            {
                if (doublecheck[i] == false)
                {
                    return false;
                }
    
    
            }
    
        
        }
})



