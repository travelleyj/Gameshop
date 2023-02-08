const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://rawg-video-games-database.p.rapidapi.com/games",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "8bd4fe73e6msh50c408749f9fdc9p177276jsn222eb8f58ecc",
		"X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});