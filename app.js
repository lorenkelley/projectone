// objective: create a function that will make the .card dispear and apply a backgroundcolor to the td element
// step one: get the element apply event listener
document.getElementsByTagName("td").addEventListener("click", hoverTD)
// go to the html and grab the element (tdOne) and listen for the user to hover (mouseover) 

// step two: create a function
function hoverTD() {
    // declare function 
    document.getElementsByTagName('td').style.background = "#EAA1CC"
    // do this : once the html element is grabbed apply css styling 
    document.getElementsByTagName('td').innerHTML = "<span style= 'font-size: 40px'> Who  </span>"
    // get the html element that needs to have the questions added to it    
    // var btn = document.createElement("button")
    // btn.innerHTML = "test"
    // document.getElementById("tdOne").appendChild(btn)
    $('td').append(`<div>
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

// let points = 0
// let score = document.getElementById("playerOne")

