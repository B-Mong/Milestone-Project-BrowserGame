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

// Function that appends images to the DOM based on the X and Y coordinates
function appendImage(url, left, bottom){
    let image = document.createElement('img')
    image.src = url
    image.style.position = 'relative'
    image.style.left = left + 'px'
    image.style.bottom = bottom + 'px'
    image.style.zIndex = "1"
    document.body.append(image)
    return image
}

// Sets the refresh rate of the game so it can be rendered. Chose 60hz since that is the most common refresh rate
setInterval(gameRender, 1000/60)


// game canvas resolution 720 x 1072


// adding objects to the game
appendImage('assets/dungeonAssets/bigSilver.png', 680, 1070)
appendImage('assets/dungeonAssets/silverBox.png', 698, 1070)

