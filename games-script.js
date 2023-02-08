//all games

const games =[
    {name: "Dead Space Remake", price: 100, game_banner: "media/DeadSpaceRemake_banner.png"},
    {name: "Dead Space Remake", price: 100, game_banner: "media/DeadSpaceRemake_banner.png"},
    {name: "Dead Space Remake", price: 100, game_banner: "media/DeadSpaceRemake_banner.png"},
    {name: "Dead Space Remake", price: 100, game_banner: "media/DeadSpaceRemake_banner.png"},
    {name: "Dead Space Remake", price: 100, game_banner: "media/DeadSpaceRemake_banner.png"},
    {name: "Dead Space Remake", price: 100, game_banner: "media/DeadSpaceRemake_banner.png"},
    {name: "Dead Space Remake", price: 100, game_banner: "media/DeadSpaceRemake_banner.png"},{name: "Dead Space Remake", price: 100, game_banner: "media/DeadSpaceRemake_banner.png"},{name: "Dead Space Remake", price: 100, game_banner: "media/DeadSpaceRemake_banner.png"},{name: "Dead Space Remake", price: 100, game_banner: "media/DeadSpaceRemake_banner.png"},{name: "Dead Space Remake", price: 100, game_banner: "media/DeadSpaceRemake_banner.png"},{name: "Dead Space Remake", price: 100, game_banner: "media/DeadSpaceRemake_banner.png"},{name: "Dead Space Remake", price: 100, game_banner: "media/DeadSpaceRemake_banner.png"},{name: "Dead Space Remake", price: 100, game_banner: "media/DeadSpaceRemake_banner.png"},{name: "Dead Space Remake", price: 100, game_banner: "media/DeadSpaceRemake_banner.png"},{name: "Dead Space Remake", price: 100, game_banner: "media/DeadSpaceRemake_banner.png"},{name: "Dead Space Remake", price: 100, game_banner: "media/DeadSpaceRemake_banner.png"},{name: "Dead Space Remake", price: 100, game_banner: "media/DeadSpaceRemake_banner.png"},{name: "Dead Space Remake", price: 100, game_banner: "media/DeadSpaceRemake_banner.png"},{name: "Dead Space Remake", price: 100, game_banner: "media/DeadSpaceRemake_banner.png"},{name: "Dead Space Remake", price: 100, game_banner: "media/DeadSpaceRemake_banner.png"},{name: "Dead Space Remake", price: 100, game_banner: "media/DeadSpaceRemake_banner.png"},{name: "Dead Space Remake", price: 100, game_banner: "media/DeadSpaceRemake_banner.png"},{name: "Dead Space Remake", price: 100, game_banner: "media/DeadSpaceRemake_banner.png"},{name: "Dead Space Remake", price: 100, game_banner: "media/DeadSpaceRemake_banner.png"},{name: "Dead Space Remake", price: 100, game_banner: "media/DeadSpaceRemake_banner.png"},{name: "Dead Space Remake", price: 100, game_banner: "media/DeadSpaceRemake_banner.png"},{name: "Dead Space Remake", price: 100, game_banner: "media/DeadSpaceRemake_banner.png"},{name: "Dead Space Remake", price: 100, game_banner: "media/DeadSpaceRemake_banner.png"},{name: "Dead Space Remake", price: 100, game_banner: "media/DeadSpaceRemake_banner.png"},

]
for(let i = 0; i < games.length; i++){
    console.log(games[i].name, games[i].price, games[i].game_banner);
}
document.body.onload = addGames();
function addGames(){
    const gameList = document.getElementById("featured-games");
    for(let i = 0; i < games.length; i++){
        const game = document.createElement("div");
        game.classList.add("game");
        game.innerHTML = `<div class="game" id="${games[i].name}">
        <img src="${games[i].game_banner}" alt="${games[i].name}" style ="width: 200px">
        <h3>${games[i].name}</h3>
        <p>${games[i].price}</p>
        <button class="add-to-cart">Add to Cart</button>
        </div>
        `;
        gameList.appendChild(game);
    }
}