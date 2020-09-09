// Declarations
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
        this.style.backgroundColor = "#ED6A5A";
}
)
}

// Build sidebar
let sideBar = document.querySelector("#sidebar");

const newGridModal = document.createElement("div");
newGridModal.classList.add("modal_reset");
sideBar.appendChild(newGridModal);

// Ask user to customize their new grid 
let modalHeader = document.createElement("h4");
modalHeader.textContent = "Customize your grid";
newGridModal.appendChild(modalHeader);
    
// Have user specify their width dimension

let defineColumn = document.createElement('input');
defineColumn.id = "input_slider";
defineColumn.type = "range";
defineColumn.min = 16;
defineColumn.max = 64;
defineColumn.step = 16;
defineColumn.value = 16;


let rangeLabel = document.createElement('label');
rangeLabel.textContent = "Dimensions: " + defineColumn.value + " X " + defineColumn.value;
newGridModal.append(rangeLabel);
rangeLabel.append(defineColumn);

// Update the value of the slider 

defineColumn.addEventListener("change", () => {
    rangeLabel.textContent = "Dimensions: " + defineColumn.value + " X " + defineColumn.value;
    newGridModal.insertBefore(rangeLabel, gridConfirm);
    rangeLabel.append(defineColumn);

});



// Add confirmation button

let gridConfirm = document.createElement('button');
gridConfirm.textContent = "Build new grid";
newGridModal.appendChild(gridConfirm);


// Create new custom grid when user clicks submit -----------------------------------------
gridConfirm.addEventListener("click", () => {
    
    // remove ALL of the previous grid squares
    while (document.getElementsByClassName("grid-square").length) {
        let gridSquare = document.querySelector(".grid-square");
        container.removeChild(container.lastChild);
    }

    // Add back in the new grid squares
    let userInput = document.querySelector("#input_slider").value;
    
    while (document.querySelectorAll(".grid-square").length < (userInput * userInput)) {
        let gridSquare = document.createElement("div");
        container.appendChild(gridSquare);
        gridSquare.classList.add("grid-square");
    
    }
    
    // // Change all new grid square background on hover
    for (i = 0; i < document.getElementsByClassName("grid-square").length; i++) {
        
        let gridSquare = document.getElementsByClassName("grid-square");
        gridSquare[i].addEventListener("mouseover", function(e) {
            this.style.backgroundColor = "#ED6A5A";
    }
    )
    }        
    

    // // Convert the user's input value to an array so it can be converted to a string, so it can be used as the setProperty parameter to change the CSS grid
    let gridCount = "--gridColumns";
    
    defineColumnsArray = [defineColumn.value];
    defineColumnsString = defineColumnsArray.toString();
    userInputString = "repeat(" + defineColumnsString + ", auto)";
    document.documentElement.style.setProperty(gridCount, userInputString);
    
})

// Create a reset button
let resetButton = document.createElement("button");
resetButton.id = "button_reset";
resetButton.textContent = "Reset grid";
newGridModal.appendChild(resetButton);

resetButton.addEventListener("click", function(e) {
    
    for (i = 0; i < document.getElementsByClassName("grid-square").length; i++) {
        let gridSquare = document.getElementsByClassName("grid-square");
        gridSquare[i].style.backgroundColor = "#FDEDD0";
    }

})



