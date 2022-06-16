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

// Function that appends images to the DOM
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


// Appends images to the map
appendImage('assets/dungeonAssets/bigSilver.png', 700, 1050)
appendImage('assets/dungeonAssets/silverBox.png', 710, 1050)
appendImage('assets/dungeonAssets/woodChest.png', 700, 1000)
appendImage('assets/dungeonAssets/silverBox.png', 600, 1000)
appendImage('assets/dungeonAssets/web.png', 490, 1050)
appendImage('assets/dungeonAssets/web.png', 425, 1000)
appendImage('assets/dungeonAssets/litTorch.png', 425, 1100)
appendImage('assets/dungeonAssets/litTorch.png', 425, 1100)
appendImage('assets/dungeonAssets/web.png', 300, 700)
appendImage('assets/dungeonAssets/web.png', 235, 600)
appendImage('assets/dungeonAssets/silverBox.png', 265, 675)
appendImage('assets/dungeonAssets/silverBox.png', 300, 620)
appendImage('assets/dungeonAssets/silverBox.png', 210, 600)
appendImage('assets/dungeonAssets/unlitTorch.png', 130, 615)
appendImage('assets/dungeonAssets/metal.png', 170, 630)
appendImage('assets/dungeonAssets/silverBox.png', 180, 800)
appendImage('assets/dungeonAssets/silverBox.png', 50, 800)
appendImage('assets/dungeonAssets/litTorch.png', 4, 700)
appendImage('assets/dungeonAssets/bones.png', 20, 900)
appendImage('assets/dungeonAssets/web.png', -116, 400)
appendImage('assets/dungeonAssets/web.png', -180, 350)
appendImage('assets/dungeonAssets/web.png', -245, 300)
appendImage('assets/dungeonAssets/web.png', -308, 200)
appendImage('assets/dungeonAssets/web.png', -375, 75)
appendImage('assets/dungeonAssets/silverBox.png', -400, 500)
appendImage('assets/dungeonAssets/silverBox.png', -375, 475)
appendImage('assets/dungeonAssets/silverBox.png', -375, 300)
appendImage('assets/dungeonAssets/silverBox.png', -300, 400)
appendImage('assets/dungeonAssets/silverBox.png', -500, 410)
appendImage('assets/dungeonAssets/silverBox.png', -550, 250)
appendImage('assets/dungeonAssets/silverBox.png', -500, 102)
appendImage('assets/dungeonAssets/silverBox.png', -500, 180)
appendImage('assets/dungeonAssets/box.png', -500, 500)
appendImage('assets/dungeonAssets/box.png', -500, 100)
appendImage('assets/dungeonAssets/box.png', -400, 100)
appendImage('assets/dungeonAssets/silverBox.png', -300, 100)
appendImage('assets/dungeonAssets/litTorch.png', -300, 100)
appendImage('assets/dungeonAssets/litTorch.png', -600, 100)
appendImage('assets/dungeonAssets/bones.png', -300, 100)
appendImage('assets/dungeonAssets/bones.png', -300, 100)
appendImage('assets/dungeonAssets/bones.png', -300, 200)
appendImage('assets/dungeonAssets/bones.png', -500, 400)
appendImage('assets/dungeonAssets/bones.png', -500, 600)
appendImage('assets/dungeonAssets/bones.png', -650, 220)
appendImage('assets/dungeonAssets/bones.png', -800, 710)
appendImage('assets/dungeonAssets/bones.png', -1000, 400)
appendImage('assets/dungeonAssets/bones.png', -1000, 500)
appendImage('assets/dungeonAssets/bones.png', -700, 340)
appendImage('assets/dungeonAssets/bones.png', -900, 1000)
appendImage('assets/dungeonAssets/bones.png', -800, 800)
appendImage('assets/dungeonAssets/bones.png', -700, 900)
appendImage('assets/dungeonAssets/bones.png', 1200, 900)
appendImage('assets/dungeonAssets/bones.png', 1000, 1000)
appendImage('assets/dungeonAssets/bones.png', 1000, 1100)
appendImage('assets/dungeonAssets/bones.png', 1100, 1100)
appendImage('assets/dungeonAssets/litTorch.png', 1000, 1100)
appendImage('assets/dungeonAssets/litTorch.png', 1000, 1050)
appendImage('assets/dungeonAssets/litTorch.png', 1000, 850)
appendImage('assets/dungeonAssets/litTorch.png', 1000, 1000)

