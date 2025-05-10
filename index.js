const container = document.querySelector(".grid-container");


const makeGrid = function(num) {
  for (let i=0; i<num; i++) {
    const row = document.createElement("div");
    row.classList.add("row")
    container.appendChild(row);
    
    for (let j=0; j<num; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      row.appendChild(cell);
    }
  }
}

makeGrid(16);

const cells = document.querySelectorAll(".cell");

cells.forEach(cell => {
  cell.addEventListener("mouseenter", () => {
    cell.classList.add("active");
  })
  
});