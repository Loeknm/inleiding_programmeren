// Begin maken van tamagotchi, alles automatisch op 50 gezet. mooie middenweg. Met plaatje happy tamagotchi.
let tamagotchi = {
    name: "Tamagotchi",
    hunger: 50,
    happiness: 50,
    health: 50,
    image: "tamagotchi-happy.png"
};
// Ophalen van de HTML elementen. 
const tamagotchiImage = document.getElementById("tamagotchi-image");
const hungerElement = document.getElementById("hunger");
const happinessElement = document.getElementById("happiness");
const healthElement = document.getElementById("health");
const feedButton = document.getElementById("feed");
const playButton = document.getElementById("play");
const restButton = document.getElementById("rest");

function updateImage() {
    // Checkt of de Tamagotchi honger heeft.
    if (tamagotchi.hunger <= 20) {
      // zo ja? (onder de 20 dus) laat dan het volgende plaatje zien: 
      tamagotchi.image = "tamagotchi-hungry.png";
    }
    
    // checkt of de tamagotchi blij is of niet. 
    else if (tamagotchi.happiness <= 20) {
      // zo niet? (onder de 20 dus) laat dan het volgende plaatje zien: 
      tamagotchi.image = "tamagotchi-sad.png";
    }
    
    // Checkt of de tamagotchi gezond is. 
    else if (tamagotchi.health <= 20) {
      // zo niet? (onder de 20 dus) laat dan het volgende plaatje zien: 
      tamagotchi.image = "tamagotchi-sick.png";
    }
    
    // Geen van de bovenstaande? dan is de vis dus blij. 
    else {
      // Plaatje van blije vis. 
      tamagotchi.image = "tamagotchi-happy.png";
    }
    
    // Update het plaatje op het scherm. 
    tamagotchiImage.src = tamagotchi.image;
    
    // Update de textcontent 
    hungerElement.textContent = "Hunger: " + tamagotchi.hunger;
    happinessElement.textContent = "Happiness: " + tamagotchi.happiness;
    healthElement.textContent = "Health: " + tamagotchi.health;
}
// veranderd de tekst bij de waardes van de tamagotchi
function updateStats() {
    hungerElement.textContent = "Hunger: " + tamagotchi.hunger;
    happinessElement.textContent = "Happiness: " + tamagotchi.happiness;
    healthElement.textContent = "Health: " + tamagotchi.health;
}
// functie die checkt of de tamagotchi dood is. Dood is 0 (of minder) en geeft dan een alert: Your tamagotchi has died! 
function checkTamagotchiStatus() {
    if (tamagotchi.hunger <= 0 || tamagotchi.happiness <= 0 || tamagotchi.health <= 0) {
        alert("Your Tamagotchi has died!");
        resetTamagotchi();
    }
}
// Functie die de tamagotchi reset naar de "normale" waardes nadat deze is doodgegaan. 
function resetTamagotchi() {
    tamagotchi.hunger = 50;
    tamagotchi.happiness = 50;
    tamagotchi.health = 50;
    tamagotchi.image = "tamagotchi-happy.png";
    updateStats();
    updateImage();
}

// Sound effect
const soundEffect = new Audio("click.wav.mp3");

feedButton.addEventListener("click", () => {
    tamagotchi.hunger += 10;
    tamagotchi.health -= 5;
    updateStats();
    updateImage();
    soundEffect.play(); // Afspelen sound effect
    checkTamagotchiStatus();
});

playButton.addEventListener("click", () => {
    tamagotchi.happiness += 10;
    tamagotchi.health -= 5;
    updateStats();
    updateImage();
    soundEffect.play(); // Afspelen sound effect
    checkTamagotchiStatus();
});

restButton.addEventListener("click", () => {
    tamagotchi.health += 10;
    tamagotchi.hunger -= 5;
    updateStats();
    updateImage();
    soundEffect.play(); // Afspelen sound effect
    checkTamagotchiStatus();
});

// Eerste update, wordt direct uitgevoerd na laden van de pagina. 
updateStats();
updateImage();
