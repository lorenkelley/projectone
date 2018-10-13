
function myFunction () {
    var txt
    var person = prompt("Enter your answer")

    if( person === "who is jay"){
        txt = "user input correct answer"
    } else{
        text = "incorrect"
    }
    document.getElementById("score1").innerHTML = txt
}


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