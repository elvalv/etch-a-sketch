const grid = document.querySelector(".grid");

function createGrid() {
    let rows = 16;
    let columns = 16;
    let square = document.createElement("div");
    let rowDiv = document.createElement("div");

    for (let i = 0; i < rows; i++) {
        rowDiv = document.createElement("div");
        rowDiv.classList.add("row");
        for (let j = 0; j < columns; j++) {
            square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("mouseenter", (event) => {
                event.target.style.backgroundColor = "grey";
            });
            square.addEventListener("mouseleave", (event) => {
                event.target.style.backgroundColor = "white";
            });
            rowDiv.appendChild(square);
        }
        grid.appendChild(rowDiv);
    }
}

createGrid();