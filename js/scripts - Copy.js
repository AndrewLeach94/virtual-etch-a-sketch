// Declarations
const resetButton = document.querySelector("#new-grid");
const container = document.querySelector("#grid-container");



// Create initial 16 X 16 grid squares
while (document.querySelectorAll(".grid-square").length < 256) {
    let gridSquare = document.createElement("div");
    container.appendChild(gridSquare);
    gridSquare.classList.add("grid-square");

}

// Change grid square background on hover
for (i = 0; i < document.getElementsByClassName("grid-square").length; i++) {
    
    let gridSquare = document.getElementsByClassName("grid-square");
    gridSquare[i].addEventListener("mouseover", function(e) {
        this.style.backgroundColor = "green";
}
)
}

// Create a new grid button
resetButton.addEventListener("click", function(e) {
    
    // Build modal
    const newGridModal = document.createElement("div");
    newGridModal.classList.add("modal_reset");
    document.body.appendChild(newGridModal);

    // Ask user to customize their new grid 
     let modalHeader = document.createElement("h4");
     modalHeader.textContent = "Customize your new grid";
     newGridModal.appendChild(modalHeader);
     
     // Have user specify their width dimension

    let defineColumn = document.createElement('input');
    defineColumn.id = "input_width";
    defineColumn.type = "number";
    defineColumn.value = 16;

    let inputWidthLabel = document.createElement('label');
    inputWidthLabel.textContent = "Width: (blocks)";
    newGridModal.append(inputWidthLabel);
    inputWidthLabel.append(defineColumn);

     // have user specify their height dimension

    let inputHeight = document.createElement('input');
    inputHeight.type = "number";
    inputHeight.id = "input_height";
    inputHeight.value = 16;

    let inputHeightLabel = document.createElement("label");
    inputHeightLabel.textContent = "Height: (blocks)";
    newGridModal.appendChild(inputHeightLabel);
    inputHeightLabel.appendChild(inputHeight);

     // Add confirmation button

    let gridConfirm = document.createElement('button');
    gridConfirm.textContent = "Build new grid";
    newGridModal.appendChild(gridConfirm);

    
    // Create new custom grid when user clicks submit
    gridConfirm.addEventListener("click", function(e) {
        let gridCount = "--gridColumns";
        
        // Convert the new input value to an array so it can be converted to a string, so it can be used in the setProperty parameter
        defineColumnsArray = [defineColumn.value];
        defineColumnsString = defineColumnsArray.toString();
        userInputString = "repeat(" + defineColumnsString + ", auto)";
        document.documentElement.style.setProperty(gridCount, userInputString);

        // Generate the new grid
        while (document.querySelectorAll(".grid-square").length < (defineColumn.value * defineColumn.value)) {
            let gridSquare = document.createElement("div");
            container.appendChild(gridSquare);
            gridSquare.classList.add("grid-square");
        
        }


        // give new divs the hover effect
        for (i = 0; i < document.getElementsByClassName("grid-square").length; i++) {
    
            let gridSquare = document.getElementsByClassName("grid-square");
            gridSquare[i].addEventListener("mouseover", function(e) {
                this.style.backgroundColor = "green";
        }
        )
        }

            // reset the grid colors
            document.querySelector(".grid-square").style.backgroundColor = "--gridColorDefault";

        
    })
});



