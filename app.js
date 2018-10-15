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

}
document.getElementById("tdThree").addEventListener("click", thirdTD)

function thirdTD() {
    // declare function 
    document.getElementById("tdThree").style.background = "#EAA1CC"
    // do this : once the html element is grabbed apply css styling 
    document.getElementById("tdThree").innerHTML = "<span style= 'font-size: 40px'></span>"
}
document.getElementById("tdFour").addEventListener("click", fourTD)

function fourTD() {
    // declare function 
    document.getElementById("tdFour").style.background = "#EAA1CC"
    // do this : once the html element is grabbed apply css styling 
    document.getElementById("tdFour").innerHTML = "<span style= 'font-size: 40px'></span>"
}
document.getElementById("tdFive").addEventListener("click", fiveTD)

function fiveTD() {
    // declare function 
    document.getElementById("tdFive").style.background = "orange"
    // do this : once the html element is grabbed apply css styling 
    document.getElementById("tdFive").innerHTML = "<span style= 'font-size: 40px'></span>"
}
document.getElementById("tdSix").addEventListener("click", sixTD)

function sixTD() {
    // declare function 
    document.getElementById("tdSix").style.background = "hotpink"
    // do this : once the html element is grabbed apply css styling 
    document.getElementById("tdSix").innerHTML = "<span style= 'font-size: 40px'></span>"
}
// ------------------------------------------------------------------------------------------
// function for question and score
// $100
var score = 0
function questionOne () {
    
    var person = prompt("This Artist Dropped A Surprise Album With His Wife")

    if( person === "Who is Jay-Z"){
        score += 100
    } 
    document.getElementById("score1").innerHTML = score
}
function questionTwo () {
    
    var person = prompt("The Latest Iphone To Come Out: 222 - rgh -jjjk")

    if( person === "What is the iphone 20"){
        score += 100
    } 
    document.getElementById("score1").innerHTML = score
}
function questionThree () {
    
    var person = prompt("The Latest Iphone To Come Out: 222 - rgh -jjjk")

    if( person === "What is the iphone 20"){
        score += 100
    } 
    document.getElementById("score1").innerHTML = score
}
function questionFour () {
    
    var person = prompt("The Latest Iphone To Come Out: 222 - rgh -jjjk")

    if( person === "What is the iphone 20"){
        score += 100
    } 
    document.getElementById("score1").innerHTML = score
}
// -----------------------------------------------------------------------------------
// $200
function questionFive () {
    
    var person = prompt("The Latest Iphone To Come Out: 222 - rgh -jjjk")

    if( person === "What is the iphone 20"){
        score += 200
    } 
    document.getElementById("score1").innerHTML = score
}
function questionSix () {
    
    var person = prompt("The Latest Iphone To Come Out: 222 - rgh -jjjk")

    if( person === "What is the iphone 20"){
        score += 200
    } 
    document.getElementById("score1").innerHTML = score
}
function questionSeven () {
    
    var person = prompt("The Latest Iphone To Come Out: 222 - rgh -jjjk")

    if( person === "What is the iphone 20"){
        score += 200
    } 
    document.getElementById("score1").innerHTML = score
}
function questionEight () {
    
    var person = prompt("The Latest Iphone To Come Out: 222 - rgh -jjjk")

    if( person === "What is the iphone 20"){
        score += 200
    } 
    document.getElementById("score1").innerHTML = score
}