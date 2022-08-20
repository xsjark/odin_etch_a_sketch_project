
const n = 16
const container = document.querySelector("#container");

for(let i = 1; i <= n**2; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.setAttribute("id", i);
    gridItem.textContent = i;
    container.appendChild(gridItem)
}
