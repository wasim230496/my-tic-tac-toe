// console.log('welcome to tic tac toe')
// let music = new Audio("music.mp3");
// let turnmusic = new Audio("ting.mp3")
// let gameover = new Audio("gameover.mp3")

// const resetButton = document.querySelector('#reset-button');
// const message = document.getElementById('message');
// let turn = 'X';
// const boxes = document.getElementsByClassName('box');

// let isgameover = false;
// // function for reset game 
// // let resetFunction = function() {
// //   for (let i = 0; i < boxes.length; i++) {
// //     boxes[i].textContent = '';
// //     location.reload();
// //   }
// //   message.textContent = '';
// //   turn = 'X';
// // }

// // //function for check for winner
// function checkForWinner() {
//   const boxtexts = document.getElementsByClassName("boxtext")
//   document.getElementById("line")
//   const possibleWinningCombinations = [
//     [0, 1, 2, 2, 5, 0],
//     [3, 4, 5, 2, 15, 0],
//     [6, 7, 8, 2, 25, 0],
//     [0, 3, 6, -8, 15, 90],
//     [1, 4, 7, 3, 15, 90],
//     [2, 5, 8, 13, 15,90],
//     [0, 4, 8, 2, 15, 45],
//     [2, 4, 6, 2, 15, -45]
//   ];
//   possibleWinningCombinations.forEach(e=>{
    
//     if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText !== "") ){
//       message.innerText = boxtexts[e[0]].innerText + " wins";
//       document.getElementById("gif").style.width = "200px";
//       document.querySelector(".line").style.width = "25vw";
//       document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
//       message.style.fontSize = "30px"
//       isgameover = true;
//     }
//   })
// }






// const changeTurn = ()=>{
//   return turn ==="X"?"O":"X"
// }

// //function to change the turn

// Array.from(boxes).forEach(element=>{
//   let boxtext = element.querySelector(".boxtext");
//     element.addEventListener('click',()=>{
//       if (boxtext.innerText === '') {
//         boxtext.innerText = turn;
//         turn = changeTurn();
//         turnmusic.play();
//         checkForWinner();
//         if(!isgameover){

//           message.innerText = "turn for "+turn; 
//           isgameover = false;       
//         }
  
//       }
//     })


// });



// // Function to check if all boxes are filled without a winner
// function checkForTie() {
//   const boxtexts = document.getElementsByClassName("boxtext");
//   let allFilled = true;

//   for (let i = 0; i < boxtexts.length; i++) {
//     if (boxtexts[i].innerText === '') {
//       allFilled = false; // There's still an empty box
//       break;
//     }
//   }

//   // If all boxes are filled and no winner
//   if (allFilled && !isgameover) {
//     message.innerText = "Game Over! It's a tie.";
//     setTimeout(() => {
//       if (confirm("It's a tie! Do you want to play again?")) {
//         resetGame();
//       }
//     }, 500);
//   }
// }

// // New resetGame function to restart the game
// function resetGame() {
//   for (let i = 0; i < boxes.length; i++) {
//     boxes[i].querySelector(".boxtext").innerText = '';
//   }
//   turn = 'X';
//   isgameover = false;
//   message.innerText = "Turn of " + turn;
//   document.getElementById("gif").style.width = "0";
//   document.querySelector(".line").style.width = "0";
// }

// // Include checkForTie in your existing event listener
// Array.from(boxes).forEach(element => {
//   let boxtext = element.querySelector(".boxtext");
//   element.addEventListener('click', () => {
//     if (boxtext.innerText === '' && !isgameover) {
//       boxtext.innerText = turn;
//       turn = changeTurn();
//       turnmusic.play();
//       checkForWinner();
//       if (!isgameover) {
//         message.innerText = "Turn for " + turn;
//         checkForTie(); // Check for tie if no winner is found
//       }
//     }
//   });
// });

// // reset button function
// resetButton.addEventListener('click',function() {
//   for (let i = 0; i < boxes.length; i++) {
//     boxes[i].textContent = '';
//     location.reload();
//   }
//   message.textContent = '';
//   turn = 'X';
// });


console.log('welcome to tic tac toe');
let music = new Audio("music.mp3");
let turnmusic = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");

const resetButton = document.querySelector('#reset-button');
const message = document.getElementById('message');
let turn = 'X';
const boxes = document.getElementsByClassName('box');
let isgameover = false;

// Function to check if all boxes are filled without a winner
function checkForTie() {
  const boxtexts = document.getElementsByClassName("boxtext");
  let allFilled = true;

  for (let i = 0; i < boxtexts.length; i++) {
    if (boxtexts[i].innerText === '') {
      allFilled = false; // There's still an empty box
      break;
    }
  }

  // If all boxes are filled and no winner
  if (allFilled && !isgameover) {
    message.innerText = "Game Over! It's a tie.";
    gameover.play();
    setTimeout(() => {
      if (confirm("It's a tie! Do you want to play again?")) {
        resetGame();
      }
    }, 500);
  }
}

// New resetGame function to restart the game
function resetGame() {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].querySelector(".boxtext").innerText = '';
  }
  turn = 'X';
  isgameover = false;
  message.innerText = "Turn of " + turn;
  document.getElementById("gif").style.width = "0";
  document.querySelector(".line").style.width = "0";
}

// Existing changeTurn function to toggle turns
const changeTurn = () => {
  return turn === "X" ? "O" : "X";
};

// Event listener for each box to handle game moves
Array.from(boxes).forEach(element => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener('click', () => {
    if (boxtext.innerText === '' && !isgameover) {
      boxtext.innerText = turn;
      turn = changeTurn();
      turnmusic.play();
      checkForWinner(); // Check for winner first
      if (!isgameover) {
        message.innerText = "Turn for " + turn;
        checkForTie(); // Then check for a tie
      }
    }
  });
});

// Existing checkForWinner function (place it here or above this code block)
function checkForWinner() {
  const boxtexts = document.getElementsByClassName("boxtext");
  const possibleWinningCombinations = [
    [0, 1, 2, 0, 5, 0],
    [3, 4, 5, 0, 15, 0],
    [6, 7, 8, 0, 25, 0],
    [0, 3, 6, -10, 15, 90],
    [1, 4, 7, 0, 15, 90],
    [2, 5, 8, 10, 15, 90],
    [0, 4, 8, 0, 15, 45],
    [2, 4, 6, 0, 15, -45]
  ];
  possibleWinningCombinations.forEach(e => {
    if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && 
        (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && 
        (boxtexts[e[0]].innerText !== "")) {
      message.innerText = boxtexts[e[0]].innerText + " wins";
      document.getElementById("gif").style.width = "200px";
      document.querySelector(".line").style.width = "30vw";
      document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
      message.style.fontSize = "30px";
      music.play();
      isgameover = true;
    }
  });
}

// Existing reset button function
resetButton.addEventListener('click', function() {
  resetGame(); // Use the resetGame function for resetting
  music.pause()
});



