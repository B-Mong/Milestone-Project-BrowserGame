function createMuteButton(){
    let p = document.getElementById("mute");
    let content = document.createElement("p")
    content.textContent = "Mute";
    content.setAttribute("id", "mutebutton")
    content.addEventListener('click', ()=>{
        // Insert code to mute audio
    })
    p.appendChild(content);
}
createMuteButton()