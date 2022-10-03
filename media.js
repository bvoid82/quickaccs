
document.getElementById("lol").onclick = function() {yes()};


function yes() {
  var stuff = new URL(`https://forms.gle/D1tFSvBKwsL5YLbM8`)
  window.location.assign(stuff)
}



document.getElementById("body").addEventListener("keydown", (key) => {
if (key.keyCode == 27) {
    window.location.replace("/")
}
})