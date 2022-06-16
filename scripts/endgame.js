
// Need code to check for if inventory == 6 then execute code below


// Congratulates user
let win = document.getElementById("attri");
let update = document.createElement("p");
update.textContent = 'You collected all the fruit!'
win.appendChild(update)
// Adds button to replay game
let replay = document.createElement("button")
replay.setAttribute("id","replayButton")
replay.style
replay.innerText = 'Replay!'
replay.addEventListener("click",() =>{
    location.reload()
})
win.appendChild(replay)

// Checks how many fruit are inside of inventory
let element = document.getElementById("inventory");
let numberOfFruit = element.getElementsByTagName('*').length
