const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

const message = document.createElement("div");
message.className = "message";
message.innerText = "Catch me!";
document.body.appendChild(message);

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yay, see you tomorrow!";
  gif.src = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNm03dGhjem9zNW0zcTMxc3ZkbjlpNHM2dnFiaTh3aDNhbWhkbG1rYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SQgbkziuGrNxS/giphy.gif"; 
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