// objective: create a function that will make the .card dispear and apply a backgroundcolor to the td element
// step one: get the element apply event listener
document.getElementById("tdOne").addEventListener("click", firstTD)
// go to the html and grab the element (tdOne) and listen for the user to hover (mouseover) 

// step two: create a function to apply background color and and a button to the html element
function firstTD() {
    // declare function 
    document.getElementById("tdOne").style.background = "plum"
    // do this : once the html element is grabbed apply css styling 
    document.getElementById("tdOne").innerHTML = "<span style= 'font-size: 40px'></span>"
    
    // $('#tdOne').append(`<div>
    // <div><button onClick="clicked()">Button 2</button></div>
    // </div>`)
    //go get the element and add a button to it 
}
document.getElementById("tdTwo").addEventListener("click", secondTD)

function secondTD() {
    // declare function 
    document.getElementById("tdTwo").style.background = "#EAA1CC"
    // do this : once the html element is grabbed apply css styling 
    document.getElementById("tdTwo").innerHTML = "<span style= 'font-size: 40px'></span>"

    // $('#tdTwo').append(`<div>
    //  <div><button onClick="clicked()">Button 2</button></div>
    //  </div>`)
}
document.getElementById("tdThree").addEventListener("click", thirdTD)

function thirdTD() {
    // declare function 
    document.getElementById("tdThree").style.background = "#EAA1CC"
    // do this : once the html element is grabbed apply css styling 
    document.getElementById("tdThree").innerHTML = "<span style= 'font-size: 40px'></span>"

    // $('#tdTwo').append(`<div>
    //  <div><button onClick="clicked()">Button 2</button></div>
    //  </div>`)
}
document.getElementById("tdFour").addEventListener("click", fourTD)

function fourTD() {
    // declare function 
    document.getElementById("tdFour").style.background = "#EAA1CC"
    // do this : once the html element is grabbed apply css styling 
    document.getElementById("tdFour").innerHTML = "<span style= 'font-size: 40px'></span>"

    // $('#tdTwo').append(`<div>
    //  <div><button onClick="clicked()">Button 2</button></div>
    //  </div>`)
}
// ------------------------------------------------------------------------------------------
// function for question and score
// #1
var score = 0
function questionOne () {
    
    var person = prompt("This Artist Dropped A Surprise Album With His Wife")

    if( person === "Who is Jay-Z"){
        score += 100
    } 
    document.getElementById("score1").innerHTML = score
}
//#2
function questionTwo () {
    
    var person = prompt("The Latest Iphone To Come Out: 222 - rgh -jjjk")

    if( person === "What is the iphone 20"){
        score += 100
    } 
    document.getElementById("score1").innerHTML = score
}
//#3
function questionThree () {
    
    var person = prompt("The Latest Iphone To Come Out: 222 - rgh -jjjk")

    if( person === "What is the iphone 20"){
        score += 100
    } 
    document.getElementById("score1").innerHTML = score
}
//#4
function questionFour () {
    
    var person = prompt("The Latest Iphone To Come Out: 222 - rgh -jjjk")

    if( person === "What is the iphone 20"){
        score += 100
    } 
    document.getElementById("score1").innerHTML = score
}