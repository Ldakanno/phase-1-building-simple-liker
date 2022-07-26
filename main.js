// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const errorMessage = document.querySelector("#modal");
// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  console.log("The DOM has loaded.")
  errorMessage.classList.add("hidden");
  hearClicks();
})

function hearClicks() {
  document.addEventListener("click", (event) => {
    if(event.target.classList[0] === "like-glyph") {
      mimicServerCall()
      .then((response)=> {
        const activated = event.target.classList.contains("activated-heart");
        if(activated) {
          event.target.classList.remove("activated-heart");
          event.target.innerHTML = EMPTY_HEART;
        }else{
          event.target.classList.add("activated-heart");
          event.target.innerHTML = FULL_HEART;
        }
      })
      .catch((error) => {
        console.log(error);
        errorMessage.classList.remove("hidden");
        setTimeout(() => {errorMessage.classList.add("hidden")}, 3000);
      })
    }
  })
}







// OTHER WAY TO GO ABOUT IT
// function findLikes() {
//   const hearts = document.querySelectorAll(".like-glyph");
//   hearts.forEach(heart => {
//     heart.addEventListener("click", () => {
//       console.log("I was clicked");
//     })
//   })
// }

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
