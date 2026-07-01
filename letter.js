const envelope =
document.getElementById("envelope");

const ribbon =
document.getElementById("ribbon");

const letter =
document.getElementById("letter");

const typewriterText =
document.getElementById("typewriterText");

let opened = false;

/* ------------------------- */
/* Letter Content */
/* ------------------------- */

const message =

`From the very first moment,
there was something special about you.

You became the reason behind
so many smiles, so many memories,
and so many beautiful moments.

No matter how many pages life writes,
you will always be my favorite chapter.

Thank you for being part of my journey,
for making ordinary days feel magical,
and for giving my heart a place to belong.

You are not just someone I love...
you are someone I cherish.

Forever Yours,

Shaina ❤️`;

/* ------------------------- */
/* Open Letter */
/* ------------------------- */

ribbon.addEventListener(
"click",
()=>{

if(!opened){

openLetter();

}else{

closeLetter();

}

}
);

/* ------------------------- */

function openLetter(){

opened = true;

envelope.classList.add("open");

typewriterText.innerHTML="";

let i = 0;

let currentHeight = 120;

/* Letter slowly comes out */

const typing =
setInterval(()=>{

if(i < message.length){

const char =
message.charAt(i);

const span =
document.createElement("span");

span.classList.add("glow");

span.innerHTML =
char === "\n"
? "<br>"
: char;

typewriterText.appendChild(
span
);

/* Letter grows while typing */

if(i % 4 === 0){

currentHeight += 4;

letter.style.height =
currentHeight + "px";

}

/* Max size */

if(currentHeight > 520){

currentHeight = 520;

}

i++;

}else{

clearInterval(
typing
);

}
},60);

}

/* ------------------------- */
/* Close Letter */
/* ------------------------- */

function closeLetter(){

opened = false;

envelope.classList.remove(
"open"
);

letter.style.height =
"120px";

typewriterText.innerHTML =
"";

}

/* ------------------------- */
/* Falling Petals */
/* ------------------------- */

function createPetal(){

const petal =
document.createElement("div");

petal.className =
"petal";

petal.innerHTML =
["🌹","🌸","💖"]
[Math.floor(Math.random()*3)];

petal.style.left =
Math.random()*100+"vw";

petal.style.fontSize =
(18 + Math.random()*20)
+"px";

petal.style.animationDuration =
(5 + Math.random()*5)
+"s";

document.body.appendChild(
petal
);

setTimeout(()=>{

petal.remove();

},10000);

}

setInterval(
createPetal,
400
);

/* ------------------------- */
/* Sparkles */
/* ------------------------- */

function createSparkle(){

const sparkle =
document.createElement("div");

sparkle.className =
"sparkle";

sparkle.innerHTML =
"✨";

sparkle.style.left =
Math.random()*100+"vw";

sparkle.style.top =
Math.random()*100+"vh";

sparkle.style.fontSize =
(8 + Math.random()*12)
+"px";

document.body.appendChild(
sparkle
);

setTimeout(()=>{

sparkle.remove();

},3000);

}

setInterval(
createSparkle,
250
);