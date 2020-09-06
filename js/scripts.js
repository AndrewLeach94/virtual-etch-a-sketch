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

     // Add confirmation button

    let gridConfirm = document.createElement('button');
    gridConfirm.textContent = "Build new grid";
    newGridModal.appendChild(gridConfirm);


    // Create new custom grid when user clicks submit -----------------------------------------
    gridConfirm.addEventListener("click", function(e) {
        
        // remove ALL of the previous grid squares
        while (document.getElementsByClassName("grid-square").length) {
            let gridSquare = document.querySelector(".grid-square");
            container.removeChild(container.lastChild);
        }

        // Add back in the new grid squares
        let userInput = document.querySelector("#input_width").value;
        
        while (document.querySelectorAll(".grid-square").length < (userInput * userInput)) {
            let gridSquare = document.createElement("div");
            container.appendChild(gridSquare);
            gridSquare.classList.add("grid-square");
        
        }
        
        // // Change all new grid square background on hover
        for (i = 0; i < document.getElementsByClassName("grid-square").length; i++) {
            
            let gridSquare = document.getElementsByClassName("grid-square");
            gridSquare[i].addEventListener("mouseover", function(e) {
                this.style.backgroundColor = "green";
        }
        )
        }        
        

        // // Convert the user's input value to an array so it can be converted to a string, so it can be used as the setProperty parameter to change the CSS grid
        let gridCount = "--gridColumns";
        
        defineColumnsArray = [defineColumn.value];
        defineColumnsString = defineColumnsArray.toString();
        userInputString = "repeat(" + defineColumnsString + ", auto)";
        document.documentElement.style.setProperty(gridCount, userInputString);
        
        // Remove the modal on completion
        newGridModal.remove();
    })
});



