// store images as variables
const green = document.querySelector("#gTail")
const blue = document.querySelector("#bTail")
const pink = document.querySelector("#piTail")
const purple = document.querySelector("#puTail")
const yellow = document.querySelector("#yTail")
const silver = document.querySelector("#sTail")

// add event listeners to listen for clicks on the colors
document.querySelector("#green").addEventListener("click", makeGreen)
document.querySelector("#blue").addEventListener("click", makeBlue)
document.querySelector("#pink").addEventListener("click", makePink)
document.querySelector("#purple").addEventListener("click", makePurple)
document.querySelector("#yellow").addEventListener("click", makeYellow)

// if they pick a color, display image and hide others
function makeGreen() {
    blue.classList.add("hidden")
    pink.classList.add("hidden")
    purple.classList.add("hidden")
    yellow.classList.add("hidden")
    silver.classList.add("hidden")

    green.classList.toggle("hidden")

    // if green is toggled off, make the tail silver again (base color)
    if (green.classList.contains("hidden")) {
        silver.classList.remove("hidden")
    } else {
        silver.classList.add("hidden")
    }
}

function makeBlue() {
    green.classList.add("hidden")
    pink.classList.add("hidden")
    purple.classList.add("hidden")
    yellow.classList.add("hidden")
    silver.classList.add("hidden")

    blue.classList.toggle("hidden")

    if (blue.classList.contains("hidden")) {
        silver.classList.remove("hidden")
    } else {
        silver.classList.add("hidden")
    }
}

function makePink() {
    green.classList.add("hidden")
    blue.classList.add("hidden")
    purple.classList.add("hidden")
    yellow.classList.add("hidden")
    silver.classList.add("hidden")

    pink.classList.toggle("hidden")

    if (pink.classList.contains("hidden")) {
        silver.classList.remove("hidden")
    } else {
        silver.classList.add("hidden")
    }
}

function makePurple() {
    green.classList.add("hidden")
    blue.classList.add("hidden")
    pink.classList.add("hidden")
    yellow.classList.add("hidden")
    silver.classList.add("hidden")

    purple.classList.toggle("hidden")

    if (purple.classList.contains("hidden")) {
        silver.classList.remove("hidden")
    } else {
        silver.classList.add("hidden")
    }
}

function makeYellow() {
    green.classList.add("hidden")
    blue.classList.add("hidden")
    pink.classList.add("hidden")
    purple.classList.add("hidden")
    silver.classList.add("hidden")

    yellow.classList.toggle("hidden")

    if (yellow.classList.contains("hidden")) {
        silver.classList.remove("hidden")
    } else {
        silver.classList.add("hidden")
    }
}
