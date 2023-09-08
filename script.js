// grid size live update
const sizeSlider = document.getElementById("sizeSlider");
const sizeValue = document.getElementById("sizeValue");
const grid = document.querySelector('.grid');
const randomButton = document.getElementById('randomButton'); // Add this line

let isRandomMode = false; // Add this line

sizeSlider.addEventListener("input", () => {
    const newSize = sizeSlider.value;
    sizeValue.textContent = newSize;
    clearGrid();
    gridCreation(newSize);
});

// Clear the existing grid
function clearGrid() {
    grid.innerHTML = '';
}

// logic for the reset button
function resetGrid() {
    const gridCells = document.querySelectorAll('.grid-row');

    gridCells.forEach((cell) => {
        cell.style.backgroundColor = '';
    });
}

// Now reset button works
const resetButton = document.querySelector('.reset-button button');
resetButton.addEventListener('click', () => {
    resetGrid(); // Reset the grid by clearing colors
    isRandomMode = false; // Reset random mode
    randomButton.classList.remove('active'); // Remove active class from random button
});

// function to create divs
function gridCreation(size = 50) {
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
// Initial grid creation
gridCreation(50)

// Funtion to make the drawing happen
function startDraw() {
    let isDrawing = false;
    let currentColor = 'black';

    // add a event listener for mouse down event
    grid.addEventListener('mousedown', () => {
        isDrawing = true;
    })
    // Add a eventlistener to mouseup
    document.addEventListener('mouseup', () => {
        isDrawing = false;
    })

    // set a color picker
    const colorPicker = document.querySelector('input[type = "color"]')
    colorPicker.addEventListener('input', (e) => {
        currentColor = e.target.value;
    })

    const eraser = document.querySelector('.erase-button');
    eraser.addEventListener('click', () => {
        currentColor = 'white';
    })

    // Add event listener for mouse move on grid.
    grid.addEventListener('mousemove', (e) => {
        if (isDrawing) {
            // get the cell which is clicked on.
            const cell = e.target;

            // check the cell if it is part of grid or not.
            if (cell.classList.contains('grid-row')) {
                if (isRandomMode) {
                    // Change the cell background color to a new random color
                    cell.style.backgroundColor = getRandomColor();
                } else {
                    // Change the cell background color to the current color
                    cell.style.backgroundColor = currentColor;
                }
            }
        }
    })

}

startDraw();

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF'
    let color = '#'

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

// Add an event listener for the "Random" button click
randomButton.addEventListener('click', () => {
    isRandomMode = !isRandomMode; // Toggle random mode
    randomButton.classList.toggle('active'); // Toggle active class on random button
});
