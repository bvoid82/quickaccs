
document.getElementById("lol").onclick = function() {yes()};

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

document.getElementById("body").addEventListener("keydown", (key) => {
if (key.keyCode == 27) {
    window.location.replace("/")
}
})