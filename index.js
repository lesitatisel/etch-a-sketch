const container = document.querySelector(".grid-container");
const sizeBtn = document.querySelector(".sizeBtn");


const makeGrid = function(num=16) {
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

const clearGrid = function() {
  container.innerHTML = "";
}

const draw = function () {
  const cells = document.querySelectorAll(".cell");
  cells.forEach(cell => {
    cell.addEventListener("mouseenter", () => {
      cell.classList.add("active");
    })
  });
}

makeGrid(16);
draw();

sizeBtn.addEventListener("click", () => {
  let num = parseInt(prompt("Enter the size of the grid: "));

  if (num >= 100) {
    num = 100;
  }

  clearGrid();
  makeGrid(num);
  draw();
})
