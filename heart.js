const startScreen = document.getElementById("startScreen");
const gameScreen = document.getElementById("gameScreen");

const oopsScreen = document.getElementById("oopsScreen");
const wrongHeartScreen = document.getElementById("wrongHeartScreen");
const winScreen = document.getElementById("winScreen");

const hintBtn = document.getElementById("hintBtn");
const hintBox = document.getElementById("hintBox");

const startBtn = document.getElementById("startBtn");

const gameArea = document.getElementById("gameArea");
const basket = document.getElementById("basket");

const scoreEl = document.getElementById("score");
const chosenHeartEl = document.getElementById("chosenHeart");

const retryBtns =
document.querySelectorAll(".retry-btn");

let score = 0;

let selectedColor = null;

let gameStarted = false;

let spawnInterval;

const targetScore = 6;

/* -------------------------- */
/* Floating Background Hearts */
/* -------------------------- */

function createBgHeart(){

    const heart =
    document.createElement("div");

    heart.innerHTML =
    ["❤️","🩷","💙"]
    [Math.floor(Math.random()*3)];

    heart.style.position="absolute";

    heart.style.left=
    Math.random()*100+"vw";

    heart.style.top="-50px";

    heart.style.fontSize=
    (20+Math.random()*20)+"px";

    heart.style.opacity=".4";

    heart.style.transition=
    "6s linear";

    document
    .getElementById("bgHearts")
    .appendChild(heart);

    setTimeout(()=>{

        heart.style.transform=
        `translateY(110vh)`;

    },50);

    setTimeout(()=>{
        heart.remove();
    },6000);
}

setInterval(createBgHeart,400);

/* ---------- Hint ---------- */

hintBtn.onclick = () => {

    if(
      hintBox.style.display==="block"
    ){

      hintBox.style.display="none";

    }else{

      hintBox.style.display="block";

    }
};

/* -------- Start Game ------- */

startBtn.onclick = () => {

    startScreen.classList.remove("active");

    gameScreen.classList.add("active");

    gameStarted = true;

    spawnInterval =
    setInterval(spawnHeart,1500);
};

/* -------- Basket Move ------- */

document.addEventListener(
"mousemove",
(e)=>{

    basket.style.left =
    e.clientX + "px";
});

/* -------- Spawn Heart ------- */

function spawnHeart(){

    const colors = [
      "red",
      "pink",
      "blue"
    ];

    const emojis = {
      red:"❤️",
      pink:"🩷",
      blue:"💙"
    };

    const color =
    colors[
      Math.floor(
      Math.random()*3
      )
    ];

    const heart =
    document.createElement("div");

    heart.className =
    "falling-heart";

    heart.dataset.color =
    color;

    heart.innerHTML =
    emojis[color];

    heart.style.left =
    Math.random()*90 + "vw";

    heart.style.animationDuration =
    (6+ Math.random()*3)
    + "s";

    gameArea.appendChild(
    heart
    );

    const checkCollision =
setInterval(()=>{

  const heartRect =
  heart.getBoundingClientRect();

  const basketRect =
  basket.getBoundingClientRect();

  const heartCenter =
  heartRect.left +
  heartRect.width / 2;

  const basketLeft =
  basketRect.left + 50;

  const basketRight =
  basketRect.right - 50;

//   if(

//     heartRect.bottom >=
//     basketRect.top + 20 &&

//     heartCenter >
//     basketLeft &&

//     heartCenter <
//     basketRight

    //   ){
    if(

  heartRect.bottom >= basketRect.bottom - 20 &&

  heartCenter > basketLeft &&

  heartCenter < basketRight

){

    catchHeart(color);

    heart.remove();

    clearInterval(
    checkCollision
    );
  }

},50);

    setTimeout(()=>{

      clearInterval(
      checkCollision
      );

      heart.remove();

    },7000);
}

/* -------- Catch Logic ------- */

function catchHeart(color){

    /* First Heart */

    if(
      selectedColor===null
    ){

      selectedColor =
      color;

      chosenHeartEl.innerHTML =
      color==="red"
      ?"❤️"
      :color==="pink"
      ?"🩷"
      :"💙";
    }

    /* Different Color */

    if(
      color !== selectedColor
    ){

      gameOverOops();

      return;
    }

    score++;

    scoreEl.innerHTML =
    score;

    if(
      score >= targetScore
    ){

      /* Pink Wins */

      if(
        selectedColor==="pink"
      ){

        winGame();

      }else{

        wrongHeart();
      }
    }
}

/* ---------- OOPS ----------- */

function gameOverOops(){

    clearInterval(
    spawnInterval
    );

    gameScreen.classList.remove(
    "active"
    );

    oopsScreen.classList.add(
    "active"
    );
}

/* ------ Wrong Heart ------- */

function wrongHeart(){

    clearInterval(
    spawnInterval
    );

    gameScreen.classList.remove(
    "active"
    );

    wrongHeartScreen.classList.add(
    "active"
    );
}

/* -------- Win ------------ */

function winGame(){

    clearInterval(
    spawnInterval
    );

    gameScreen.classList.remove(
    "active"
    );

    winScreen.classList.add(
    "active"
    );

    revealName();
}

/* ----- Name Reveal ------- */

function revealName(){

    const target =
    document.getElementById(
    "nameReveal"
    );

    const text =
    "💖 SHAINA 💖";

    let i = 0;

    function type(){

      if(
        i < text.length
      ){

        target.innerHTML +=
        text.charAt(i);

        i++;

        setTimeout(
        type,
        120
        );

      }else{

        setTimeout(()=>{

          location.href =
          "surprise.html";

        },10000);

      }
    }

    type();
}
function launchConfetti(){

 const container =
 document.getElementById(
 "confettiContainer"
 );

 for(let i=0;i<120;i++){

   const c =
   document.createElement("div");

   c.className =
   "confetti";

   c.innerHTML =
   ["🎊","✨","💖","🎉","🩷"]
   [Math.floor(Math.random()*5)];

   c.style.left =
   Math.random()*100+"vw";

   c.style.animationDelay =
   Math.random()*2+"s";

   container.appendChild(c);

   setTimeout(()=>{
      c.remove();
   },5000);
 }
}
/* ------ Retry -------- */

retryBtns.forEach(btn=>{

    btn.addEventListener(
    "click",
    ()=>{

      location.reload();

    });

});



const surpriseBtn =
document.getElementById(
"surpriseBtn"
);

if(surpriseBtn){

 surpriseBtn.addEventListener(
 "click",
 ()=>{

   location.href =
   "next_page.html";

 });

}