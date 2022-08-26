// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const errorModal = document.querySelector('#modal');
errorModal.className = "hidden";


const likeHeart = document.querySelector(".like-glyph");

likeHeart.addEventListener('click', serverRequest);

function serverRequest(){
  if(likeHeart.textContent === FULL_HEART){

    likeHeart.textContent = EMPTY_HEART;

    likeHeart.classList.remove(".activated-heart");

  } else{
    const res = mimicServerCall();
    res.then((info) => {
    console.log(info);

    likeHeart.textContent = FULL_HEART;

    likeHeart.className = "activated-heart";
    })
    

    .catch((error) => {
      errorModal.classList.remove("hidden");
  
      document.querySelector('#modal-message').textContent = error.message;
  
      setTimeout(() => {
        errorModal.className = "hidden";
      }, 3000);
  
      }) 

  }
}


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
