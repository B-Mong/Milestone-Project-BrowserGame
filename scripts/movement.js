// Function that prevents the browser scrolling to pick up on arrow keys
window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);

// Function that deals with character movement in relation with user input (arrow keys)
function move(element) {

    function moveWithArrowKeys(left, bottom, callback){
        let direction = null;
        let x = left;
        let y = bottom;

        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
        
        function moveCharacter(){ 
            if(direction === 'left'){
                x-=3
            }
            if(direction === 'up'){
                y+=3
            }
            if(direction === 'right'){
                x+=3
            }
            if(direction === 'down'){
                y-=3
            }
            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
        }
        
        setInterval(moveCharacter, 0)
        
        document.addEventListener('keydown', function(e){
            if(e.repeat) return;
        
            if(e.key === 'ArrowLeft'){
                direction = 'left'
            }
            if(e.key === 'ArrowUp'){
                direction = 'up'
            }
            if(e.key === 'ArrowRight'){
                direction = 'right'
            }
            if(e.key === 'ArrowDown'){
                direction = 'down'
            }
        })
        
        document.addEventListener('keyup', function(e){
            direction = null
        })
    }
    // Synonomous function naming
    return {
        withArrowKeys: moveWithArrowKeys
    }
}

function newImage(url){
    let image = document.createElement('img')
    image.src = url
    image.style.position = 'relative'
    document.body.append(image)
    return image
}

// Creates an element and allows it to use the function of move, withArrowKeys. Places it down on the X/Y coordinates that is specified

function gooCharacter(x, y) {
    const element = newImage('assets/characterFruit/gooCharacter.png')

    move(element).withArrowKeys(x, y)
}



// Appends the playable character onto the game
const player = gooCharacter(675, 1150)