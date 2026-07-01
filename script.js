const CORRECT_PASSWORD = "0219";
let wrongAttempts = 0;

// --- 1. Background Rose Petals Generator ---
function createPetals() {
    const container = document.getElementById("petalsContainer");
    const petalCount = 25; 

    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement("div");
        petal.classList.add("petal");
        
        petal.style.left = Math.random() * 100 + "vw";
        petal.style.width = Math.random() * 12 + 8 + "px";
        petal.style.height = Math.random() * 12 + 8 + "px";
        petal.style.animationDuration = Math.random() * 4 + 4 + "s"; 
        petal.style.animationDelay = Math.random() * 5 + "s";
        
        container.appendChild(petal);
    }
}
window.addEventListener("DOMContentLoaded", createPetals);


// --- 2. Step-by-Step Stage Navigation Logic ---
function checkPassword() {
    const passwordInput = document.getElementById("passwordInput").value.trim();

    if (passwordInput === CORRECT_PASSWORD) {
        showStage("stage4"); // Correct Password -> Success Dance Window
    } else {
        wrongAttempts++;
        document.getElementById("passwordInput").value = ""; // Flush old value

        if (wrongAttempts === 1) {
            showStage("stage2"); // 1st Mistake -> Cute Cat + Only Hint 1
        } else if (wrongAttempts === 2) {
            showStage("stage3"); // 2nd Mistake -> Angry Cat + Only Hint 2
        } else {
            showStage("stage5"); // 3rd Mistake or higher -> Crying Baby + Only Hint 3
        }
    }
}

function goBackToTry() {
    showStage("stage1"); // Send back to input layer cleanly
    
    // Close open hints behind the scenes so they don't start open next turn
    for (let i = 1; i <= 3; i++) {
        const element = document.getElementById(`hint${i}`);
        if(element) element.style.display = "none";
    }
}

// --- 3. Click to Toggle Hint Display ---
function toggleHint(hintNumber) {
    const hintElement = document.getElementById(`hint${hintNumber}`);
    if (hintElement.style.display === "block") {
        hintElement.style.display = "none";
    } else {
        hintElement.style.display = "block";
    }
}

function showStage(stageId) {
    const stages = document.querySelectorAll(".stage");
    stages.forEach(stage => stage.classList.remove("active"));
    document.getElementById(stageId).classList.add("active");
}

// --- 4. NEW: Secure Automatic Page Redirection Transition Engine ---
function startTransition() {
    // This pre-warms the browser's audio permissions right on the click interaction loop
    const wakeUpAudio = new Audio("mixkit-several-whistle-fireworks-pop-3105.mp3");
    wakeUpAudio.volume = 0.01; // Plays virtually silently so it doesn't break the countdown timeline
    
    wakeUpAudio.play().then(() => {
        // Shifting routing targets instantly with safe autoplay parameters active
        window.location.href = "next_page.html";
    }).catch((err) => {
        console.log("Audio pipeline initialized via fallback route:", err.message);
        window.location.href = "next_page.html";
    });
}