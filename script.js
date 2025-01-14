const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

const message = document.createElement("div");
message.className = "message";
message.innerText = "You can't catch me!";  
document.body.appendChild(message);


yesBtn.textContent = "Let's go!"; 
noBtn.textContent = "Not now";     

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Great choice! Let's begin!";  
  gif.src = "https://media.giphy.com/media/3oz8xAFtqoOUUrsh7W/giphy.gif"; 
});

let messageShown = false; 

noBtn.addEventListener("mouseover", () => {
  if (!messageShown) {
    message.style.display = "block"; 
    setTimeout(() => {
      message.style.display = "none"; 
    }, 2000);
    messageShown = true; 
  }

  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});