// Set-Up For Functions
// score is declared globally to be used over and over
var score = 0

// function to change background color of table cell
document.getElementById("tdOne").addEventListener("click", firstTD)

function firstTD() {
    // declare function to get the td element and apply these properties
    document.getElementById("tdOne").style.background = "#EAA1CC"
    // do this : once the html element is grabbed apply css styling 
    document.getElementById("tdOne").innerHTML = "<span style= 'font-size: 40px'></span>"

}
//------------function for sweetalert--------
function clickMeOne() {
    swal("This artist had a secret child: Who is", {
        content: "input",
      })
      .then((value) => {
        if( value === "Who is Drake"){
            score += 100
        }  
        document.getElementById("score1").innerHTML = score
      });
}
// everything will be be the same as above for the following cards

document.getElementById("tdTwo").addEventListener("click", secondTD)
// #2
function secondTD() {
    document.getElementById("tdTwo").style.background = "#EAA1CC"
    document.getElementById("tdTwo").innerHTML = "<span style= 'font-size: 40px'></span>"
}

function clickMeTwo() {
    swal("Write something here:", {
        content: "input",
      })
      .then((value) => {
        if( value === "Who is Jay-Z"){
            score += 100
        }  
        document.getElementById("score1").innerHTML = score
      });
}
// #3
document.getElementById("tdThree").addEventListener("click", thirdTD)

function thirdTD() {
    document.getElementById("tdThree").style.background = "#EAA1CC"
    document.getElementById("tdThree").innerHTML = "<span style= 'font-size: 40px'></span>"
}

function clickMeThree() {
    swal("Write something here:", {
        content: "input",
      })
      .then((value) => {
        if( value === "Who is Jay-Z"){
            score += 100
        }  
        document.getElementById("score1").innerHTML = score
      });
}
// #4
document.getElementById("tdFour").addEventListener("click", fourthTD)

function fourthTD() {
    document.getElementById("tdFour").style.background = "#EAA1CC"
    document.getElementById("tdFour").innerHTML = "<span style= 'font-size: 40px'></span>"
}

function clickMeFour() {
    swal("Write something here:", {
        content: "input",
      })
      .then((value) => {
        if( value === "Who is Jay-Z"){
            score += 100
        }  
        document.getElementById("score1").innerHTML = score
      });
}

