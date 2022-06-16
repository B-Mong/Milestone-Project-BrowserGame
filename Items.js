let inventory 
// Function that appends the images onto the screen based on user params
function appendImage(url,left,bottom){
    let image = document.createElement('img')
    image.src = url
    image.style.position = 'absolute'
    image.style.left = left + 'px'
    image.style.bottom = bottom + 'px'
    image.style.zIndex = "0"
    document.body.append(image)
    return image
}

// Function that adds the event listener to move the items into the inventory
function newFruit(url, left, bottom){
    let item = appendImage(url, left, bottom)
    item.addEventListener(`dblclick`, function(){
        item.remove()
        let inventoryItem = document.createElement(`img`)
        inventoryItem.src = url
        inventory.append(inventoryItem)
    })
}
// Creates the inventory and places it under the "Fruits Collected"
function newInventory(){
    inventory = document.createElement('div')
    inventory.setAttribute("id","inventory")
    inventory.style.position = 'absolute'
    inventory.style.bottom = '650px';
    inventory.style.left = '1390px'
    inventory.style.width = '25%'
    inventory.style.height = '200px'
    inventory.style.display = 'flex'
    inventory.style.justifyContent = 'space-evenly'
    inventory.style.alignItems = 'center'
    inventory.style.border = '5px solid black'
    inventory.style.flexDirection = 'row'
    inventory.style.backgroundColor = '#3A2038'
    document.body.append(inventory)
}

// Appends fruit onto the game
newFruit('assets/characterFruit/applepixel.png', 725,970)
newFruit('assets/characterFruit/berrypixel.png', 715,520)
newFruit('assets/characterFruit/pinepixel.png', 710,320)
newFruit('assets/characterFruit/cherrypixel.png', 740,10)
newFruit('assets/characterFruit/coconutpixel.png', 1130,5)
newFruit('assets/characterFruit/orangepixel.png', 1275,855)
// Appends the inventory
newInventory()



// Checks how many elements are inside of the inventory and logs it
var element = document.getElementById("inventory");
var numberOfChildren = element.getElementsByTagName('*').length
console.log(numberOfChildren)