// objective: create a function that will make the .card dispear and apply a backgroundcolor to the td element
// step one: get the element apply event listener
document.getElementById("tdOne").addEventListener("mouseover", hover)
// go to the html and grab the element (tdOne) and listen for the user to hover (mouseover) 

// step two: create a function
function hover() {
    // declare function 
    document.getElementById("tdOne").style.background = "red"
    // do this : once the html element is grabbed apply css styling 
}