
function playsound1() {
  new Audio("sounds/crash.mp3").play();
}

function playsound2() {
  new Audio("sounds/kick-bass.mp3").play();
}

function playsound3() {
  new Audio("sounds/tom-1.mp3").play();
}

function playsound4() {
  new Audio("sounds/tom-2.mp3").play();
}

function playsound5() {
  new Audio("sounds/tom-3.mp3").play();
}

function playsound6() {
  new Audio("sounds/tom-4.mp3").play();
}

function playsound7() {
  new Audio("sounds/snare.mp3").play();
}

function playSong1() {
  const beatDelay = 1500; 
  const sequence = [
    "crash.mp3",
    "kick-bass.mp3",
    "snare.mp3",
    "tom-1.mp3",
    "tom-2.mp3",
    "tom-3.mp3",
    "tom-4.mp3",
    "kick-bass.mp3",
    "snare.mp3",
    "crash.mp3",
  ];

  for (let i = 0; i < 20; i++) { 
    sequence.forEach((sound, index) => {
      setTimeout(() => {
        new Audio(`sounds/${sound}`).play();
      }, beatDelay * (i * sequence.length + index));
    });
  }
}
