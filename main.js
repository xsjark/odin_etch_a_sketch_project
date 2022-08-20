const container = document.querySelector("#container");

const renderGrid = (n=16) => {
  for (let i = 1; i <= n ** 2; i++) {
    document.documentElement.style.setProperty("--rowscols", n);
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.setAttribute("id", i);
    gridItem.textContent = i;
    container.appendChild(gridItem);
  }
};

const setSquares = () => {
  let squares = parseInt(prompt("How many squares?"));
  if (typeof squares === "number") {
    n = squares;
    renderGrid(squares);
  } else {
    alert("Enter a number");
  }
};

renderGrid()