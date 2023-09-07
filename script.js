// grid size live update
const sizeSlider = document.getElementById("sizeSlider");
const sizeValue = document.getElementById("sizeValue");

sizeSlider.addEventListener("input", () => {
    const newSize = sizeSlider.value;
    sizeValue.textContent = newSize;
});

// function to create divs
function gridCreation(size = 50) {
    const grid = document.querySelector('.grid');
    
    // Calculate the width and height of each box
    const boxSize = 500 / size;

    for (let i = 0; i < size; i++) {
        const gridCol = document.createElement('div');
        gridCol.classList.add('grid-col');
        gridCol.style.width = '500px';  // Set the column width
        gridCol.style.height = boxSize + 'px'; // Set the column height

        for (let j = 0; j < size; j++) {
            const gridRow = document.createElement('div');
            gridRow.classList.add('grid-row');
            gridRow.style.width = boxSize + 'px'; // Set the row width
            gridRow.style.height = boxSize + 'px'; // Set the row height
            gridCol.append(gridRow);
        }
        grid.append(gridCol);
    }
}
gridCreation(50)
