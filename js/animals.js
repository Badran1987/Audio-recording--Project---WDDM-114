


let fillbar = document.querySelector(".fill");
let audios = ["../audio/dog.mp3", "../audio/caow.mp3", "../audio/cheep.mp3", "../audio/birds.mp3", "../audio/frog.mp3", "../audio/cat2.mp3"];
let images = ["../images/dog.jpg","../images/cow.jpg", "../images/cheep.jpg","../images/pinyon-jay-bird.jpg", "../images/frog.jpg", "../images/cat.jpg"];

let audio = new Audio();



function playSong() {   
    audio.src = audios[currentSong];
    audio.play();
}

// Now let's Work on next and prev buttons
function changeImage(){


}

// Create function for change images
function imagefun() {
    var Image_Id = document.getElementById('imgClickAndChange');
    Image_Id.src = images[currentImage];
    console.log( Image_Id.src, 'SRC')
    console.log( Image_Id , 'ID')

}        

// Create function for change sounds.

function animalsSound(elemSuond) {

    if (elemSuond == 'dog'){
        currentSong = 0;
        currentImage=0;
       
        console.log('dog', currentSong);
    }
    else if (elemSuond == 'frog') {
        currentSong = 4;
        currentImage=4;
        console.log('frog', currentSong); 
     }
     else if (elemSuond == 'cow') {
        currentSong = 1;
        currentImage=1;
        console.log('pow', currentSong); 
     }
  else if (elemSuond == 'horse') {
    currentSong = 2;
    currentImage=2;
    console.log('hourse', currentSong);
  }
  else if (elemSuond == 'brid') {
    currentSong = 3;
    currentImage=3;
    console.log('dove', currentSong);
  }
  else if (elemSuond == 'cat') {
    currentSong = 5;
    currentImage=5;
    console.log('dove', currentSong);
  }
  playSong();
  imagefun()
}