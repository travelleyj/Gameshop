//all games

var games =[
    {name: "Dead Space Remake", price: 40, game_banner: "media/DeadSpaceRemake_banner.png", type: "in-stock"},
    {name: "Hogwarts Legacy", price: 50, game_banner: "media/hogwarts_legacy game.webp", type: "in-stock"},
    {name: "Forspoken", price: 60, game_banner: "media/ForspokenPC_gamebanner.png", type: "in-stock"},

]
for(let i = 0; i < games.length; i++){
    console.log(games[i].name, games[i].price, games[i].game_banner);
}
document.body.onload = addGames();
function addGames(){
    const gameList = document.getElementById("featured-games");
    for(let i = 0; i < games.length; i++){
        if(games[i].type == "in-stock"){
            const game = document.createElement("div");
            game.classList.add("game");
            game.innerHTML = `<div class="games-featured-banner">
            <img src="${games[i].game_banner}" alt="${games[i].name}">
            <p class="game-name">${games[i].name}</p>
            <p class="price">SGD$${games[i].price}</p>
            <button class="add-to-cart" id="${games[i].name}"><i class="fa-solid fa-cart-shopping"> add to cart</i></button>
            </div>
            `;
            gameList.appendChild(game);
        }
        else if(games[i].type == "out-of-stock"){
            const game = document.createElement("div");
            game.classList.add("game");
            game.innerHTML = `<div class="games-featured-banner">
            <img src="${games[i].game_banner}" alt="${games[i].name}">
            <p class="game-name">${games[i].name}</p>
            <p class="price">SGD$${games[i].price}</p>
            <button class="add-to-cart" id="${games[i].name}"><i class="fa-solid fa-cart-shopping"> out of stock</i></button>
            </div>
            `;
            gameList.appendChild(game);
        }
    }
}