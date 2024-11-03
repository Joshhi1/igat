const messages = [
    "Your eyes are as beautiful as the stars",
    "Palangga ka ni Nico 🥰💓💗💘",
    "I love everything about you",
    "I thank God everyday for ur existence 🙏🙏🙏",
    "You made my life worth living",
    "Out of all my kabetz you are my fav 💝💝💝",
    "I hope I’m ur favorite kabet pud 😘😘",
    "Thank you for being you..",
    "Thank you for making me feel like this, my Rayza 🥰🥰🥰",
    "Continue being you, it makes me fall harder day by day 💗💗"
];

let currentIndex = 0;

function generateMessage() {
    const messageElement = document.getElementById("message");
    const generateBtn = document.getElementById("generateBtn");

    messageElement.textContent = messages[currentIndex];

    if (currentIndex === messages.length - 2) {
        generateBtn.textContent = "Read Last Message";
    } else if (currentIndex === messages.length - 1) {
        generateBtn.textContent = "Read All Messages Again";
    } else if (currentIndex === -1) {
        generateBtn.textContent = "Read Messages";
    } else {
        generateBtn.textContent = "Read Next Message";
    }

    currentIndex++;
    if (currentIndex >= messages.length) {
        currentIndex = 0;
    }
}
