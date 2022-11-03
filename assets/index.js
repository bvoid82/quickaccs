
document.getElementById("lol").onclick = function() {yes()};
var bingo;

function yes() {
 var stuff;
if (document.getElementById("text").value.startsWith("https://") || document.getElementById("text").value.startsWith("http://")) {
  stuff = new URL(document.getElementById("text").value)
} else {
  stuff = new URL(`https://${document.getElementById("text").value}`)
 }

window.location.assign(stuff)
}

document.getElementById("text").addEventListener("keypress", (key) => {
    if (key.key == "Enter") {
        
       yes() 
       
    }
})

document.getElementById("body").addEventListener("keypress", (key) => {
    if (key.shiftKey == true) {
        bingo = bingo + key.key
    }
    if (bingo.includes("DEVMODE")){
        window.location.replace("/developer.html")
    } else if (bingo.includes("BINGO")) {
     window.location.assign("/assets/momazos.mp4")
    }
})
