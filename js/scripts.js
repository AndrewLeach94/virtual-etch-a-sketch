// Declarations
const container = document.querySelector("#grid-container");

// Test for mobile device
var clickEvent = function() {
    if ('ontouchstart' in document.documentElement === true) {
        return "touchmove";
    }

    else {
        return "mouseover";
    }

  };
  

// Create initial 16 X 16 grid squares
while (document.querySelectorAll(".grid-square").length < 256) {
    let gridSquare = document.createElement("div");
    container.appendChild(gridSquare);
    gridSquare.classList.add("grid-square");

}

// Change grid square background on hover
for (i = 0; i < document.getElementsByClassName("grid-square").length; i++) {
    
    let gridSquare = document.getElementsByClassName("grid-square");
    gridSquare[i].addEventListener(clickEvent(), function(e) {
        this.style.backgroundColor = "var(--colorGridSquareHover)";
}
)
}

// Build sidebar
let sideBar = document.querySelector("#sidebar");

const newGrid = document.createElement("div");
newGrid.classList.add("modal_reset");
sideBar.prepend(newGrid);

// Ask user to customize their new grid 
let modalHeader = document.createElement("h4");
modalHeader.textContent = "Customize your grid";
newGrid.appendChild(modalHeader);
    
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
newGrid.append(rangeLabel);
rangeLabel.append(defineColumn);

// Update the value of the slider 

defineColumn.addEventListener("input", () => {
    rangeLabel.textContent = "Dimensions: " + defineColumn.value + " X " + defineColumn.value;
    newGrid.insertBefore(rangeLabel, gridConfirm);
    rangeLabel.append(defineColumn);

});



// Add confirmation button

let gridConfirm = document.createElement('button');
gridConfirm.textContent = "Build new grid";
newGrid.appendChild(gridConfirm);


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
    if (document.querySelector("#theme_skittles").checked == true) {
            // Create random colored squares
        for (i = 0; i < document.getElementsByClassName("grid-square").length; i++) {
            
            let gridSquare = document.getElementsByClassName("grid-square");
            gridSquare[i].addEventListener("mouseover", function(e) {
                this.style.backgroundColor = randomColor();
        }
        )
        }        

        }

    else {
        for (i = 0; i < document.getElementsByClassName("grid-square").length; i++) {
        
            let gridSquare = document.getElementsByClassName("grid-square");
            gridSquare[i].addEventListener("mouseover", function(e) {
                this.style.backgroundColor = "var(--colorGridSquareHover)";
        }
        )
        }            
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
newGrid.appendChild(resetButton);

resetButton.addEventListener("click", function(e) {
    
    for (i = 0; i < document.getElementsByClassName("grid-square").length; i++) {
        let gridSquare = document.getElementsByClassName("grid-square");
        gridSquare[i].style.backgroundColor = "var(--colorGridSquare)";
    }

})

// ----------------------------Themes Swappers-----------------------------------------------------------

const defaultTheme = document.querySelector("#theme_default");

defaultTheme.addEventListener("change", () => {
    document.body.style.setProperty("--body_background", "#FDEDD06B");
    document.body.style.setProperty("--font_dark", "var(--font_dark)");
    document.body.style.setProperty("--colorGridSquare", "#FDEDD0")
    document.body.style.setProperty("--colorGridSquareHover", "#ED6A5A")
    document.body.style.setProperty("--button_primary", "#ED6A5A")
    document.body.style.setProperty("--button_primary-hover", "#FF6C5B")
    document.body.style.setProperty("--button_secondary", "#FFE8E4")

    //Override skittles theme if previously applied

    for (i = 0; i < document.getElementsByClassName("grid-square").length; i++) {
    
        let gridSquare = document.getElementsByClassName("grid-square");
        gridSquare[i].addEventListener("mouseover", function(e) {
            this.style.backgroundColor = "var(--colorGridSquareHover)";
    }
    )
    }        
    
    for (i = 0; i < document.getElementsByClassName("grid-square").length; i++) {
        
        let gridSquare = document.getElementsByClassName("grid-square");
        
        if (gridSquare[i].style.backgroundColor != "var(--colorGridSquare)" && gridSquare[i].style.backgroundColor != "" ) {
            gridSquare[i].style.setProperty("background-color", "var(--colorGridSquareHover)")
        }

    }        
    
})


const krakenTheme = document.querySelector("#theme_kraken");

krakenTheme.addEventListener("change", () => {
    document.body.style.setProperty("--body_background", "#002240e6");
    document.body.style.setProperty("--font_dark", "var(--font_light)");
    document.body.style.setProperty("--colorGridSquare", "#002240")
    document.body.style.setProperty("--colorGridSquareHover", "#40E0D0")
    document.body.style.setProperty("--button_primary", "#40E0D0")
    document.body.style.setProperty("--button_primary-hover", "#3EE8D7")
    document.body.style.setProperty("--button_secondary", "#40E0D042")

    //Override skittles theme if previously applied

    for (i = 0; i < document.getElementsByClassName("grid-square").length; i++) {
    
        let gridSquare = document.getElementsByClassName("grid-square");
        gridSquare[i].addEventListener("mouseover", function(e) {
            this.style.backgroundColor = "var(--colorGridSquareHover)";
    }
    )
    }        
    
    for (i = 0; i < document.getElementsByClassName("grid-square").length; i++) {
        
        let gridSquare = document.getElementsByClassName("grid-square");
        
        if (gridSquare[i].style.backgroundColor != "var(--colorGridSquare)" && gridSquare[i].style.backgroundColor != "" ) {
            gridSquare[i].style.setProperty("background-color", "var(--colorGridSquareHover)")
        }

    }        
    
})

const spaceTheme = document.querySelector("#theme_space");

spaceTheme.addEventListener("change", () => {
    document.body.style.setProperty("--body_background", "#271338");
    document.body.style.setProperty("--font_dark", "var(--font_light)");
    document.body.style.setProperty("--colorGridSquare", "#0F0D3E")
    document.body.style.setProperty("--colorGridSquareHover", "#A74B94")
    document.body.style.setProperty("--button_primary", "#A74B94")
    document.body.style.setProperty("--button_primary-hover", "#A766A8")
    document.body.style.setProperty("--button_secondary", "#EEBCEF")

    //Override skittles theme if previously applied

    for (i = 0; i < document.getElementsByClassName("grid-square").length; i++) {
    
        let gridSquare = document.getElementsByClassName("grid-square");
        gridSquare[i].addEventListener("mouseover", function(e) {
            this.style.backgroundColor = "var(--colorGridSquareHover)";
    }
    )
    }        
    
    for (i = 0; i < document.getElementsByClassName("grid-square").length; i++) {
        
        let gridSquare = document.getElementsByClassName("grid-square");
        
        if (gridSquare[i].style.backgroundColor != "var(--colorGridSquare)" && gridSquare[i].style.backgroundColor != "" ) {
            gridSquare[i].style.setProperty("background-color", "var(--colorGridSquareHover)")
        }

    }        
    
})

const pirateTheme = document.querySelector("#theme_pirate");

pirateTheme.addEventListener("change", () => {
    document.body.style.setProperty("--body_background", "#A7CCED");
    document.body.style.setProperty("--font_dark", "var(--font_dark)");
    document.body.style.setProperty("--colorGridSquare", "#774E24")
    document.body.style.setProperty("--colorGridSquareHover", "#EDAE49")
    document.body.style.setProperty("--button_primary", "#774E24")
    document.body.style.setProperty("--button_primary-hover", "#9F6F3D")
    document.body.style.setProperty("--button_secondary", "#774E2457")

    //Override skittles theme if previously applied

    for (i = 0; i < document.getElementsByClassName("grid-square").length; i++) {
    
        let gridSquare = document.getElementsByClassName("grid-square");
        gridSquare[i].addEventListener("mouseover", function(e) {
            this.style.backgroundColor = "var(--colorGridSquareHover)";
    }
    )
    }        
    
    for (i = 0; i < document.getElementsByClassName("grid-square").length; i++) {
        
        let gridSquare = document.getElementsByClassName("grid-square");
        
        if (gridSquare[i].style.backgroundColor != "var(--colorGridSquare)" && gridSquare[i].style.backgroundColor != "" ) {
            gridSquare[i].style.setProperty("background-color", "var(--colorGridSquareHover)")
        }

    }        
    
})

const wireframeTheme = document.querySelector("#theme_wireframe");

wireframeTheme.addEventListener("change", () => {
    document.body.style.setProperty("--body_background", "#B0B0B2");
    document.body.style.setProperty("--font_dark", "var(--font_dark)");
    document.body.style.setProperty("--colorGridSquare", "#C8C7C7")
    document.body.style.setProperty("--colorGridSquareHover", "#848484")
    document.body.style.setProperty("--button_primary", "#848484")
    document.body.style.setProperty("--button_primary-hover", "#939191")
    document.body.style.setProperty("--button_secondary", "#8484844d")

    //Override skittles theme if previously applied
    
    for (i = 0; i < document.getElementsByClassName("grid-square").length; i++) {
        
        let gridSquare = document.getElementsByClassName("grid-square");
        gridSquare[i].addEventListener("mouseover", function(e) {
            this.style.backgroundColor = "var(--colorGridSquareHover)";
    }
    )
    }        
    
    for (i = 0; i < document.getElementsByClassName("grid-square").length; i++) {
        
        let gridSquare = document.getElementsByClassName("grid-square");
        
        if (gridSquare[i].style.backgroundColor != "var(--colorGridSquare)" && gridSquare[i].style.backgroundColor != "" ) {
            gridSquare[i].style.setProperty("background-color", "var(--colorGridSquareHover)")
        }

    }        

})

const skittlesTheme = document.querySelector("#theme_skittles");

// generate random color
function randomColor() {
    let color = "#" + Math.floor(Math.random()*16777215).toString(16);
    return color;
}

skittlesTheme.addEventListener("change", () => {
    document.body.style.setProperty("--body_background", "#f2f2f2");
    document.body.style.setProperty("--font_dark", "var(--font_dark)");
    document.body.style.setProperty("--colorGridSquare", "white");
    document.body.style.setProperty("--colorGridSquareHover", randomColor());
    document.body.style.setProperty("--button_primary", "red");
    document.body.style.setProperty("--button_primary-hover", "#f73e3e");
    document.body.style.setProperty("--button_secondary", "#ff000038");

    // Create random colored squares
    for (i = 0; i < document.getElementsByClassName("grid-square").length; i++) {
        
        let gridSquare = document.getElementsByClassName("grid-square");
        gridSquare[i].addEventListener("mouseover", function(e) {
            this.style.backgroundColor = randomColor();
    }
    )
    }        
})















