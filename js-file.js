const grid = document.querySelector(".grid");
const ammountButton = document.querySelector(".amount");
let isDown = false;
let currentBackgroundColor = "";

function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function addEvents(square) {
    square.addEventListener("mouseenter", (event) => {
        if (isDown) {
            let randomColor = getRandomColor();
            event.target.style.backgroundColor = randomColor;
            currentBackgroundColor = randomColor;
        } else {
            currentBackgroundColor = event.target.style.backgroundColor;
            event.target.style.backgroundColor = "grey";
        }
    });

    square.addEventListener("mouseleave", (event) => {
        if (isDown) {
            event.target.style.backgroundColor = currentBackgroundColor;
        } else if(currentBackgroundColor !== "white") {
            event.target.style.backgroundColor = currentBackgroundColor;
        } else {
            event.target.style.backgroundColor = "white";
        }
    });

    square.addEventListener("mousedown", (event) => {
        if(event.button === 0) {
            isDown = true;
            const randomColor = getRandomColor();
            currentBackgroundColor = randomColor;
            event.target.style.backgroundColor = randomColor;
        }
    });

    square.addEventListener("mouseup", (event) => {
        isDown = false;
    });
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

createGrid(16,16);