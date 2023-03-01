// MuhammadYusuf Akbarov Javascript code for hexColor Generator

const refreshButton = document.querySelector(".refresh_btn")
const container = document.querySelector(".container")

const maxColors = 18;

const generateColors = () => {
container.innerHTML = ""; //clearing container
    for (let i = 0; i < maxColors; i++) {
    // generating random hex color code
    let randomhex = Math.floor(Math.random() * 0xffffff).toString(16)
    randomhex = `#${randomhex.padStart(6, "0")}`

    //creating new li element inserting it to container
    const color = document.createElement("li")
    color.classList.add("color")
    color.innerHTML = ` <div class="rect-box" style = "background: ${randomhex}"></div>               
                     <span class="hex-value">${randomhex}</span>`;

    // adding click to copy hexcolor
    color.addEventListener("click",() => copyColor(color, randomhex));            
    container.appendChild(color);
       }
    }
    generateColors();
    const copyColor = (elem, hexVal) => {
        const colorElement = elem.querySelector(".hex-value")
        // changing hex value to text copied
        // and turning it back to original in 1 sekund
        navigator.clipboard.writeText(hexVal).then(() => {
            colorElement.innerText = "Copied";  
            setTimeout(() => colorElement.innerText = hexVal, 1000);
        }).catch(() => alert("Failed to copy the color code!"))
    }
refreshButton.addEventListener("click", generateColors);