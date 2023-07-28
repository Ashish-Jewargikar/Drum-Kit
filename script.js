

// Retrieve the kick button element
const boomButton = document.getElementById("boom");
const clapButton = document.getElementById("clap");
const hiHatButton = document.getElementById("hihat");
const kickButton = document.getElementById("kick");
const openhatButton = document.getElementById("openhat");
const rideButton = document.getElementById("ride");
const snareButton = document.getElementById("snare");
const tinkButton = document.getElementById("tink");
const tomButton = document.getElementById("tom");


// Retrieve the kick sound element
const boomSound = document.getElementById("boom-sound");
const clapSound = document.getElementById("clap-sound");
const hiHatSound = document.getElementById("hihat-sound");
const kickSound = document.getElementById("kick-sound");
const openhatSound = document.getElementById("openhat-sound");
const rideSound = document.getElementById("ride-sound");
const snareSound = document.getElementById("snare-sound");
const tinkSound = document.getElementById("tink-sound");
const tomSound = document.getElementById("tom-sound");



// Attach a click event listener to the kick button
kickButton.addEventListener("click", function() {
  // Reset the sound time to replay it
  kickSound.currentTime = 0;
  
  // Play the kick sound
  kickSound.play();
});

rideButton.addEventListener("click", function() {
  // Reset the sound time to replay it
  rideSound.currentTime = 0;
  
  // Play the kick sound
  rideSound.play();
});

snareButton.addEventListener("click", function() {
  snareSound.currentTime = 0;
  snareSound.play();
});

tomButton.addEventListener("click", function() {
  tomSound.currentTime = 0;
  tomSound.play();
});

hiHatButton.addEventListener("click", function() {
  hiHatSound.currentTime = 0;
  hiHatSound.play();
});

boomButton.addEventListener("click", function() {
  boomSound.currentTime = 0;
  boomSound.play();
});

clapButton.addEventListener("click", function() {
  clapSound.currentTime = 0;
  clapSound.play();
});

openhatButton.addEventListener("click", function() {
  openhatSound.currentTime = 0;
  openhatSound.play();
});

tinkButton.addEventListener("click", function() {
  tinkSound.currentTime = 0;
  tinkSound.play();
});

// Attach a keydown event listener to the document
document.addEventListener("keydown", function(event) {
  // Check if the pressed key is "a"
  if (event.key === "a") {
    kickSound.currentTime = 0;
    kickSound.play();
  } else if (event.key === "s") {
    rideSound.currentTime = 0;
    rideSound.play();
  } else if (event.key === "d") {
    snareSound.currentTime = 0;
    snareSound.play();
  } else if (event.key === "f") {
    tomSound.currentTime = 0;
    tomSound.play();
  } else if (event.key === "g") {
    hiHatSound.currentTime = 0;
    hiHatSound.play();
  }
  else if (event.key === "h") {
    boomSound.currentTime = 0;
    boomSound.play();
  }
  else if (event.key === "j") {
    clapSound.currentTime = 0;
    clapSound.play();
  }
  else if (event.key === "k") {
    tinkSound.currentTime = 0;
    tinkSound.play();
  }
  else if (event.key === "l") {
    tomSound.currentTime = 0;
    tomSound.play();
  }
});