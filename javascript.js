// creating the grid elements
const grid = document.querySelector(".grid");

for (let i = 0; i < 9; i++) {
    let row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < 9; j++) {
        let cell = document.createElement("input");
        cell.type = "text";
        cell.classList.add("cell");
        cell.id = `cell-${i * 9 + j}`;
        row.appendChild(cell);
    }

    grid.appendChild(row);
}