// let randomNumber1 = Math.round((Math.random() * 5)+1)
// let randomNumber2 = Math.round((Math.random() * 5)+1)
// console.log(randomNumber1)

// if (randomNumber1 === 1) {
//     document.querySelector(".img1").setAttribute("src", "images/dice1.png")
// } else if (randomNumber1 === 2) {
//     document.querySelector(".img1").setAttribute("src", "images/dice2.png")
// } else if (randomNumber1 === 3) {
//     document.querySelector(".img1").setAttribute("src", "images/dice3.png")
// } else if (randomNumber1 === 4) {
//     document.querySelector(".img1").setAttribute("src", "images/dice4.png")
// } else if (randomNumber1 === 5) {
//     document.querySelector(".img1").setAttribute("src", "images/dice5.png")
// } else {
//     document.querySelector(".img1").getAttribute("src", "images/dice6.png")
// }

// if (randomNumber2 === 1) {
//     document.querySelector(".img2").setAttribute("src", "images/dice1.png")
// } else if (randomNumber2 === 2) {
//     document.querySelector(".img2").setAttribute("src", "images/dice2.png")
// } else if (randomNumber2 === 3) {
//     document.querySelector(".img2").setAttribute("src", "images/dice3.png")
// } else if (randomNumber2 === 4) {
//     document.querySelector(".img2").setAttribute("src", "images/dice4.png")
// } else if (randomNumber2 === 5) {
//     document.querySelector(".img2").setAttribute("src", "images/dice5.png")
// } else {
//     document.querySelector(".img2").getAttribute("src", "images/dice6.png")
// }
// if (randomNumber1 > randomNumber2) {
//     document.querySelector("h1").innerHTML= 'Player 1 Won'
// } else if (randomNumber1 < randomNumber2) {
//     document.querySelector("h1").innerHTML= 'Player 2 Won'
// } else{
//     document.querySelector("h1").innerHTML= "It's A Tie"
// } 


// let name = prompt("what is your name?")
//  let firstLetter = name.slice(0,1).toUpperCase()
// remainingLetters = name.slice(1, name.length).toLowerCase()
// name = firstLetter + remainingLetters

// document.querySelector(".player1").innerHTML = name;

// document.querySelector(".start").addEventListener("click", () => {
//     let randomNumber1 = Math.floor(Math.random() * 6 + 1)
//     let randomNumber2 = Math.floor(Math.random() * 6 + 1)

//     document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png")
//     document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png")

//     if(randomNumber1 > randomNumber2) {
//     document.querySelector("h1").innerHTML = (`${name}  won`)
//     } else if (randomNumber2 > randomNumber1) {
//         document.querySelector("h1").innerHTML = "Computer won"  
//     } else {
//         document.querySelector("h1").innerHTML = "Its a tie"  
//     }
// })

let name = prompt("what is your name?")
 let firstLetter = name.slice(0,1).toUpperCase()
remainingLetters = name.slice(1, name.length).toLowerCase()
name = firstLetter + remainingLetters

$(".player1").text(name);
$(".start").click( () => {
    let randomNumber1 = Math.floor(Math.random() * 6 + 1)
    let randomNumber2 = Math.floor(Math.random() * 6 + 1)
    $(".img1").attr("src", "images/dice" + randomNumber1 + ".png")
   $(".img2").attr("src", "images/dice" + randomNumber2 + ".png")
    if(randomNumber1 > randomNumber2) {
   $("h1").text(`${name} won`)
    } else if (randomNumber2 > randomNumber1) {
        $("h1").text("Computer won" ) 
    } else {
       $("h1").text( "Its a tie"  )
    }
})



// let randomNumber1 = Math.floor(Math.random() * 6 + 1)
// let randomNumber2 = Math.floor(Math.random() * 6 + 1)
// document.querySelector(".img1").setAttribute("src", `images/dice${randomNumber1}.png`)
// document.querySelector(".img2").setAttribute("src", `images/dice${randomNumber2}.png`)
// if(randomNumber1 > randomNumber2) {
// document.querySelector("h1").innerHTML = "Player 1 won"
// } else if (randomNumber2 > randomNumber1) {
//     document.querySelector("h1").innerHTML = "Player 2 won"  
// } else {
//     document.querySelector("h1").innerHTML = "Its a tie"  
// }