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
    swal("In Stranger Things, Season 2, what name does Dustin give the strange new pet he finds in his garbage can? ", {
            content: "input",
        })
        .then((value) => {
            if (value == " What is Dart") {
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
    swal("This company has acuquried a grocery store chain", {
            content: "input",
        })
        .then((value) => {
            if (value === "What is Amazon") {
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
    swal("The first female rapper with two Billboard Hot 100 No. 1s", {
            content: "input",
        })
        .then((value) => {
            if (value === "Who is Cardi B") {
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
    swal("It is now illegal to hold _____ while driving in Georgia", {
            content: "input",
        })
        .then((value) => {
            if (value === "What is cellphone") {
                score += 100
            }
            document.getElementById("score1").innerHTML = score
        });
}
// #5
document.getElementById("tdFive").addEventListener("click", fifthTD)

function fifthTD() {
    document.getElementById("tdFive").style.background = "#EAA1CC"
    document.getElementById("tdFive").innerHTML = "<span style= 'font-size: 40px'></span>"
}

function clickMeFive() {
    swal(" Which new Star Wars film came out this last year?", {
            content: "input",
        })
        .then((value) => {
            if (value === "What is Last Jedi") {
                score += 200
            }
            document.getElementById("score1").innerHTML = score
        });
}
// #6
document.getElementById("tdSix").addEventListener("click", sixthTD)

function sixthTD() {
    document.getElementById("tdSix").style.background = "#EAA1CC"
    document.getElementById("tdSix").innerHTML = "<span style= 'font-size: 40px'></span>"
}

function clickMeSix() {
    swal(" This css property started to replace Flex-Box ", {
            content: "input",
        })
        .then((value) => {
            if (value === "What is grid") {
                score += 200
            }
            document.getElementById("score1").innerHTML = score
        });
}
// #7
document.getElementById("tdSeven").addEventListener("click", seventhTD)

function seventhTD() {
    document.getElementById("tdSeven").style.background = "orange"
    document.getElementById("tdSeven").innerHTML = "<span style= 'font-size: 40px' 'color: whitesmoke'> DAILY DOUBLE</span>"
}

function clickMeSeven() {
    swal(" This couple dropped a surprise album this year by the name of...", {
            content: "input",
        })
        .then((value) => {
            if (value === "What is the Carters") {
                score += 200
            }
            document.getElementById("score1").innerHTML = score
        });
}
// #8
document.getElementById("tdEight").addEventListener("click", eighthTD)

function eighthTD() {
    document.getElementById("tdEight").style.background = "#EAA1CC"
    document.getElementById("tdEight").innerHTML = "<span style= 'font-size: 40px'></span>"
}

function clickMeEight() {
    swal(" This 28-Year-Old Latina Activist Just Beat New York's Most Powerful Congressional Rep", {
            content: "input",
        })
        .then((value) => {
            if (value === "Alexandria Ocasio-Cortez") {
                score += 200
            }
            document.getElementById("score1").innerHTML = score
        });
}
// #9
document.getElementById("tdNine").addEventListener("click", ninthTD)

function ninthTD() {
    document.getElementById("tdNine").style.background = "#EAA1CC"
    document.getElementById("tdNine").innerHTML = "<span style= 'font-size: 40px'></span>"
}

function clickMeNine() {
    swal(" What super hero movie grossed over 700 million dollars in 2018?", {
            content: "input",
        })
        .then((value) => {
            if (value === "What is Black Panther") {
                score += 300
            }
            document.getElementById("score1").innerHTML = score
        });
}

// #10
document.getElementById("tdTen").addEventListener("click", tenthTD)

function tenthTD() {
    document.getElementById("tdTen").style.background = "#EAA1CC"
    document.getElementById("tdTen").innerHTML = "<span style= 'font-size: 40px'></span>"
}

function clickMeTen() {
    swal(" By the end of WDI we will be known as", {
            content: "input",
        })
        .then((value) => {
            if (value === "What is full stack developers") {
                score += 300
            }
            document.getElementById("score1").innerHTML = score
        });
}
// #11
document.getElementById("tdEleven").addEventListener("click", eleventhTD)

function eleventhTD() {
    document.getElementById("tdEleven").style.background = "#EAA1CC"
    document.getElementById("tdEleven").innerHTML = "<span style= 'font-size: 40px'></span>"
}

function clickMeEleven() {
    swal(" This artist had everyone in their feelings", {
            content: "input",
        })
        .then((value) => {
            if (value === "Who is Drake") {
                score += 300
            }
            document.getElementById("score1").innerHTML = score
        });
}
// #12
document.getElementById("tdTwelve").addEventListener("click", TwelveTD)

function TwelveTD() {
    document.getElementById("tdTwelve").style.background = "#EAA1CC"
    document.getElementById("tdTwelve").innerHTML = "<span style= 'font-size: 40px'></span>"
}

function clickMeTwelve() {
    swal(" ", {
            content: "input",
        })
        .then((value) => {
            if (value === "Who is Drake") {
                score += 300
            }
            document.getElementById("score1").innerHTML = score
        });
}