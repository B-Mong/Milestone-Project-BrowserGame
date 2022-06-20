// Congratulates user
function congratulateUser() {
    let win = document.getElementById("attri");
    let update = document.createElement("p");
    update.textContent = 'You collected all the fruit!'
    win.appendChild(update)
    let replay = document.createElement("button") // Adds button to replay game
    replay.setAttribute("id", "replayButton")
    replay.innerText = 'Replay!'
    replay.addEventListener("click", () => {
        location.reload()   // Refreshes the current page
    })
    win.appendChild(replay)
}

//Checks for if elementNumber == 6 then executes the winning screen
function checkInventory() {

    let element = document.getElementById("inventory");
    let numberOfFruit = element.getElementsByTagName('*').length
    let elementNumber = numberOfFruit

    let promise = new Promise((resolve, reject) => {
        if (elementNumber == 6) {
            resolve(congratulateUser())
        } else {
            setTimeout(()=>{
                reject(checkInventory())              // If this promise rejects then it will execute the function of checkInventory repeatedly until it resolves
            }, 3000)
        }
    });
}

checkInventory()