// function to change background color of table cell
document.getElementById("tdTwo").addEventListener("click", secondTD)

function secondTD() {
    // declare function 
    document.getElementById("tdTwo").style.background = "#EAA1CC"
    // do this : once the html element is grabbed apply css styling 
    document.getElementById("tdTwo").innerHTML = "<span style= 'font-size: 40px'></span>"

}
//------------function for sweetalert--------
var score = 0

function clickMe() {
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



