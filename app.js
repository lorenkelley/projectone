// objective: create a function that will make the .card dispear and apply a backgroundcolor to the td element
// step one: get the element apply event listener
document.getElementById("tdOne").addEventListener("click", firstTD)
// go to the html and grab the element (tdOne) and listen for the user to hover (mouseover) 

// step two: create a function
function firstTD() {
    // declare function 
    document.getElementById("tdOne").style.background = "#EAA1CC"
    // do this : once the html element is grabbed apply css styling 
    document.getElementById("tdOne").innerHTML = "<span style= 'font-size: 40px'> Who  </span>"
    $('#tdOne').append(`<div>
   <div><button onClick="clicked()">Button 2</button></div>
   </div>`)
//    go get the elementand add a button to it 
}
document.getElementById("tdTwo").addEventListener("click", secondTD)

function secondTD() {
    // declare function 
    document.getElementById("tdTwo").style.background = "#EAA1CC"
    // do this : once the html element is grabbed apply css styling 
    document.getElementById("tdTwo").innerHTML = "<span style= 'font-size: 40px'> Who  </span>"
    // get the html element that needs to have the questions added to it    
    // var btn = document.createElement("button")
    // btn.innerHTML = "test"
    // document.getElementById("tdOne").appendChild(btn)
    $('#tdTwo').append(`<div>
   <div><button onClick="clicked()">Button 2</button></div>
   </div>`)
//    go get the elementand add a button to it 
}
function clicked() {
    swal({
        content: {
          element: "input",
          attributes: {
            placeholder: "Answer",
            type: "text",
          },
        },
      });
}

var questionAnswer = document.getElementById("inputField").value

var score = 0 


if(questionAnswer === "Who is JayZ"){
    score += 100
    document.getElementById("score1").innerHTML = "100"
}
