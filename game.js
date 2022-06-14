import TileMap from './TileMap.js';

// selects the canvas by the HTML ID and sets the context of the canvas to a 2d image
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
// tilesize is 16 since I am using 16 bit images
const tileSize = 16;

const tileMap = new TileMap(tileSize);

function gameRender(){
    tileMap.draw(canvas,ctx);
}

setInterval(gameRender, 1000/60)

