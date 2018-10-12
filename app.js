// objective: create a function that will make the .card dispear and apply a backgroundcolor to the td element
// step one: get the element apply event listener
document.getElementById("tdOne").addEventListener("mouseover", hoverTD)
// go to the html and grab the element (tdOne) and listen for the user to hover (mouseover) 

// step two: create a function
function hoverTD() {
    // declare function 
    document.getElementById("tdOne").style.background = "orange"
    // do this : once the html element is grabbed apply css styling 
    document.getElementById("tdOne").innerHTML = "100"
    // get the html element that needs to have the number values added to it    
}



