//This script is only applied on the home.handlebars page


//............................night.mode...............................
const theme = () => {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var nav = document.querySelector("#nav");
    nav.classList.toggle("inverted");
}



//............................auto.text...............................
const textEl = document.getElementById('text1')
const text = "'Easy to Connect'                                            ";
let idx = 1
let speed = 200
function writeText() {
    textEl.innerText = text.slice(0, idx)
    idx++
    if(idx > text.length) {
        idx = 1
    }
    setTimeout(writeText, speed)
}

const textEl2 = document.getElementById('text2')
const text2 = "'One stop for all information, find everything you need.'                                                                                        ";
let idx2 = 1
let speed2 = 100
function writeText2() {
    textEl2.innerText = text2.slice(0, idx2)
    idx2++
    if(idx2 > text2.length) {
        idx2 = 1
    }
    setTimeout(writeText2, speed2)
}

writeText2()
writeText()





//..........................................end........................................................
