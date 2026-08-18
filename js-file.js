const grid = document.querySelector(".grid");
const ammountButton = document.querySelector(".amount");

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
ammountButton.addEventListener("click", () => {
    let amount = prompt("How many squares on each side?");
    if (amount > 100) {
        alert("Too big!");
    } else if (amount !== null) {
        createGrid(amount, amount);
    }
});

createGrid(16,16);