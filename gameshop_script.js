

var games =[
    {name: "Dead Space Remake", price: 40, game_banner: "media/DeadSpaceRemake_banner.png", type: "in-stock"},
    {name: "Hogwarts Legacy", price: 50, game_banner: "media/hogwarts_legacy game.webp", type: "in-stock"},
    {name: "Forspoken", price: 60, game_banner: "media/ForspokenPC_gamebanner.png", type: "in-stock"},
    {name:"Terraria", price: 5, game_banner: "media/terraria_gamebanner.jpg", type: "in-stock"},
    {name: "Minecraft", price: 17, game_banner: "media/minecraft_gamebanner.png", type: "in-stock"},
    {name: "Bloons TD 6", price: 5, game_banner: "media/btd6_gamebanner.jpg", type: "in-stock"},
    {name: "Elden Ring", price: 50, game_banner: "media/eldenring_gamebanner.webp", type: "in-stock"},
    {name: "Phasmophobia", price: 10, game_banner: "media/phasmophobia_gamebanner.jpg", type: "in-stock"},
    {name: "Tribes of Midgard", price: 10, game_banner: "media/tribes_of_midgard_gamebanner.jpg", type: "in-stock"},
    {name: "Raft", price: 15, game_banner: "media/raft_gamebanner.jpg", type: "in-stock"},
    {name: "UNO", price: 5, game_banner: "media/uno_gamebanner.jpeg", type: "in-stock"},
    {name: "Rainbow Six Siege", price: 10, game_banner: "media/r6_gamebanner.jpg", type: "in-stock"},
    {name: "Back 4 Blood", price: 60, game_banner: "media/b4b_gamebanner.webp", type: "in-stock"},
    {name: "Ark Survival Evolved", price: 25, game_banner: "media/ark_gamebanner.jpg", type: "in-stock"},

]


addgamesinshop();
function addgamesinshop(){
    const gameList = document.getElementById("shop");
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
            break;
        }
    }
}