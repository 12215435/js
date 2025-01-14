const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

const message = document.createElement("div");
message.className = "message";
message.innerText = "You can't catch me!";  // Changed message
document.body.appendChild(message);

// Set initial button text
yesBtn.textContent = "Let's go!";  // Changed button text
noBtn.textContent = "Not now";      // Changed button text

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Great choice! Let's begin!";  // Changed success message
  gif.src = "https://media.giphy.com/media/3oz8xAFtqoOUUrsh7W/giphy.gif"; // Changed to new GIF
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