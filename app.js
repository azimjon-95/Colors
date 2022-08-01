const count = document.querySelector(".count")
const rang = document.querySelector(".rang")
const container = document.querySelector(".container")
const rgb = document.querySelector(".rgb")
const code = document.querySelector(".code")
const plus= document.querySelector(".plus")
const minus = document.querySelector(".minus")
const sidebar = document.querySelector(".sidebar")
const back = document.querySelector(".back")


let counter = 0

function inc() {
    if (counter <= 0) {

    }
    if (counter <= 0) {
        container.style.background = "#0000ff";
        rang.innerHTML = 'Blue';
        code.innerHTML = "#0000ff";
        rgb.innerHTML = "RGB: 0, 0, 255";
    }else if (counter <= 1) {
        container.style.background = "#f60100";
        rang.innerHTML = 'Red';
        code.innerHTML = "#f60100";
        rgb.innerHTML = "RGB: 246, 1, 0";
    }else if (counter <= 2) {
        container.style.background = "#8e85ee";
        rang.innerHTML = 'Window grey';
        code.innerHTML = "#8e85ee";
        rgb.innerHTML = "RGB: 142, 133, 238";
    }else if (counter <= 3) {
        container.style.background = "#ff33c0";
        rang.innerHTML = 'Pink';
        code.innerHTML = '#ff33c0';
        rgb.innerHTML = "RGB: 255, 51, 192";
    }else if (counter <= 4) {
        container.style.background = "#ffff00";
        rang.innerHTML = 'Yellow';
        code.innerHTML = '#ffff00';
        rgb.innerHTML = "RGB: 255, 255, 0";
    }else if (counter <= 5) {
        container.style.background = "#c55a11";
        rang.innerHTML = 'Brown';
        code.innerHTML = '#c55a11';
        rgb.innerHTML = "RGB: 197, 90, 17";
    }else if (counter <= 6) {
        container.style.background = "#000000";
        rang.innerHTML = 'Black';
        code.innerHTML = '#000000';
        rgb.innerHTML = "RGB: 0, 0, 0";
        container.style.border = "1px solid rgb(62, 62, 62)";
    }else if (counter <= 7) {
        container.style.background = "#fff";
        rang.innerHTML = 'White';
        code.innerHTML = '#ffffff';
        rgb.innerHTML = "RGB: 255, 255, 255";
        plus.style.border = "1px solid rgb(62, 62, 62)";
        minus.style.border = "1px solid rgb(62, 62, 62)";
        // container.style.border = 'none'
    }else if (counter <= 8) {
        container.style.background = "#0b930e"
        rang.innerHTML = 'Green';
        code.innerHTML = '#ob930e';
        rgb.innerHTML = "RGB: 128, 128, 128";
        container.style.border = 'none'
        plus.style.border = 'none';
        minus.style.border = 'none';
    }else if (counter <= 9) {
        container.style.background = "#808080";
        rang.innerHTML = 'Gray';
        code.innerHTML = "#808080";
        rgb.innerHTML = "RGB: 128, 128, 128";
    }else if (counter <= 10) {
        container.style.background = "#f0ffff";
        rang.innerHTML = 'Azure';
        code.innerHTML = "#f0ffff";
        rgb.innerHTML = "RGB: 0, 0, 0";
    }else if (counter <= 11) {
        container.style.background = "#8cee90";
        rang.innerHTML = 'Light green';
        code.innerHTML = '#8cee90';
        rgb.innerHTML = "RGB: 140, 238, 144";
    }else if (counter <= 12) {
        container.style.background = "#800000";
        rang.innerHTML = 'Maroom';
        code.innerHTML = '#800000';
        rgb.innerHTML = "RGB: 128, 0, 0";
    }else if (counter <= 13) {
        container.style.background = "#00ff00";
        rang.innerHTML = 'Lime';
        code.innerHTML = '#00ff00';
        rgb.innerHTML = "RGB: 0, 255, 0";
    }else if (counter <= 14) {
        container.style.background = "#f5deb3"
        rang.innerHTML = 'Wheat';
        code.innerHTML = '#f5deb3'
        rgb.innerHTML = "RGB: 245, 222, 179";
    }else if (counter <= 15) {
        container.style.background = "#daa520"
        rang.innerHTML = 'Golden';
        code.innerHTML = '#dee520'
        rgb.innerHTML = "RGB: 218, 165, 32";
    }else if (counter <= 16) {
        container.style.background = "#fa8072";
        rang.innerHTML = 'Salmon';
        code.innerHTML = "#fa8072";
        rgb.innerHTML = "RGB: 250, 128, 114";
    }else if (counter <= 17) {
        container.style.background = "#7b3f00"
        rang.innerHTML = 'Chacolate';
        code.innerHTML = "#7b3f00";
        rgb.innerHTML = "RGB: 123, 63, 0";
    }else if (counter <= 18) {
        container.style.background = "#9e745b"
        rang.innerHTML = 'Bronze';
        code.innerHTML = "#9e745b";
        rgb.innerHTML = "RGB: 158, 116, 91";
    }else if (counter <= 19) {
        container.style.background = "#002060"
        rang.innerHTML = 'Dark blue'
        code.innerHTML = "#002060";
        rgb.innerHTML = "RGB: 0, 32, 96";
    }else if (counter <= 20) {
        container.style.background = "#00ff7f";
        rang.innerHTML = 'Spring green';
        code.innerHTML = "#00ff7f";
        rgb.innerHTML = "RGB: 0, 255, 127";
    }else if (counter <= 21) {
        container.style.background = "#40e0d0";
        rang.innerHTML = 'Turquoise';
        code.innerHTML = "#40e0d0";
        rgb.innerHTML = "RGB: 60, 224, 208";
    }else if (counter <= 22) {
        container.style.background = "#00ffff";
        rang.innerHTML = 'Aque';
        code.innerHTML = "#00ffff";
        rgb.innerHTML = "RGB: 0, 255, 255";
    }else if (counter <= 23) {
        container.style.background = "#dd133b";
        rang.innerHTML = 'Crimson';
        code.innerHTML = "#dd133b";
        rgb.innerHTML = "RGB: 221, 19, 59";
    }else if (counter <= 24) {
        container.style.background = "#c0c0c0";
        rang.innerHTML = 'Silver';
        code.innerHTML = "#c0c0c0";
        rgb.innerHTML = "RGB: 192, 192, 192";
    }else if (counter <= 25) {
        container.style.background = "#c00000";
        rang.innerHTML = 'Dark red';
        code.innerHTML = "#c00000";
        rgb.innerHTML = "RGB: 192, 0, 0";
    }else if (counter <= 26) {
        container.style.background = "#000080";
        rang.innerHTML = 'Navy';
        code.innerHTML = "#000080";
        rgb.innerHTML = "RGB: 0, 0, 128";
    }else if (counter <= 27) {
        container.style.background = "#da70d6";
        rang.innerHTML = 'Orchid';
        code.innerHTML = "#da70d6";
        rgb.innerHTML = "RGB: 118, 112, 214";
    }else if (counter <= 28) {
        container.style.background = "#008080";
        rang.innerHTML = 'Teal';
        code.innerHTML = "#008080";
        rgb.innerHTML = "RGB: 0, 128, 128";
    }else if (counter <= 29 ) {
        container.style.background = "#cc0099";
        rang.innerHTML = 'Purple';
        code.innerHTML = "#cc0099";
        rgb.innerHTML = "RGB: 204, 0, 153";
    }else if (counter <= 30) {
        container.style.background = "#fa4400";
        rang.innerHTML = 'Orange';
        code.innerHTML = "#fa4400";
        rgb.innerHTML = "RGB: 250, 68, 0";
    }else if (counter >= 0) {
        return length -1;
    }
    counter++ 
    count.innerHTML = counter
}
function dec() {
    if (counter <= 0) {
       return
    } 
    counter = 0
    count.innerHTML = counter
}


function sideb() {
    sidebar.style.display = 'block'
}
function sidebBack() {
    sidebar.style.display = 'none'
}