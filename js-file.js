const grid = document.querySelector(".grid");
const ammountButton = document.querySelector(".amount");
const clearButton = document.querySelector(".clear");
// let isDown = false;
// // let currentBackgroundColor = "";

function getOpacity(rgbaString) {
    // Match numbers inside the rgba/rgb string
    const match = rgbaString.match(/[\d.]+/g);

    // If it has 4 values (rgba), return the 4th value as a float
    if (match && match.length >= 4) {
        return parseFloat(match[3]);
    }

    // Default to 1 if it is a standard rgb() string or invalid
    return 1.0;
}

function getRandomRgba(currentBackgroundColor, currentOpacity) {
    const r = Math.floor(Math.random() * 256); // 0 to 255
    const g = Math.floor(Math.random() * 256); // 0 to 255
    const b = Math.floor(Math.random() * 256); // 0 to 255
    console.log(currentOpacity);

    if (currentBackgroundColor === "") {
        return `rgba(${r}, ${g}, ${b}, ${0.1})`;
    } else if (currentOpacity === 1) {
        return `rgba(${r}, ${g}, ${b}, ${currentOpacity})`;
    } else {
        return `rgba(${r}, ${g}, ${b}, ${currentOpacity+0.1})`;
    }
}

function getRandomColor(currentBackgroundColor, currentOpacity) {
    let randomColor = getRandomRgba(currentBackgroundColor, currentOpacity);

    return randomColor;
}

function mouseEnter(event) {
    const currentBackgroundColor = event.target.style.backgroundColor;
    const currentOpacity = getOpacity(currentBackgroundColor);
    event.target.style.backgroundColor = getRandomColor(currentBackgroundColor, currentOpacity);
}

function mouseLeave(event) {
    if (isDown) {
        event.target.style.backgroundColor = currentBackgroundColor;
    } else if(currentBackgroundColor !== "white") {
        event.target.style.backgroundColor = currentBackgroundColor;
    } else {
        event.target.style.backgroundColor = "white";
    }
}

function mouseUp(event) {
    if(event.button === 0) {
        isDown = true;
        const randomColor = getRandomColor();
        currentBackgroundColor = randomColor;
        event.target.style.backgroundColor = randomColor;
    }
}

function addEvents(square) {
    square.addEventListener("mouseenter", mouseEnter);

    // square.addEventListener("mouseleave", mouseLeave);

    // square.addEventListener("mousedown", mouseUp);

    // square.addEventListener("mouseup", (event) => {
    //     isDown = false;
    // });
}

function createGrid(rowAmount, columnAmount) {
    let rows = rowAmount
    let columns = columnAmount;
    let square = document.createElement("div");
    let rowDiv = document.createElement("div");
    grid.replaceChildren();

    for (let i = 0; i < rows; i++) {
        rowDiv = document.createElement("div");
        rowDiv.classList.add("row");
        for (let j = 0; j < columns; j++) {
            square = document.createElement("div");
            square.classList.add("square");
            addEvents(square);
            rowDiv.appendChild(square);
        }
        grid.appendChild(rowDiv);
    }
}
ammountButton.addEventListener("click", () => {
    let amount = prompt("How many squares on each side?");
    if (amount > 100) {
        alert("Too big!");
    } else if (amount !== null) {
        createGrid(amount, amount);
    }
});

clearButton.addEventListener("click", () => {
    let allSquares = document.querySelectorAll(".square");
    allSquares.forEach(div => {
        div.style.backgroundColor = "";
    });
});

createGrid(16,16);