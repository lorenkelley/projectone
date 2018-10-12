// objective: create a function that will make the .card dispear and apply a backgroundcolor to the td element
// step one: get the element apply event listener
document.getElementById("tdOne").addEventListener("click", hoverTD)
// go to the html and grab the element (tdOne) and listen for the user to hover (mouseover) 

// step two: create a function
function hoverTD() {
    // declare function 
    document.getElementById("tdOne").style.background = "#EAA1CC"
    // do this : once the html element is grabbed apply css styling 
    document.getElementById("tdOne").innerHTML = "WHAT IS THE MOVIE"
    // get the html element that needs to have the number values added to it    
}
function clickMe(){
    document.getElementById("two").innerHTML = "HELLO"
}
