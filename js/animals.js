


let fillbar = document.querySelector(".fill");
let audios = ["../audio/dog.mp3", "../audio/caow.mp3", "../audio/cheep.mp3", "../audio/pow.mp3", "../audio/frog.mp3", "../audio/Audio_One.mp3"];
let covers = ["../imgs/cover1.jpg", "../imgs/cover2.jpg", "../imgs/cover3.jpg"];

let audio = new Audio();



function playSong() {   
    audio.src = audios[currentSong];
    audio.play();
}

// Now let's Work on next and prev buttons
function changeImage(){


}
function animalsSound(elemSuond) {

    if (elemSuond == 'dog'){
        currentSong = 0;
        currentImage=0;
        document.getElementById("imgClickAndChange").src == currentImage
        console.log('dog', currentSong);
    }
    else if (elemSuond == 'frog') {
        currentSong = 4;
        console.log('frog', currentSong); 
     }
     else if (elemSuond == 'pow') {
        currentSong = 1;
        console.log('pow', currentSong); 
     }
  else if (elemSuond == 'hourse') {
    currentSong = 2;
    console.log('hourse', currentSong);
  }
  else if (elemSuond == 'dove') {
    currentSong = 3;
    console.log('dove', currentSong);
  }
  else if (elemSuond == 'cat') {
    currentSong = 5;
    console.log('dove', currentSong);
  }
  playSong();
}