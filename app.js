// objective: create a function that will make the .card dispear and apply a backgroundcolor to the td element
// step one: get the element apply event listener
document.getElementById("tdOne").addEventListener("click", firstTD)
// go to the html and grab the element (tdOne) and listen for the user to hover (mouseover) 

// step two: create a function to apply background color and and a button to the html element
function firstTD() {
    // declare function 
    document.getElementById("tdOne").style.background = "#EAA1CC"
    // do this : once the html element is grabbed apply css styling 
    document.getElementById("tdOne").innerHTML = "<span style= 'font-size: 40px'> Who  </span>"
    
    $('#tdOne').append(`<div>
    <div><button onClick="clicked()">Button 2</button></div>
    </div>`)
    //go get the element and add a button to it 
}
document.getElementById("tdTwo").addEventListener("click", secondTD)

function secondTD() {
    // declare function 
    document.getElementById("tdTwo").style.background = "#EAA1CC"
    // do this : once the html element is grabbed apply css styling 
    document.getElementById("tdTwo").innerHTML = "<span style= 'font-size: 40px'> Who  </span>"

    $('#tdTwo').append(`<div>
     <div><button onClick="clicked()">Button 2</button></div>
     </div>`)
}

//------------function for sweetalert--------
// function clicked() {
//     swal({
//         content: {
//             element: "input",
//             attributes: {
//                 placeholder: "Answer",
//                 type: "text",
//             },
//         },
//     });
// }

// -----------function for score----------------------
// objective: create a function that take the input value and check to see if it matches the correct answer when the button is clicked
// step one: go get the button element and listen when the user clicks the element to run a function to check the answer

// step two: declare variables
// var a = document.getElementsByClassName().value
// var score = 0

// step three: create the function to check answer by using if statments

// document.getElementById("score1").addEventListener("click", function() {
//     if (a === "Who is JayZ") {
//         score += 100
//         document.getElementById("score1").innerHTML = "100"
//     }
// })


function myFunction () {
    var score = 0
    var person = prompt("Enter your answer")

    if( person === "who is jay"){
        score += "100"
    } else{
        text = "incorrect"
    }
    document.getElementById("score1").innerHTML = score
}
